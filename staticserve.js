const express = require('express'),
      path    = require('path'),
      app     = express(),
      port    = process.env.PORT || 8080;
      
app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(port);

console.log(`API server is listening on port:${port}`);