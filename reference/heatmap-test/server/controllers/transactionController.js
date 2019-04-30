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

  const start = Date.now();
  const diff = 60000;

  return Array.from(new Array(n), ()=>{
    return {
      timestamp: getRandom(start, diff),
      elapsedTime: getRandom(0, 5000),
    };
  });
}

export async function importDummy() {
  try {
    if(!await isEmpty()) { return; }

    const N = 100;
    const imported = await Tx.insertMany(genDummyData(N));

    console.log('Importing dummy data is done:', imported.length);
  } catch(e) {
    console.error(e);
  }
}
