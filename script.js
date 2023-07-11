let toggle = document.getElementById("togglebtn");
let sidebar = document.getElementById("sidebar");
let cross = document.getElementById("cross");
toggle.addEventListener("click", () => {
    sidebar.style.transform = "translateX(0px)";
})

cross.addEventListener("click", () => {
    sidebar.style.transform = "translateX(-280px)";
})    