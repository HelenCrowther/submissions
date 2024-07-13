function changetored (){
    let changingtext=document.getElementById("texttochange");
    changingtext.style.color = "red";
}

function changetoblue (){
    let changingtext=document.getElementById("texttochange");
    changingtext.style.color = "blue";
}

function changetogreen (){
    let changingtext=document.getElementById("texttochange");
    changingtext.style.color = "green";
}

window.addEventListener("load", (event) => {
    document.getElementById("Redbutton").addEventListener("click", changetored);
    document.getElementById("Bluebutton").addEventListener("click", changetoblue);
    document.getElementById("Greenbutton").addEventListener("click", changetogreen);
});