const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./test-result/",
  reportPath: "./test-result/",
  metadata: {
    browser: {
      name: "Chromium",
      version: "131.0.6778.33 ",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "11",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Playwright test execution" },
      { label: "Release", value: "1.0.1" },
    ],
  },
});