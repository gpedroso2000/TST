function ativaMenuMobile(event) {
  if (event.target.id == 'open') {
    document.getElementById('all').style.display = 'none'
    document.getElementById(event.target.id).style.display = 'none'
    document.getElementById('close').style.display = 'inline-block'
  } else if (event.target.id == 'close') {
    document.getElementById('all').style.display = 'block'
    document.getElementById(event.target.id).style.display = 'none'
    document.getElementById('open').style.display = 'inline-block'
  }
  document.querySelector('#divNavBarMobile').classList.toggle('hide')
}
