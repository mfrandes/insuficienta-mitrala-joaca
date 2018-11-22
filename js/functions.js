// Global
function $(id) {
  return document.getElementById(id);
}



// show/hide more info cauze

function display() {
  style.display = "inline";
}
function hide() {
  return style.display = "none";
}

$("first").onclick = showFirstSpan;
function showFirstSpan() {
  $('first-span').style.display = "inline";
  $("second-span").style.display = "none";
}
$("second").onclick = showSecondtSpan;
function showSecondtSpan() {
  $('second-span').style.display = "inline";
  $("first-span").style.display = "none";
}
$("hide-first").onclick = hideFirstSpan;
function hideFirstSpan() {
  $("first-span").style.display = "none";
}
$("hide-second").onclick = hideFirstSpan;
function hideFirstSpan() {
  $("second-span").style.display = "none";
}

