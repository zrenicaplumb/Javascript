/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//Random Colored Box Generator
$(document).ready(function () {

    //selects box to be colored
    var box = $('.index-page .box');
    //list of colors inputted by user
    var colors = [];
    //color inputted by user
    var boxList = [];
    //selects submit button
    var submitBtn = $('.index-page button');
    //submit button action
    submitBtn.on('click', function () {
        //create a box
        var newBox = $('<div class="box"></div>');
        //get the color choice inputted in the box
        var colorChoice = $('.index-page .color-input').val();
        //push the box you created to the boxList array
        boxList.push(newBox);
        //push the color you chose into the colors array
        colors.push(colorChoice);
        //count up from zero, for each counted number use its value as 
        //a corresponding value in the arrays above to fetch the value and 
        //asign it the most recently inputted color from the color list
        for (x = 0; x < colors.length; x++) {
            boxList[x].css({
                "background": colors[x]
            });
            //add the box to the html
            $('.gallery-wrap .row').append(newBox);
        }
    });


//    submitBtn.on('click', function () {
//        
//        var colorChoice = $('.index-page .color-input').val();
//        console.log(colorChoice);
//        
//        
//        colors.push(colorChoice);
//        console.log(colors);
//        
//        box.css({
//            "background-color": colors[0]
//        });
//        colors.pop();
//        
//    });






});

