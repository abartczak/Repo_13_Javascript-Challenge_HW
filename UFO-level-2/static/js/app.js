 // Content of data.js
var tableData = data;

// Table reference
var ufoTable = d3.select("tbody");

// Function creating a table upon new event
function createTable(ufoData) {
    // Empty table content
    ufoTable.html("")
    // Create arrow function to fill table content one row at a time
    ufoData.forEach((ufoRow) => {
        var row = ufoTable.append("tr"); //empty row
        Object.values(ufoRow).forEach((cellVal) => {
            var ufoCell = row.append("td")
            ufoCell.text(cellVal)
        })
    })
}

// Input scaning function to build an object containing the state of all five inputs
function ufoScanInputs() {
	//var myMap = {"datetime": "", "city": "", "state": "", "country": "", "shape": ""};
	var myMap = {};
  console.log(myMap);
  //Get input values collected from the input form and place them into an object
	var inputDate = d3.select('#datetime').property('value');
  inputDate == null ? myMap.datetime = "" : myMap.datetime = inputDate.trim();
	var inputCity = d3.select('#city').property('value')
	inputCity == null ? myMap.inputCity = "" : myMap.city = inputCity.trim().toLowerCase();
	var inputState = d3.select('#state').property('value')
	inputState == null ? myMap.inputState = "" : myMap.state = inputState.trim().toLowerCase();
	var inputCountry = d3.select('#country').property('value')
	inputCountry == null ? myMap.inputCountry = "" : myMap.country = inputCountry.trim().toLowerCase();
	var inputShape = d3.select('#shape').property('value')
	inputShape == null ? myMap.inputShape = "" : myMap.shape = inputShape.trim().toLowerCase();
  console.log(myMap);
  return myMap;
}

function ufoFilterMulti() {
  // Get current input values from the form
  const curInputs = ufoScanInputs();

	// Filter table data based on five input variables specified above filled in the form
  var filteredData = tableData.filter(ufoRow => 
    (ufoRow.datetime === curInputs.datetime || curInputs.datetime == "") &&
    (ufoRow.city === curInputs.city || curInputs.city == "") &&
    (ufoRow.state === curInputs.state || curInputs.state == "") &&
    (ufoRow.country === curInputs.country || curInputs.country == "") &&
    (ufoRow.shape === curInputs.shape || curInputs.shape == "")
  );

  createTable(filteredData)
};

//event listner for btn.click
d3.selectAll("#filter-btn").on("click", ufoFilterMulti)

createTable(tableData);
