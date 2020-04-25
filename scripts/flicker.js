var origImg = window.location + '/../images/bigHead.png';
var secImg =  window.location + '/../images/big0.png';
const BACKG = document.getElementById("head").style.backgroundImage='url(' + origImg + ')';
var curImg = BACKG;
curImg = document.getElementById("head").style.backgroundImage='url(' + origImg + ')';
console.log(origImg + " is the original location");
console.log(secImg +" is the second image location");
// var randInt = Math.floor(Math.random() * Math.floor(20000));
// setInterval(flicker, randInt);
function flicker() {
    randInt = Math.floor(Math.random() * Math.floor(2000));
    // console.log(randInt);
    if(BACKG === curImg) {
        curImg = document.getElementById("head").style.backgroundImage='url(' + secImg + ')'; 
        setTimeout(function(){
            curImg = document.getElementById("head").style.backgroundImage='url(' + origImg + ')';
        }, 2000);
    } else {
        // a Timeout function to hold the image a little longer then switching back the original
        setTimeout(function(){
            curImg = document.getElementById("head").style.backgroundImage='url(' + origImg + ')';
        }, 2000);
        console.log('Does it even get here?');

        
    }
};

var mouseleft = false;
$( document ).ready(function() {
    $("#head").height(0);
    $("#head").animate({
        height: '100%'
    }, "slow");
    $(".examples").mouseover(function(){
        $(this).animate({
            width: "100%"
    }).mouseleave(function(){
        $(this).animate({
            width: "50%"
        });
    });
    });

    $("#projects").click(function(){
        $(".contact, .myHead").addClass("hidden tranp");
        $(".projects").removeClass("hidden").addClass("opaque");
        
    });

    $("#main").click(function(){
        $(".projects, .contact").addClass("hidden tranp");
        $(".myHead").removeClass("hidden");
    });
    $("#contactMe").click(function(){
        $(".projects, .myHead").addClass("hidden tranp");
         $(".contact").removeClass("hidden");
    });
    $("#head").mouseover(function(){
        mouseleft = false;
        (function loop() {
            var rand = Math.round(Math.random() * (1000 - 200)) + 100;
            setTimeout(function() {
                    flicker();
                    if (!mouseleft) {
                        loop();
                    }
            }, rand);
        }());
    })
    $("#head").mouseleave(function(){
        mouseleft = true;
    });

});

