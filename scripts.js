
//prompt a message box that has 2 inputs ( HO ID, plan name ) 
//add (&aff_sub=FMP-planname-%%SOURCE%%) and output it in HO ID cell
//add (-secure) to the plan name and create the apply slug

//function promptBox() {
//  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
//  var ui = SpreadsheetApp.getUi();
//  var prompt = ui.prompt("Create a clicktag", "Enter HO ID", ui.ButtonSet.OK_CANCEL);
//  var response = prompt.getResponseText();
//  var button = prompt.getSelectedButton();
//  
//  
//} 

//function finalUrl() {
//return hasOffersId + "&aff_sub=FMP-" + planName + "-%%SOURCE%%";
//}
//return planName + "-secure";


function getInputFromBox() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  //Create the user interface
  var app = UiApp.createApplication();
  //Create one textboxs
  var tBox1 = app.createTextBox().setName('tBox1').setId('tBox1');
  var tBox2 = app.createTextBox().setName('tBox2').setId('tBox2');
  //Create the OK button and a handler to respond to when OK is clicked.
  var okHandler = app.createServerHandler('respondToOK');
  var btnOK = app.createButton('OK', okHandler);
  //I find grids very handy for arranging labels and widgets like textboxes neatly
  var myGrid = app.createGrid(3, 2).setId('myGrid')
    .setText(0, 0, 'HO ID')
    .setWidget(0, 1, tBox1)
    .setText(1, 0, 'Plan Name')
    .setWidget(1, 1, tBox2)
    .setWidget(2, 1, btnOK);
  /*The OK button's handler needs a callback element otherwise it can't read the user's input.
    You could add multiple callback elements to each of the textboxes but that's just extra code.
    As all the textboxes are added to myGrid then just one callback to that will work fine.
  */
  okHandler.addCallbackElement(myGrid);
  app.add(myGrid);
  ss.show(app);
}

function respondToOK(e) {
  var app = UiApp.getActiveApplication();
  var result1 = e.parameter.tBox1;
  var result2 = e.parameter.tBox2;
  //Enter the result in the cell C5
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var cellAddress = ss.getActiveCell().getA1Notation();
  ss.getActiveSheet().getRange("C2").setValue(result1 + "&aff_sub=FMP-" + result2 + "-%%SOURCE%%");
  ss.getActiveSheet().getRange("C4").setValue(result2 + "-secure");//Change to cell you want populated (you can create copies of this row to have multiple submissions of the value.
  //Close the user interface
  return app.close();
}
