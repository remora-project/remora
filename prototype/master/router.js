import path from 'path';

export default function(app) {
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../ui/index.html'));
  });
}
