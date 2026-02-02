
function addStyle(){
    var myVar = document.querySelector("#paraId"); // selecting the element which I want to style
    // myVar.style.color = "red";
    // myVar.style.fontSize = "2rem";
    // myVar.style.fontWeight = "bold";
    // myVar.style.fontStyle = "italic";

    myVar.classList.add("para-style"); // adding css style

}

function removeStyle(){
    var myVar = document.querySelector("#paraId");
    myVar.classList.remove("para-style");
}
