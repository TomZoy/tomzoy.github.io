

/*inject in the imageSlider Captions*/

var sliderImageCaptions = [];

sliderImageCaptions.push("Speciális létesítmények tervezés, műszaki ellenőrzése");
sliderImageCaptions.push("Mélyépítés, közlekedésépítés tervezése, műszaki ellenőrzése");
sliderImageCaptions.push("Magasépítés tervezés, műszaki ellenőrzés");
sliderImageCaptions.push("Vízépítés tervezés, műszaki ellenőrzés");


function injectContainers() {
    


    $.each($(".sliderImage"), function (key, value) {
        selected = Math.floor(Math.random() * sliderImageCaptions.length);

        console.log("selected;" + selected);
        console.log(key + ": " + value);
        console.log(value);

        console.log(sliderImageCaptions[selected]);

        $(value).after('<div class="sliderImageCaption">' + sliderImageCaptions[selected] + '</div>');
        
        sliderImageCaptions.splice(selected, 1);

    });



    //$(".sliderImage").after('<div class="sliderImageCaption"> Magasepites </div>');
    console.log("injection done");
}

function setFooterYear()
{
    var currentYear = new Date().getFullYear();
    $("#footerYear").html(currentYear);
}



// center aligning divs
function matchHeight(ref, target) {
    $(target).height($(ref).height());
}

function resizeDivs() {
    matchHeight("#R1Ref", "#R1Target");
    matchHeight("#R2Ref", "#R2Target");
    matchHeight("#R3Ref", "#R3Target");
}



/*initialisations*/
$(document).ready(function () {
    $('.imageSlider').on('init', function () {
        console.log("init done");
        injectContainers();

    });


    $('.imageSlider').slick({
        autoplay: true,
        dots: true,
        fade: true,
        adaptiveHeight: false
    });

    resizeDivs();
    $(window).resize(function () {
        resizeDivs();
    });

    setFooterYear();

});

