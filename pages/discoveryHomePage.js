var discoveryHomePage = function() {
  var mainMenu = element(by.css('.menu-toggle'));
  var mainMenuCareers = element(by.xpath('//a[contains(text(), "Careers")]'))
  var careersHeader = element(by.xpath('//h1[contains(text(), "Careers")]'));

  this.get = async function() {
     browser.get('https://corporate.discovery.com/');
  };

  this.goToCareers = async function() {
     mainMenu.click();
     mainMenuCareers.click();
  };

};
module.exports = new discoveryHomePage();