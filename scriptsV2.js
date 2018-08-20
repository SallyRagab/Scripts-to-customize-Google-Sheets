function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createMenu('Clicktag')
      .addItem('Enter HO ID', 'enterHoId')
      .addItem('Enter Plan Name', 'enterPlanName')
      .addToUi();
}

function enterHoId() {
  var ui = SpreadsheetApp.getUi(); // Same variations.

  var result1 = ui.prompt(
      'Let\'s create the Affiliate URL!',
      'HO ID:',
      ui.ButtonSet.OK_CANCEL);

  // Process the user's response.
  var button1 = result.getSelectedButton();
  var text1 = result.getResponseText();

function enterPlanName() {
  var ui = SpreadsheetApp.getUi(); // Same variations.

  var result2 = ui.prompt(
      'Let\'s create the Affiliate URL!',
      'Plan Name:',
      ui.ButtonSet.OK_CANCEL);

  // Process the user's response.
  var button2 = result.getSelectedButton();
  var text2 = result.getResponseText();
  
 // Get the sheet that you want store the value in and set the value in the cell B3
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("FMP").getRange("E5").setValue( text1 + "&aff_sub=FMP-" + text2 + "-%%SOURCE%%");

//create FBB option
//add fix for ddm links
}
}
