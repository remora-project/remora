import * as txnCtrl from './controllers/txnController';

export default function route(app, dirname) {
  app.get('/', (req, res) => {
    res.sendFile(`${dirname}/index.html`);
  });

  app.post('/dummyData', txnCtrl.getList);
};
