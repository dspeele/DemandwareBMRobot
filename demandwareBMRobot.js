var runJob = require('./runJob');
var config = require('./config');

//configuration values
var exportCustomerDataToSaksWorkflowId = config.formValues.exportCustomerDataToSaksWorkflowId;

//run export Custom Data to Saks Workflow Job
runJob.runDemandwareJob(exportCustomerDataToSaksWorkflowId);
