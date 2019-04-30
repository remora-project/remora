import * as txCtrl from './controllers/transactionController';

export default function route(app, dirname) {
  app.get('/', (req, res) => {
    res.sendFile(`${dirname}/index.html`);
  });

  app.post('/dummyData', txCtrl.getList);
};
