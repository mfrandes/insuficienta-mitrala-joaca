// buton "Solicita consult"
 
function $(id) {
    return document.getElementById(id);
}

function qs(el) {
    return document.querySelector(el);
}


$("btnBottom").onclick = displayModal;
$("solicita-consult").onclick = displayModal;
function displayModal() {
  $("modal1").style.display = "flex"
}

// On popup

qs('.close').onclick = closeModal;
function closeModal() {
    $("modal1").style.display = "none";
}


