'use strict';

module.exports = appInfo => {
  const config = exports = {};
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.xhtml': 'nunjucks',
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_20115433';

  // add your config here
  config.middleware = [];

  return config;
};
