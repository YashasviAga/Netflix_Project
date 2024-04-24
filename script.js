
$(document).ready(function() {
    var menu1 = $('.dialog_box1');
    var button1 = $('.question1');
    var plusButton1 = $('.plusbutton1');
    var crossButton1 = $('.crossbutton1');

    crossButton1.hide(); // Initially hide the cross button

    button1.on('click', function() {
        menu1.toggle();
        if (menu1.is(':visible')) {
            plusButton1.css('display', 'inline-block'); // Show plus button when dialog box is hidden
            crossButton1.css('display', 'none'); // Hide cross button when dialog box is hidden
            
        } else {
            
            plusButton1.css('display', 'none'); // Hide plus button when dialog box is visible
            crossButton1.css('display', 'inline-block'); // Show cross button when dialog box is visible
        }
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest(button1).length && !$(event.target).closest(menu2).length) {
            menu1.hide();
            plusButton1.show(); // Ensure plus button is visible when menu is hidden
            crossButton1.hide(); // Ensure cross button is hidden when menu is hidden
        }
    });
});

$(document).ready(function() {
    var menu2 = $('.dialog_box2');
    var button2 = $('.question2');
    var plusButton2 = $('.plusbutton2');
    var crossButton2 = $('.crossbutton2');

    crossButton2.hide(); // Initially hide the cross button

    button2.on('click', function() {
        menu2.toggle();
        if (menu2.is(':visible')) {
            plusButton2.css('display', 'inline-block'); // Show plus button when dialog box is hidden
            crossButton2.css('display', 'none'); // Hide cross button when dialog box is hidden
            
        } else {
            
            plusButton2.css('display', 'none'); // Hide plus button when dialog box is visible
            crossButton2.css('display', 'inline-block'); // Show cross button when dialog box is visible
        }
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest(button2).length && !$(event.target).closest(menu2).length) {
            menu2.hide();
            plusButton2.show(); // Ensure plus button is visible when menu is hidden
            crossButton2.hide(); // Ensure cross button is hidden when menu is hidden
        }
    });
});







// $(document).ready(function() {
//     var menu1 = $('.dialog_box1');
//     var button1 = $('.question1');

//     button1.on('click', function() {
//         menu1.toggle();
//     });

//     $(document).on('click', function(event) {
//         if (!$(event.target).closest(button1).length && !$(event.target).closest(menu1).length) {
//             menu1.hide();
//         }
//     });
// });

// $(document).ready(function() {
//     var menu2 = $('.dialog_box2');
//     var button2 = $('.question2');

//     button2.on('click', function() {
//         menu2.toggle();
//     });

//     $(document).on('click', function(event) {
//         if (!$(event.target).closest(button2).length && !$(event.target).closest(menu2).length) {
//             menu2.hide();
//         }
//     });
// });

$(document).ready(function() {
    var menu3 = $('.dialog_box3');
    var button3 = $('.question3');

    button3.on('click', function() {
        menu3.toggle();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest(button3).length && !$(event.target).closest(menu3).length) {
            menu3.hide();
        }
    });
});

$(document).ready(function() {
    var menu4 = $('.dialog_box4');
    var button4 = $('.question4');

    button4.on('click', function() {
        menu4.toggle();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest(button4).length && !$(event.target).closest(menu4).length) {
            menu4.hide();
        }
    });
});

$(document).ready(function() {
    var menu5 = $('.dialog_box5');
    var button5 = $('.question5');

    button5.on('click', function() {
        menu5.toggle();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest(button5).length && !$(event.target).closest(menu5).length) {
            menu5.hide();
        }
    });
});

$(document).ready(function() {
    var menu6 = $('.dialog_box6');
    var button6 = $('.question6');

    button6.on('click', function() {
        menu6.toggle();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest(button6).length && !$(event.target).closest(menu6).length) {
            menu6.hide();
        }
    });
});
$(document).ready(function() {
    $('.question1').on('click', function() {
        $(this).find('.plusbutton1').toggle();
        $(this).find('.crossbutton1').toggle();
    });
});
$(document).ready(function() {
    $('.question2').on('click', function() {
        $(this).find('.plusbutton2').toggle();
        $(this).find('.crossbutton2').toggle();
    });
});
$(document).ready(function() {
    $('.question3').on('click', function() {
        $(this).find('.plusbutton3').toggle();
        $(this).find('.crossbutton3').toggle();
    });
});
$(document).ready(function() {
    $('.question4').on('click', function() {
        $(this).find('.plusbutton4').toggle();
        $(this).find('.crossbutton4').toggle();
    });
});
$(document).ready(function() {
    $('.question5').on('click', function() {
        $(this).find('.plusbutton5').toggle();
        $(this).find('.crossbutton5').toggle();
    });
});
$(document).ready(function() {
    $('.question6').on('click', function() {
        $(this).find('.plusbutton6').toggle();
        $(this).find('.crossbutton6').toggle();
    });
});
