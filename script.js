function ativaMenuMobile(event) {
  if (event.target.id == 'open') {
    document.getElementById(event.target.id).style.display = 'none'
    document.getElementById('close').style.display = 'inline-block'
    // document.getElementById('all').style.height = '920px;'
  } else if (event.target.id == 'close') {
    document.getElementById(event.target.id).style.display = 'none'
    document.getElementById('open').style.display = 'inline-block'
    // document.getElementById('all').style.height = '100vh'
  }
  document.querySelector('.divNavBarMobile').classList.toggle('hide')
}
