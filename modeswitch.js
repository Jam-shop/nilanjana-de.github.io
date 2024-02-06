const tglswitch = document.querySelector("#darkModeToggle");
tglswitch.addEventListener('change',darktheme, false);

function darktheme(){
    if (tglswitch.checked) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
}