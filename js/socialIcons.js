$(document).ready(function () {
    $('i').hide();
});

$(window).load(function () {
    $('i').show();

    var twitterPos = $('#twitter').position();
    var githubPos = $('#github').position();
    var stackPos = $('#stack').position();
    var linkedinPos = $('#linkedin').position();
    var pluralPos = $('#plural').position();
    var plusPos = $('#plus').position();
    var mailPos = $('#mail').position();
    //var imgPos = $('.me').position();

    //$('i').css({
    //    position: 'absolute',
    //    zIndex: '1',
    //    top: imgPos.top + 100,
    //    left: '47%'
    //});

    setTimeout(function () {
        $('#twitter').animate({
            top: twitterPos.top + 10,
        }, 500);
    }, 250);

    setTimeout(function () {
        $('#twitter').animate({
            top: twitterPos.top,
        }, 250);

        $('#github').animate({
            top: githubPos.top + 10,
        }, 500);
    }, 500);

    setTimeout(function () {
        $('#github').animate({
            top: githubPos.top,
        }, 250);

        $('#stack').animate({
            top: stackPos.top + 10,
        }, 500);
    }, 750);

    setTimeout(function () {
        $('#stack').animate({
            top: stackPos.top,
        }, 250);

        $('#linkedin').animate({
            top: linkedinPos.top + 10,
        }, 500);
    }, 1000);

    setTimeout(function () {
        $('#linkedin').animate({
            top: linkedinPos.top,
        }, 250);

        $('plural').animate({
            top: pluralPos.top + 10,
        }, 500);
    }, 1250);

    setTimeout(function () {
        $('plural').animate({
            top: pluralPos.top,
        }, 250);

        $('#plus').animate({
            top: plusPos.top + 10,
        }, 500);
    }, 1500);

    setTimeout(function () {
        $('#plus').animate({
            top: plusPos.top,
        }, 250);

        $('#mail').animate({
            top: mailPos.top + 10,
        }, 500);
    }, 1750);

    setTimeout(function () {
        $('#mail').animate({
            top: mailPos.top,
        }, 250);
    }, 2000);

})

