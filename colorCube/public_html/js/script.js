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
    var submitBtn = $('.index-page .submit');
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

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

    function randomizer() {
        var links = [];
        var link = $('.index-page a');
        var colors = ["#00843D",
            "#4ba23f",
            "#78be20",
            "#c5e86c",
            "#823b34",
            "#e15230",
            "#d45d00",
            "#ffb500",
            "#fbd865",
            "#595478",
            "#0095c8",
            "#00bfb3",
            "#86c8bc",
            "#bdd6e6",
            "#696158",
            "#bc8279",
            "#a7a8aa",
            "#ddd0ce",
            "#275D38",
            "#ffde56",
            "#55a191",
            "#2c6cc3",
            "#003b6f"];
        link.each(function () {
            var z = Math.ceil(Math.random() * 10);
            colorResult = colors[z];
            for (var x = 0; x <= links.length; x++) {
                switch (z) {
                    case 0:
                        $(this).css({
                            "background": colorResult
                        });
                        break;
                    case 1:
                        $(this).css({
                            "background": colorResult
                        });
                        break;
                    case 2:
                        $(this).css({
                            "background": colorResult
                        });
                        break;
                    case 3:
                        $(this).css({
                            "background": colorResult
                        });
                        break;
                    case 4:
                        $(this).css({
                            "background": colorResult
                        });
                        break;
                    case 5:
                        $(this).css({
                            "background": colorResult
                        });
                        break;
                    case 6:
                        $(this).css({
                            "background": colorResult
                        });
                        break;
                    case 7:
                        $(this).css({
                            "background": colorResult
                        });
                        break;
                    case 8:
                        $(this).css({
                            "background": colorResult
                        });
                        break;
                    case 9:
                        $(this).css({
                            "background": colorResult
                        });
                        break;
                    case 10:
                        $(this).css({
                            "background": colorResult
                        });
                        break;
                    case 11:
                        $(this).css({
                            "background": colorResult
                        });
                        break;
                }
            }
            links.push(this);
        });
    }
    $(".gallery-wrap-2 .random").on('click', function () {
        randomizer();
    });







});

