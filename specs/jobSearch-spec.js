var discoveryHomepage = require('../pages/discoveryHomepage');
var careersPage = require('../pages/careersPage');
describe('Discovery job search should show a position for QA engineer', function() {
  it('Searh gives correct result',  function() {
    browser.waitForAngularEnabled(false);

     discoveryHomepage.get();
     discoveryHomepage.goToCareers();

     careersPage.verifyCareersPageIsDisplayed();

    //search for Sr Quality Engineer - Automation
    careersPage.doJobSearch('Sr Quality Engineer - Automation');
    
    //verify the result
    careersPage.verifySearchResultIsNotEmpty('Sr Quality Engineer - Automation');


  });
});