generateNavbarWindow(); //from script/functions.js
on.resize();

addEventListener('scroll', () => {
  on.scroll();
});

addEventListener('resize', () => {
  on.resize();
});

document.querySelector('.to-top-button').addEventListener('click', () => {
  to.y(0);
})
