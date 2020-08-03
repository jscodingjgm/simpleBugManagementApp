const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/route');

const db = require('./db');


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));
app.use('/', routes);

app.locals.getRemainingDays = creationTime => {
  let diffDate = Math.abs((new Date()).getTime() - creationTime.getTime());
  let diffInDays = Math.ceil(diffDate/ (1000 * 3600 * 24));
  if(diffInDays <= 3){
    return (4 - diffInDays);
  }else{
    return 'SLA Breached';
  }
}

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB connection successful!!!');
  app.listen(3000, () => console.log('Server Started on port 3000'));
});