let messengers = document.getElementById("messengers");
let play = document.getElementById("play");
let remove = document.getElementById("remove");
let result = document.getElementById("result");

play.onclick = ()=>{
    result.innerHTML = messengers.value;
    localStorage.setItem("RESULT" , messengers.value);
};
remove.onclick = ()=>{
    result.innerHTML ="";
}
onload = ()=>{
    messengers.value = localStorage.getItem("RESULT");
    result.innerHTML = messengers.value;
}