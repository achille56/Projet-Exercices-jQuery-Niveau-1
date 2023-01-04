// Premier exercice
let myId = $("#myId").text("Hello World");
    myId.css("font-size","45px");

/*
let myId = $("<div>");
    myId.attr("id", "myId");// définis un attribut.
    myId.text("Hello World");
    myId.css("font-size","45px");
    $("body").append(myId);
*/

// Deuxième exercice,
let link = $("a");
    link.attr("href", "https://learn.jquery.com/using-jquery-core/attributes/");
    link.text("Lien vers jquery");
    link.css("font-size", "30px");

// Troisième exercice
let myDiv = $("#myDiv");
    myDiv.css({"width":"200px","height":"200px","border":"2px solid red"});

// Quatrième exercice
let mySecondDiv = $("#myDiv div:eq(1)");
    mySecondDiv.text("coucou les amis");
    alert((mySecondDiv).index());