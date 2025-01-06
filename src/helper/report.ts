const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-result",
  reportPath: "./",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "chrome",
      version: "16.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Custom project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "2.12" },
    //   { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
    //   { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
    ],
  },
});