// Content of data.js
var tableData = data;

// Table reference
var ufoTable = d3.select("tbody");

// Function creating a table upon new event
function createTable(ufoData) {
    // Empty table content
    ufoTable.html("")
    // Create arrow functin to fill table content one row at a time
    // with all its cells populated before proceeding to the next raw
    ufoData.forEach((ufoRow) => {
        var row = ufoTable.append("tr"); //empty row
        Object.values(ufoRow).forEach((cellVal) => {
            var ufoCell = row.append("td")
            ufoCell.text(cellVal)
        })
    })
}

// Filtering function 
function ufoFilter() {
    //Get input (date/time)
    var inputDate = d3.select('#datetime').property('value')
    console.log(inputDate);
    // Filter table data based on input-date
    var filteredData = tableData.filter(ufoRow => ufoRow.datetime === inputDate);
    createTable(filteredData)
};

//event listner for btn.click
d3.selectAll("#filter-btn").on("click", ufoFilter)

createTable(tableData);