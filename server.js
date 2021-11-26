if(process.env.NODE_ENV !== 'production')
{
    require('dotenv').config();
}

 const express =  require('express');
const app = express();
const expresslayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expresslayouts);
app.use(express.static('public'));
app.listen(process.env.PORT || 3000);

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL , {
  useNewUrlParser: true
  //useUnifiedTopology: true,
  //useNewIndex: true,
})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

const indexRouter = require('./routes/index');
app.use('/',indexRouter);