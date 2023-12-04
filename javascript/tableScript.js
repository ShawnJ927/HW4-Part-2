/*
    File: tableScript.js
    GUI Assignment: CSS HW3
    Shawn Jordan, UMass Lowell Computer Science, shawn_jordan@student.uml.edu
    Copyright (c) 2023 by Shawn. 
    All rights reserved.
    Modified Assignment by Shawn Jordan
    updated by SJ on Dec 3, 2023 at 2:59 PM 
*/

// Jquery document ready function
$(document).ready(function() {
    
    // jQuery sliders for the input fields
    // start row
    $("#startRowSlider").slider({
        min: -50,
        max: 50,
        step: 1,
        // slider updates startRow text value when slider is moved
        slide: function(event, ui) {
            $("#startRow").val(ui.value);
            // test for slider value change
            console.log(ui.value)
        }, 
        // when the slider's value is changed, update the table
        change: function(event, ui) {
            // update table dynamically when slider is moved
            createTableSliderChange();
        }
    });
    // end row
    $("#endRowSlider").slider({
        min: -50,
        max: 50,
        step: 1,
        slide: function(event, ui) {
            $("#endRow").val(ui.value);
        },
        // when the slider's value is changed, update the table
        change: function(event, ui) {
            // update table dynamically when slider is moved
            createTableSliderChange();
        }
    });
    // start col
    $("#startColSlider").slider({
        min: -50,
        max: 50,
        step: 1,
        slide: function(event, ui) {
            $("#startCol").val(ui.value);
        },
        // when the slider's value is changed, update the table
        change: function(event, ui) {
            // update table dynamically when slider is moved
            createTableSliderChange();
        }
    });
    // end col
    $("#endColSlider").slider({
        min: -50,
        max: 50,
        step: 1,
        slide: function(event, ui) {
            $("#endCol").val(ui.value);
        },
        // when the slider's value is changed, update the table
        change: function(event, ui) {
            // update table dynamically when slider is moved
            createTableSliderChange();
        }
    });

    // initalize tabs for the table
    $("#tabs").tabs();
    
    // generate unique id for each tab
    var tabCounter = 1;

    // call function that creates the table in the new tab

    // Jquery for generate button to create table
    $("#generateTable").click(function() {
        createTableTextboxChange();
    });
});

// function to create table
function createTableTextboxChange () {
    // when input value is changed, recreate table and clear error messages
    $("#startRow, #endRow, #startCol, #endCol").on("input", function () {
        
        // Jquery to clear the error messages when the input textbox's text is changed using listeners
        $(".error").text('');

        // get values from form
        var startRow = parseInt($("#startRow").val()); // row min
        var endRow = parseInt($("#endRow").val()); // row max
        var startCol = parseInt($("#startCol").val()); // col min
        var endCol = parseInt($("#endCol").val()); // col max

        // check if any input is not valid, then display error messages and return
        // using math.abs to check if the values are within range this time
        if (!$.isNumeric(startRow) || !$.isNumeric(endRow) || !$.isNumeric(startCol) || !$.isNumeric(endCol) ||
        startRow > endRow || Math.abs(startRow) > 50 || Math.abs(endRow) > 50 ||
        startCol > endCol || Math.abs(startCol) > 50 || Math.abs(endCol) > 50) {

            // check which inputs are not a number and display error message then return
            if(!$.isNumeric(startRow)) {
                $("#startRowError").text('Number entry must not be empty');
            }
            if(!$.isNumeric(endRow)) {
                $("#endRowError").text('Number entry must not be empty');
            }
            if(!$.isNumeric(startCol)) {
                $("#startColError").text('Number entry must not be empty');
            }
            if(!$.isNumeric(endCol)) {
                $("#endColError").text('Number entry must not be empty');
            }

            // check if row values are valid with jquery
            if (startRow > endRow) {
                $("#startRowError").text('Starting number cannot be more than ending number');
            }

            // check which inputs are not within range
            if (Math.abs(startRow) > 50) {
                $("#startRowError").text('Starting and ending numbers must be between -50 and 50');
            }
            if (Math.abs(endRow) > 50) {
                $("#endRowError").text('Starting and ending numbers must be between -50 and 50');
            }

            // check if col values are valid
            if (startCol > endCol) {
                $("#startColError").text('Starting number cannot be more than ending number');
            }
            // check if col values are in range
            if (Math.abs(startCol) > 50) {
                $("#startColError").text('Starting and ending numbers must be between -50 and 50');
            }
            if (Math.abs(endCol) > 50) {
                $("#endColError").text('Starting and ending numbers must be between -50 and 50');
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
        $("#tableContainer").html(table);

        // check to see if table is generated via console
        console.log("Table should be generated");      

    });    
}

// function to create table for slider
function createTableSliderChange(){
    // Jquery to clear the error messages when the input textbox's text is changed using listeners
    $(".error").text('');

    // get values from form
    var startRow = parseInt($("#startRow").val()); // row min
    var endRow = parseInt($("#endRow").val()); // row max
    var startCol = parseInt($("#startCol").val()); // col min
    var endCol = parseInt($("#endCol").val()); // col max

    // check if any input is not valid, then display error messages and return
    // using math.abs to check if the values are within range this time
    if (!$.isNumeric(startRow) || !$.isNumeric(endRow) || !$.isNumeric(startCol) || !$.isNumeric(endCol) ||
    startRow > endRow || Math.abs(startRow) > 50 || Math.abs(endRow) > 50 ||
    startCol > endCol || Math.abs(startCol) > 50 || Math.abs(endCol) > 50) {

        // check which inputs are not a number and display error message then return
        if(!$.isNumeric(startRow)) {
            $("#startRowError").text('Number entry must not be empty');
        }
        if(!$.isNumeric(endRow)) {
            $("#endRowError").text('Number entry must not be empty');
        }
        if(!$.isNumeric(startCol)) {
            $("#startColError").text('Number entry must not be empty');
        }
        if(!$.isNumeric(endCol)) {
            $("#endColError").text('Number entry must not be empty');
        }

        // check if row values are valid with jquery
        if (startRow > endRow) {
            $("#startRowError").text('Starting number cannot be more than ending number');
        }

        // check which inputs are not within range
        if (Math.abs(startRow) > 50) {
            $("#startRowError").text('Starting and ending numbers must be between -50 and 50');
        }
        if (Math.abs(endRow) > 50) {
            $("#endRowError").text('Starting and ending numbers must be between -50 and 50');
        }

        // check if col values are valid
        if (startCol > endCol) {
            $("#startColError").text('Starting number cannot be more than ending number');
        }
        // check if col values are in range
        if (Math.abs(startCol) > 50) {
            $("#startColError").text('Starting and ending numbers must be between -50 and 50');
        }
        if (Math.abs(endCol) > 50) {
            $("#endColError").text('Starting and ending numbers must be between -50 and 50');
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
    $("#tableContainer").html(table);

    // check to see if table is generated via console
    console.log("Table should be generated");
}