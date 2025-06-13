//function for showing sidebar
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
//function for hiding sidebar
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}


function bringToFront(boxId) {
    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");

    box1.classList.remove("active");
    box2.classList.remove("active");

    document.getElementById(boxId).classList.add("active");
}