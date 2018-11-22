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

function submit() {
    var at = $("e-mail").value.indexof("@");
    var fname = $("fName").value;
    var lname = $("lName").value;
    submitOK= "true";
    
    if (at == -1) {
        alert("Not a valid e-mail!");
        submitOK = "false";
    }
    if (fname.length <= 2) {
        alert("Nume invalid");
        submitOK = "false";
    }
    if (lname.length <= 2) {
        alert("Nume invalid");
        submitOK = "false";
    }
    if (submitOK == "false") {
        return false;
    }
}
