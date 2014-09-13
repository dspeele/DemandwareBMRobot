var config = {};

//credentials to log into Demandware
config.credentials = {};
config.credentials.username = 'dana';
config.credentials.password = 'm!scHief5';

//Demandware urls
config.urls = {};
config.urls.loginUrl = 'https://dev15-saksoff5th-saksfifthavenue.demandware.net/on/demandware.store/Sites-Site/en_US/ViewApplication-DisplayWelcomePage';
config.urls.workflowScheduleUrl = 'https://dev15-saksoff5th-saksfifthavenue.demandware.net/on/demandware.store/Sites-Site/en_US/WorkflowUI-Overview?SelectedMenuItem=operations&CurrentMenuItemId=operations&menuname=Workflow%20Schedules&mainmenuname=global_operations';

//Demandware elements
config.elements = {};
config.elements.loginFormSelector = 'form[name=LoginForm]';
config.elements.workflowScheduleFormSelector = 'form[method=POST]';
config.elements.workflowScheduleRunButtonSelector = '#dwfrm_workflow_runWorkflows button';

//Demandware form values
config.formValues = {};
config.formValues.exportCustomerDataToSaksWorkflowId = 'Export Customer Data to Saks';

module.exports = config;
