module.exports = function (wallaby) {
  return {
    files: [
      'app/**/*.js',
      '!app/**/*.spec.js'
    ],

    tests: [
      'app/**/*.spec.js'
    ],

    testFramework: 'tape',

    env: {
      type: 'node',
      runner: 'node'
    },

    workers: {recycle: true},

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },
  };
};
