import Tx from '../mongo/models/transaction';

export async function getList(req, res) {
  try {
    const list = await Tx.find().sort({ timestamp: 1 });

    res.json(list);
  } catch(e) {
    console.error(e);
    res.status(500).send({ error: 'list() failed' });
  }
}


const start = 1556782200000; // 2019-05-02 16:30
const diff = 60000;

function makeBoundaries([ start, end ], N) {
  const tick = (end - start) / N;
  return Array.from(new Array(N), (e,i)=>start + tick*(i+1));
}

function getBoundary(boundaries, v) {
  let low = 0,
    high = boundaries.length - 1;

  let mid = -1;
  while(low <= high) {
    mid = Math.floor((low + high) / 2);

    if(v < boundaries[mid]) {
      high = mid - 1;
    } else if(v > boundaries[mid]) {
      low = mid + 1;
    } else {
      return boundaries[mid];
    }
  }
  return boundaries[low];
}

async function getHeatmapCounts() {
  try {
    console.time('getHeatmapCounts');

    const N = 10;
    const tsRange = [start+diff/3, start+diff];
    const etRange = [0, await getMaxElapsedTime(tsRange)];

    const filtered = await getFilteredList(tsRange);

    const tsBoundaries = makeBoundaries(tsRange, N);
    const tsBucket = filtered.reduce((obj, { timestamp, elapsedTime })=>{
      let b = getBoundary(tsBoundaries, timestamp);
      obj[b] = obj[b] || [];
      obj[b].push(elapsedTime);
      return obj;
    }, {});

    const etBoundaries = makeBoundaries(etRange, N);
    const tsEtBucket = Object.keys(tsBucket).reduce((bucket, key)=>{
      bucket[key] = tsBucket[key].reduce((obj, et)=>{
        let b = getBoundary(etBoundaries, et);
        obj[b] = obj[b] || 0;
        obj[b] += 1;
        return obj;
      }, {});

      return bucket;
    }, {});

    console.timeEnd('getHeatmapCounts');
    return tsEtBucket;
  } catch(e) {
    console.error(e);
  }
}

async function getMaxElapsedTime([ from, to ]) {
  try {
    const res = await Tx.aggregate([
      {
        $match: {
          timestamp: {
            $gt: from,
            $lt: to,
          }
        }
      },
      {
        $group: {
          _id: null,
          max: { $max: '$elapsedTime' },
        }
      },
    ]);

    return res[0].max;
  } catch(e) {
    console.error(e);
  }
}

async function getFilteredList([ from, to ]) {
  try {
    return await Tx.find({
      timestamp: {
        $gt: from,
        $lt: to,
      }
    }).sort({ timestamp: 1 });
  } catch(e) {
    console.error(e);
  }
}


export async function isEmpty() {
  try {
    const count = await Tx.countDocuments();
    return count === 0 ? true : false;
  } catch(e) {
    console.error(e);
    return false;
  }
}

function genDummyData(n) {
  const getRandom = (from, range)=>Math.floor((Math.random() * range) + from);

  return Array.from(new Array(n), ()=>{
    return {
      timestamp: getRandom(start, diff),
      elapsedTime: getRandom(0, 5000),
    };
  });
}

export async function importDummy() {
  try {
    if(await isEmpty()) {
      const N = 100;
      const dummyData = genDummyData(N);

      const imported = await Tx.insertMany(dummyData);
      console.log('Importing dummy data is done:', imported.length);
    }
  } catch(e) {
    console.error(e);
  }
}
