// Código de interação Jquery

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


// Integração com o backend AJAX

// Le e pega os paragetros da URL
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
console.log(getUrlVars());

// Variavel que recebe o ID do usuario pego da URL
const user = getUrlVars()["userId"];
console.log(user);

// Função que puxa os dados do endpoint
$.get(`http://localhost:3000/find_user?userId=${parseInt(user)}`, function(resultado)
    {

        // Verificação se o id do usuário existe ou não no banco de dados
        if (resultado.length == 0) {
            alert("Usuário não encontrado!");
            $("body").html(`<div style="text-align: center;"> <h1> Usuário não encontrado! </h1> <br> Insera outro ID de usuário! </div>`);
        }
        else{
            alert("Usuário encontrado!");
        }

        console.log(resultado);

        console.log(user);
        console.log(resultado[0].ID)

        // Preenchimento dos dados do usuário na página
        $("#Name").text(`${resultado[0].Nome}` + " " + `${resultado[0].Sobrenome}`);
        $("#Email").text(`${resultado[0].Email}`);
        $("#Phone").text(`${resultado[0].Telefone}`);
        $("#Linkedin").text(`${resultado[0].Linkedln}`);
        $("#Github").text(`${resultado[0].Github}`);
        $("#Conquista1").text(`${resultado[0].Título}`);
        $("#Habilidade1").text(`${resultado[0].Habilidade}`);
        $("#Habilidade-Interpessoal1").text(`${resultado[0].Traco_de_personalidade}`);
        $("#Nome-formacao").text(`${resultado[0].Curso}`);
        $("#Nome-instuicao").text(`${resultado[0].Instituicao}`);
        $("#Nome-cargo").text(`${resultado[0].Cargo}`);        
        $("#Nome-empresa").text(`${resultado[0].Empresa}`);


        

        console.log(resultado[0].Nome);
        console.log(resultado[0].Telefone);
        console.log(resultado[0].Email);
    });