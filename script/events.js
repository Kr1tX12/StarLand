function onLogoClick() {
  const el = document.querySelector('.center-navbar-sl-logo-img')
  el.style.height = '20px';
}
function toTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
 });
}
function otherWindowOpen() {
  document.body.style.overflow = 'hidden';
  document.querySelector('.window-gray').style.display = 'inline-block';
  document.querySelector('.other-window').style.display = 'inline-block';
  document.querySelector('.other-window').style.animation = '0.5s ease-in-out 0s 1 alternate window-anim'
  document.querySelector('.window-gray').style.animation = '0.3s ease-in-out 0s 1 alternate opacity-anim'
  
}
function otherWindowClose() {
  document.body.style.overflow = 'scroll';
  document.querySelector('.window-gray').style.display = 'none';
  document.querySelector('.other-window').style.display = 'none';
}
function toHome() {
  document.location.href='index.html'
}
function toWiki() {
  document.location.href='wiki.html'
}
function toRules() {
  document.location.href='rules.html'
}
function toApplications() {
  document.location.href='applications.html'
}