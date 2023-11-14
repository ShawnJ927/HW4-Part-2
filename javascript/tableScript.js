/*
    File: tableScript.js
    GUI Assignment: CSS HW3
    Shawn Jordan, UMass Lowell Computer Science, shawn_jordan@student.uml.edu
    Copyright (c) 2023 by Shawn. 
    All rights reserved.
    Modified Assignment by Shawn Jordan
    updated by SJ on Nov 14, 2023 at 2:59 PM 
*/

// function for generate button to create table
function generateTable() {
    // get values from form
    var startRow = parseInt(document.getElementById("startRow").value); // row min
    var endRow = parseInt(document.getElementById("endRow").value); // row max
    var startCol = parseInt(document.getElementById("startCol").value); // col min
    var endCol = parseInt(document.getElementById("endCol").value); // col max

    // check if any input is not valid, then display error messages and return
    if (isNaN(startRow) || isNaN(endRow) || isNaN(startCol) || isNaN(endCol) || startRow > endRow
        || startRow < -50 || startRow > 50 || endRow < -50 || endRow > 50 || startCol > endCol || 
        startCol < -50 || startCol > 50 || endCol < -50 || endCol > 50) {

        // check which inputs are not a number and display error message then return
        if(isNaN(startRow)) {
        document.getElementById('startRowError').textContent = 'number entry must not be empty';
        }
        if(isNaN(startCol)) {
        document.getElementById('startColError').textContent = 'number entry must not be empty';
        }
        if(isNaN(endRow)) {
        document.getElementById('endRowError').textContent = 'number entry must not be empty';
        }
        if(isNaN(endCol)) {
        document.getElementById('endColError').textContent = 'number entry must not be empty';
        }

        // check if row values are valid
        if (startRow > endRow) {
            document.getElementById('startRowError').textContent = 'Starting number cannot be more than ending number';
        }

        // check which inputs are not within range
        if (startRow < -50 || startRow > 50) {
            document.getElementById('startRowError').textContent = 'Starting and ending numbers must be between -50 and 50';
        }
        if (endRow < -50 || endRow > 50) {
        document.getElementById('endRowError').textContent = 'Starting and ending numbers must be between -50 and 50';
        }

        // check if col values are valid
        if (startCol > endCol) {
            document.getElementById('startColError').textContent = 'Starting number cannot be more than ending number';
        }

        // check if col values are in range
        if (startCol < -50 || startCol > 50) {
            document.getElementById('startColError').textContent = 'Starting and ending numbers must be between -50 and 50';
        }
        if (endCol < -50 || endCol > 50) {
        document.getElementById('endColError').textContent = 'Starting and ending numbers must be between -50 and 50';
        }

        return;
    }

    // generate table and display
    var table = '<table class="table-style"><thead><tr><th></th>'; // create table with css and header to start the table
    
    // loop to fill the table columns
    for (var i = startCol; i <= endCol; i++) {
        table += '<th>' + i + '</th>'; // add col header
    }

    table += '</tr></thead><tbody>'; // add to the body of the table

    // loop to do the multiplication and fill the table
    for (var i = startRow; i <= endRow; i++) {
        table += '<tr><th>'+ i + '</th>'; // add row
        for (var j = startCol; j <= endCol; j++) {
            table += '<td>' + i * j + '</td>'; // add col
        }
        table += '</tr>'; // end row
    }

    table += '</tbody></table>'; // end table
    
    // check the table for contents
    console.log('tableContents',table);

    // display the new table to the screen
    document.getElementById("tableContainer").innerHTML = table;

    // check to see if table is generated via console
    console.log("Table should be generated");
}   

    // add event listener to generate button and have it call the generateTable function
    document.getElementById("generateTable").addEventListener("click", generateTable);

    /* Clear the error messages when the input textbox's text is changed using listeners */
    document.getElementById('startRow').addEventListener('input', function() {
        document.getElementById('startRowError').textContent = '';
        document.getElementById('startColError').textContent = '';
        document.getElementById('endRowError').textContent = '';
        document.getElementById('endColError').textContent = '';  
    });
    /* Clear the error messages when the input textbox's text is changed using listeners */
    document.getElementById('endRow').addEventListener('input', function() {
        document.getElementById('startRowError').textContent = '';
        document.getElementById('startColError').textContent = ''; 
        document.getElementById('endRowError').textContent = '';
        document.getElementById('endColError').textContent = '';
    });
    /* Clear the error messages when the input textbox's text is changed using listeners */
    document.getElementById('startCol').addEventListener('input', function() {
        document.getElementById('startRowError').textContent = '';
        document.getElementById('startColError').textContent = '';
        document.getElementById('endRowError').textContent = '';
        document.getElementById('endColError').textContent = '';
    });
    /* Clear the error messages when the input textbox's text is changed using listeners */
    document.getElementById('endCol').addEventListener('input', function() {
        document.getElementById('startRowError').textContent = '';
        document.getElementById('startColError').textContent = '';
        document.getElementById('endRowError').textContent = '';
        document.getElementById('endColError').textContent = '';
    });
