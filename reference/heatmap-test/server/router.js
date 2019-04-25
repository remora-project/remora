export default function route(app, dirname) {
  app.get('/', (req, res) => {
    res.sendFile(`${dirname}/index.html`);
  });
};
