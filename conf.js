exports.config = {
	onPrepare: function(){
    browser.manage().timeouts().implicitlyWait(5000);
},
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/jobSearch-spec.js']
};