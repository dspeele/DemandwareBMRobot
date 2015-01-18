var casper = require('casper').create();
var config = require('./config');

//configuration values
var loginUrl = config.urls.loginUrl;
var loginFormSelector = config.elements.loginFormSelector;
var username = config.credentials.username;
var password = config.credentials.password;
var workflowScheduleUrl = config.urls.workflowScheduleUrl;
var workflowScheduleFormSelector = config.elements.workflowScheduleFormSelector;
var exportCustomerDataToSaksWorkflowId = config.formValues.exportCustomerDataToSaksWorkflowId;
var workflowScheduleRunButtonSelector = config.elements.workflowScheduleRunButtonSelector;

//log into Demandware
casper.start(loginUrl, function () {
    
    //fill in form and then submit using the optional parameter
    this.fill(
        loginFormSelector, 	 
	{ LoginForm_Login: username,
          LoginForm_Password: password,
        },
	true);

});

//run Customer Data to Saks workflow
casper.thenOpen(workflowScheduleUrl , function () {
  
    //fill in the form but don't submit- we need to click the proper button
    this.fill(
        workflowScheduleFormSelector, 
        { workflowId: exportCustomerDataToSaksWorkflowId
    });

    // submit form via button click
    // we need to pass the context for the parameter we use for the selector
    this.evaluate(function (buttonSelector) {
	    document.querySelector(buttonSelector).click(); 
    }, { buttonSelector: workflowScheduleRunButtonSelector
    });
});

//start Casper running
casper.run();
