const withTypescript = require('@zeit/next-typescript')
const path = require('path');


module.exports = withTypescript({
    target: 'serverless',
    webpack: (config, options) => {
      config.resolve.extensions.push('.node');
        console.log(config.resolve.extensions);
        config.module.rules.push({
          test: /\.node$/,
          use: 'node-loader'
        })

        if(config.externals) {
          config.externals.push('electron');
        }else {
          config.externals = ['electron']
        }

        if(config.name == 'server'){
          config.externals.push('websocket');
        }
        

        console.dir(config.externals &&  config.externals);


        return config;
      },
      webpackDevMiddleware: config => {
        return config;
      }
})
