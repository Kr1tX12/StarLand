addEventListener('resize', () => {
    onResizeWiki();
})
  
  function onResizeWiki() {
    if (innerWidth > 1300 && document.location.href.includes('applications.html')) {
      document.body.style.margin = '0 350px';
    } else if (document.location.href.includes('applications.html')) {
      document.body.style.margin = '0';
    }
  }
  onResizeWiki();
  