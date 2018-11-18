// show/hide more info


function showMore1() {
  document.getElementById('more-info').style.display = 'inline';
  document.getElementById('show-info').style.display = 'inline';
};

function hideInfo1() {
  document.getElementById('more-info').style.display = 'none';
  document.getElementById('show-info').style.display = 'inline';
}

function showMore2() {
  document.getElementById('more-info-2').style.display = 'inline';
  document.getElementById('show-info-2').style.display = 'inline';
}

function hideInfo2 () {
  document.getElementById('more-info-2').style.display = 'none';
  document.getElementById('show-info-2').style.display = 'inline';
}


document.getElementById('show-info').onclick = showMore1;
document.getElementById('hide-info').onclick = hideInfo1;
document.getElementById('show-info-2').onclick = showMore2;
document.getElementById('hide-info-2').onclick = hideInfo2;