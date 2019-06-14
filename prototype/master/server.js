import path from 'path';
import http from 'http';
import express from 'express';
import session from 'express-session';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';
import logger from 'morgan';
import errorHandler from 'errorhandler';
import favicon from 'serve-favicon';

import router from './router';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('port', PORT);
app.set('view engine', 'html');
app.use(favicon(path.resolve(__dirname, '../ui/assets/favicon.ico')));
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({
  secret: 'uwotm8',
  resave: true,
  saveUninitialized: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../dist')));

if(app.get('env') === 'development') {
  app.use(errorHandler());
}

router(app);

http.createServer(app).listen(app.get('port'), () => {
  console.log(`Server is listening on port ${app.get('port')}`);
});
