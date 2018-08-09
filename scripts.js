function promptBox() {
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  var ui = SpreadsheetApp.getUi();
  var prompt = ui.prompt("Create a clicktag", "Enter HO ID", ui.ButtonSet.OK_CANCEL);
  var response = prompt.getResponseText();
  var button = prompt.getSelectedButton();


}

//function finalUrl() {
//return hasOffersId + "&aff_sub=FMP-" + planName + "-%%SOURCE%%";
//}
//return planName + "-secure";
