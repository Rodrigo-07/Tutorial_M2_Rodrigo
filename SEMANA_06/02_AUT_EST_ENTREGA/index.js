// Function to increase the font size of the section name when mouse is over it
$("p").mouseover(function () {
    $(this).css("font-size", "20");
});

$("p").mouseout(function () {
    $(this).css("font-size", "16");
});

// $('#toggleButton').click(function() {
//     $('#navbar').slideToggle();
// });

// Code to shine the div when section name is clicked
$('#Educacao_nav').click(function() {
    $('.educacao-section').addClass('shining');
});

$('#Experiencias_nav').click(function() {
    $('.experiencias-section').addClass('shining');
});

$('#Conquistas_nav').click(function() {
    $('.conquistas-section').addClass('shining');
});

$('#Habilidades_nav').click(function() {
    $('.habilidades-section').addClass('shining');
});

$('#HabilidadesInter_nav').click(function() {
    $('.personalidade-section').addClass('shining');
});