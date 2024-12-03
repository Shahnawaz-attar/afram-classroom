$(document).ready(function()
{
    $("#ejerciciouno").on("click",function(event)
    {
        document.getElementById('carouselExampleFade').remove();
        cargarTematica("contenedorejercicio","marineanimal.html")
    })
    $("#ejerciciodos").on("click",function(event)
    {
        document.getElementById('carouselExampleFade').remove();
        cargarTematica("contenedorejercicio","neighborhood.html")
    })
    $("#ejerciciotres").on("click",function(event)
    {
        document.getElementById('carouselExampleFade').remove();
        cargarTematica("contenedorejercicio","dance.html")
    })
    $("#ejerciciocuatro").on("click",function(event)
    {
        document.getElementById('carouselExampleFade').remove();
        cargarTematica("contenedorejercicio","preposiciones.html")
    })
    
    
})