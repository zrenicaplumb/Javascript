/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Department JavaScript Document
$(document).ready(function () {
    $('.forms-page h3.accordion, .faculty-page h2.accordion, .courses-page h2.accordion').on('click', function () {
        if ($(this).hasClass('spesh')) {
            $(this).removeClass('spesh');
        } else {
            $(this).addClass("spesh");
        }
    });
    $('.courses-page .img-wrap').hover(
            function () {
                $(this).find('.info-box').addClass('show');
                if ($('.info-box .show').style.height > 223) {
                    css({
                        "overflow": "auto",
                        "height": "100%"
                    })
                }
            },
            function () {
                $('.info-box').removeClass('show');
            });
    var links = [];
    var link = $('.emphases-page a');
    var counter = 0;
    var count = 0;
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
        $(this).css({
            "border": "1px solid transparent"
        })
// 		var element = $(this);
        var border = $(this).prop('background');
        console.log(border);


        for (var x = 0; x <= links.length; x++) {
            switch (z) {
                case 0:
                    $(this).css({
                        "background": colorResult,
                        "border": border
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
    })

    //random application of colors to links
    var randomize = function () {
        var z = Math.random();
        if (z < .3) {
            $(this).css({
                "background": "green"
            })
        } else if (z > .3 && z < .6) {
            $(this).css({
                "background": "blue"
            })
        } else {
            $(this).css({
                "background": "purple"
            })
        }

    }
});







