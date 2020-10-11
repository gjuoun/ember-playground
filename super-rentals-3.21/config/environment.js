'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'super-rentals',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {},
      EXTEND_PROTOTYPES: {
        Date: false
      }
    },
    APP: {},
    mapbox: {
      accessToken: "pk.eyJ1IjoiZ2p1b3VuIiwiYSI6ImNrZmZucjBkajBka3ozNHBpNWM3aWF6bGwifQ.8nos-hSRe4yRcuz7O_OvEA"
    }
  };


  let testEnv = {
    ...ENV,
    locationType: "none",
    APP: {
      ...ENV.APP,
      LOG_ACTIVE_GENERATION: false,
      LOG_VIEW_LOOKUPS: false,
      rootElement: '#ember-testing',
      autoboot: false
    }
  };

  // return ENV depends on the environment: -e <environment>
  switch (environment) {
    case "development":
      return ENV
    case "test":
      return testEnv
    default:
      return ENV
  }
};
