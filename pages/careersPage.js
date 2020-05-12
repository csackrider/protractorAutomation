var CareersPage = function() {
  var careersHeader = element(by.xpath('//h1[contains(text(), "Careers")]'));
  var searchBox = element(by.name('searchKeyword'));
  var searchButton = element(by.css('.button.career-search-button'));

  this.verifyCareersPageIsDisplayed = async function(){
    expect(careersHeader.isPresent()).toBeTruthy(); 
  }

  this.doJobSearch = async function(searchTerm){
    searchBox.sendKeys(searchTerm);
    searchButton.click();
  }

  this.verifySearchResultIsNotEmpty = async function(searchTerm){
    let list = element.all(by.xpath("//span[contains(text(), '" + searchTerm + "')]"));
    expect((list.count()) >=1).toBeTruthy;
  }

};
module.exports = new CareersPage();