const express = require('express'),
    //Routes
      analyticsRoutes = require('./routes/analytics'),
      authRoutes = require('./routes/auth'),
      categoryRoutes = require('./routes/category'),
      orderRoutes = require('./routes/order'),
      positionRoutes = require('./routes/position'),
    //App
      app = express();

//Routes use
app.use('/api/analytics', analyticsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);



module.exports = app;