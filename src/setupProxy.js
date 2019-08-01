const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { 
    target: 'https://api.ricebook.com',
    changeOrigin: true,
    pathRewrite:{
      "^/api":""
    }
  }));

  app.use(proxy('/cdn', { 
    target: 'https://s1.ricebook.com',
    changeOrigin: true,
  }));
};
