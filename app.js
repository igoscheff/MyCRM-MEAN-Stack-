const express = require('express'),
    //Config
      keys = require('./config/keys'),
    //Mongoose - MongoDB
      mongoose = require('mongoose'),
    //Parser JSON
      bodyParser = require('body-parser'),
    //Routes
      analyticsRoutes = require('./routes/analytics'),
      authRoutes = require('./routes/auth'),
      categoryRoutes = require('./routes/category'),
      orderRoutes = require('./routes/order'),
      positionRoutes = require('./routes/position'),
    //App
      app = express();

//
mongoose.connect(keys.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.log(error));

//Parser use
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Other modules use
app.use(require('morgan')('dev')); //Morgan - красивое логирование запросов
app.use(require('cors')()); //Cors - обрвботка cors запросов (запросов с другого домена)

//Routes use
app.use('/api/analytics', analyticsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);



module.exports = app;