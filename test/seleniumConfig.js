const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

const options = new chrome.Options();
// Personnalisez les options du navigateur si nécessaire, par exemple, pour désactiver les notifications.

const driver = new Builder()
  .forBrowser('chrome')
  .setChromeOptions(options)
  .build();

module.exports = driver;