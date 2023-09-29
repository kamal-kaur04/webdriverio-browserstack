const { config: baseConfig } = require('./base.conf.js');

const parallelConfig = {
  maxInstances: 10,
  commonCapabilities: {
    'bstack:options': {
      buildName: 'Wdio Sample - Mocha',
      source: 'webdriverio:sample-master:v1.0',
      buildIdentifier: '${BUILD_NUMBER}',
      projectName: 'Wdio Sample - Mocha Project'
    }
  },
  services: [
    [
      'browserstack',
      {
        'browserstackLocal': true
      },
    ],
  ],
  capabilities: [
    {
      browserName: 'chrome',
      browserVersion: 'latest',
      'bstack:options': {
        os: 'Windows',
        osVersion: '10',
      },
    }
  ],
};

exports.config = { ...baseConfig, ...parallelConfig };

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i]};
});
