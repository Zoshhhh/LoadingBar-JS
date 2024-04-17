const loadingDiv = document.querySelector('.loading');

let count = 0;
let loaded = false;



const interval = setInterval(() => {
    if (count <101) {
    loadCount.textContent = count++
    progress.style.width = count++ +"%";
    } else  if (loaded){
        loadingDiv.style.opacity = 0;
        clearInterval(interval)
    

    setTimeout(() => {
        loadingDiv.style.display = "none";
    }, 450)
}}
, 10);


window.addEventListener("load", () => {
    console.log("Chargé !!")
    loaded = true;

    clearInterval(interval);

    loadCount.textContent = 100;
    progress.style.width = 100 +"%";
    loadingDiv.style.opacity = 0;

    setTimeout(() => {
        loadingDiv.style.display = "none";
    }, 450)

});