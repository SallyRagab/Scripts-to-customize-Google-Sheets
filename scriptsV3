function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .createMenu('Clicktag')
      .addItem('Create Clicktag', 'getInputFromBox')
      .addItem('Convert DDM', 'getInput')
      .addToUi();
}

function getInputFromBox() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  //Create the user interface
  var app = UiApp.createApplication()
    .setWidth(300)
    .setHeight(100);
  //Create one textboxs
  var tBox1 = app.createTextBox().setName('tBox1').setId('tBox1');
  var tBox2 = app.createTextBox().setName('tBox2').setId('tBox2');
  //Create the OK button and a handler to respond to when OK is clicked.
  var okHandler = app.createServerHandler('respondToOK');
  var btnOK = app.createButton('OK', okHandler)
      .setWidth(60)
      .setHeight(20);;
  //I find grids very handy for arranging labels and widgets like textboxes neatly
  var myGrid = app.createGrid(3, 2).setId('myGrid')
    .setText(0, 0, 'HO ID:')
    .setWidget(0, 1, tBox1)
    .setText(1, 0, 'Plan Name:')
    .setWidget(1, 1, tBox2)
    .setWidget(2, 1, btnOK)
    .setWidth(300)
    .setHeight(100);
    
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
  var result1 = e.parameter.tBox1.replace(/ /g,"-").toLowerCase();
  var result2 = e.parameter.tBox2.replace(/ /g,"-").toLowerCase();
  
  //Enter the result in the cell
  var sh0 = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var cellAddress = sh0.getActiveCell().getA1Notation();
  sh0.getRange("D5").setValue(result1 + "&aff_sub=FMP-" + result2 + "-%%SOURCE%%");
  sh0.getRange("D8").setValue(result2 + "-secure");
  
  var sh1 = SpreadsheetApp.getActiveSpreadsheet().getSheets()[1];
  var cellAddress2 = sh1.getActiveCell().getA1Notation();
  sh1.getRange("D5").setValue(result1 + "&aff_sub=FBB-" + result2  + "-%%SOURCE%%");
  sh1.getRange("D8").setValue(result2 + "-secure");
  
 //Close the user interface
  return app.close();
}

//DDM convert
function getInputFromBox() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  //Create the user interface
  var app = UiApp.createApplication()
    .setWidth(300)
    .setHeight(100);
  //Create one textboxs
  var tBox1 = app.createTextBox().setName('tBox1').setId('tBox1');
  var tBox2 = app.createTextBox().setName('tBox2').setId('tBox2');
  //Create the OK button and a handler to respond to when OK is clicked.
  var okHandler = app.createServerHandler('respondToOK');
  var btnOK = app.createButton('OK', okHandler)
      .setWidth(60)
      .setHeight(20);;
  //I find grids very handy for arranging labels and widgets like textboxes neatly
  var myGrid = app.createGrid(3, 2).setId('myGrid')
    .setText(0, 0, 'HO ID:')
    .setWidget(0, 1, tBox1)
    .setText(1, 0, 'Plan Name:')
    .setWidget(1, 1, tBox2)
    .setWidget(2, 1, btnOK)
    .setWidth(300)
    .setHeight(100);
    
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
  var result1 = e.parameter.tBox1.replace(/ /g,"-").toLowerCase();
  var result2 = e.parameter.tBox2.replace(/ /g,"-").toLowerCase();
  
  //Enter the result in the cell
  var sh0 = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var cellAddress = sh0.getActiveCell().getA1Notation();
  sh0.getRange("D5").setValue(result1 + "&aff_sub=FMP-" + result2 + "-%%SOURCE%%");
  sh0.getRange("D8").setValue(result2 + "-secure");
  
  var sh1 = SpreadsheetApp.getActiveSpreadsheet().getSheets()[1];
  var cellAddress2 = sh1.getActiveCell().getA1Notation();
  sh1.getRange("D5").setValue(result1 + "&aff_sub=FBB-" + result2  + "-%%SOURCE%%");
  sh1.getRange("D8").setValue(result2 + "-secure");
  
 //Close the user interface
  return app.close();
}
