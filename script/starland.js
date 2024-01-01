setInterval(() => {
  update();
}, 400)
update();
function update() {
  if (pageYOffset > 637) {
    document.querySelector('.navbar').style.borderBottom = '3px solid var(--bcg-night2-color)'
  } else {
    document.querySelector('.navbar').style.borderBottom = ''
  }
  if (pageYOffset > 180) {
    document.querySelector('.stat-total-ds-members').style.marginLeft = 0;
    document.querySelector('.stat-total-ds-members').style.opacity = 1;
  } else {
    document.querySelector('.stat-total-ds-members').style.marginLeft = '-100px';
    document.querySelector('.stat-total-ds-members').style.opacity = 0;
  }
  if (pageYOffset > 415) {
    document.querySelector('.servers-stat-part').style.marginLeft = 0;
    document.querySelector('.servers-stat-part').style.opacity = 1;
  } 
  if (pageYOffset > 630) {
    document.querySelector('.server-tps-part').style.marginLeft = 0;
    document.querySelector('.server-tps-part').style.opacity = 1;
  } 


  if (innerWidth > 800) {
    document.querySelector('.starland-title').style.fontSize = '60px';
    document.querySelector('.server-description').style.fontSize = '20px';
    document.querySelector('.server-description').style.width = '300px';
  }

  console.log(innerWidth);
}