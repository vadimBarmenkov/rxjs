module.exports = function(config) {
  config.set({

    basePath: './src/',
    frameworks: ["jasmine", "karma-typescript"],
    files: [
      'index.ts',
      './**/*.spec.ts'
    ],
    preprocessors: { "**/*.ts": "karma-typescript"},
    reporters: ["progress", "karma-typescript"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity
  })
}
