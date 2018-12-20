module.exports = {
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
  launch_in_ci: ['Chrome'],
  launch_in_dev: ['Chrome'],
  browser_args: {
    Chrome: [
        '--no-sandbox',
        '--disable-gpu',
        '--headless',
        '--remote-debugging-port=0',
        '--window-size=1440,900'
    ]
  }
};

/*
 * ember-exam honors the `parallel` parameter in testem.js.
 * By default this value is 1 which means it only uses one client.
 * When this is set to -1 it uses the --split value of ember-exam.
 *
 * https://github.com/trentmwillis/ember-exam#split-test-parallelization
 * https://github.com/trentmwillis/ember-exam/issues/108
 */
if (process.env.EMBER_EXAM_PARALLEL) {
  module.exports.parallel = -1
}
