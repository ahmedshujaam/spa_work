$(document).ready(function(){
    $("#home").click(function(){
        $("#data").load("index.html")
    })

    $("#about").click(function(){
        $("#data").load("about.html")
    })

    $("#Service").click(function(){
        $("#data").load("Services.html")
    })
})