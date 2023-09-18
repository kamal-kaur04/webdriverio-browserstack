const { config: baseConfig } = require('./base.conf.js');

const parallelConfig = {
  maxInstances: 10,
  commonCapabilities: {
    'bstack:options': {
      buildName: 'A11y WDIO - Mocha',
      source: 'webdriverio:sample-master:v1.0',
      buildIdentifier: '${BUILD_NUMBER}',
      projectName: 'A11y WDIO - Mocha Project'
    }
  },
  services: [
    [
      'browserstack',
      {
        // browserstackLocal: true, opts: { localIdentifier: 'ally_mocha' },
        // accessibility: true,
        accessibilityOptions: {
          wcagVersion: 'wcag2a',
          // includeTagsInTestingScope: ['again'],
          // excludeTagsInTestingScope: ['again'],
          includeIssueType: {
            bestPractice: true,
            needsReview: true
          }
        }
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
        accessibility: 'true',
      },
    },
    // {
    //   browserName: 'chrome',
    //   browserVersion: '110',
    //   'goog:chromeOptions' : {
    //     args: ['--headless']
    //   },
    //   'bstack:options': {
    //     accessibility: 'true',
    //     os: 'OS X',
    //     osVersion: 'Catalina',
    //   },
    // },
    // {
    //   browserName: 'safari',
    //   browserVersion: 'latest',
    //   'bstack:options': {
    //     // accessibility: false,
    //     os: 'OS X',
    //     osVersion: 'Big Sur',
    //   },
    // },
    // {
    //   browserName: 'firefox',
    //   browserVersion: 'latest',
    //   'bstack:options': {
    //     os: 'OS X',
    //     osVersion: 'Big Sur',
    //   },
    // },
    // {
    //   browserName: 'chrome',
    //   'bstack:options': {
    //     accessibility: true,
    //     deviceName: 'Samsung Galaxy S20',
    //   },
    // },
  ],
};

exports.config = { ...baseConfig, ...parallelConfig };

// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = { ...caps[i], ...exports.config.commonCapabilities[i]};
});
