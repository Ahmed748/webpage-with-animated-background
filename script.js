var footer = document.getElementsByTagName('footer')[0];
var btn = footer.getElementsByTagName('i')[0];
footer.style.left = (-footer.clientWidth + btn.clientWidth + 10) + "px";

function showBtn() {
    footer.style.left = 5 + "px";
    btn.className = "fas fa-caret-left";
    btn.onclick = hideBtn;
}

function hideBtn() {
    footer.style.left = (-footer.clientWidth + btn.clientWidth + 10) + "px";
    btn.className = "fas fa-caret-right";
    btn.onclick = showBtn;
}