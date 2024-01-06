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
  if (document.location.href.includes('index.html')) {
    toTop();
  } else {
    document.location.href='index.html'
  }
  
}
function toWiki() {
  document.location.href='wiki.html'
}
function toRules() {
  document.location.href='rules.html'
}
function toQuestions() {
  document.location.href='questions.html'
}
function toYoutube() {
  document.location.href='youtube.html'
}
function toApplications() {
  document.location.href='applications.html'
}
function toY(y) {
  window.scrollTo({
    top: y,
    left: 0,
    behavior: 'smooth'
 });
}

let oldInnerWidth;
setInterval(() => {
  updateNavbar();
}, 100)
updateNavbar();


function updateNavbar() {
  oldInnerWidth = innerWidth;
  if (pageYOffset) {
    document.querySelector('.navbar').style.borderBottom = '1px solid var(--bcg-night2-color)'
    document.querySelector('.navbar').style.background = 'var(--bcg-transparent-night-color)'
  } else {
    document.querySelector('.navbar').style.borderBottom = '1px solid transparent'
    document.querySelector('.navbar').style.background = 'none'
  }
}
addEventListener('resize', () => {
  if (innerWidth > widthToPcVersion) {
    setPcNavbar();
    version = 'PC'
  } else {
    setMobileNavbar()
    version = 'MOBILE'
  }
})
if (innerWidth > widthToPcVersion) {
  setPcNavbar();
  version = 'PC'
} else {
  setMobileNavbar()
  version = 'MOBILE'
}
//устанавливает компютерный навигационный полоска наверху
function setPcNavbar() {
  document.querySelector('.navbar').innerHTML = `
    <div class="pc-navbar-grid">
      <div class="pc-navbar-sl-logo-div">
        <button class="pc-navbar-logo-button" onclick="
          toHome();
        ">
          <img class="pc-navbar-sl-logo-img" src="images/sl-title.png">
        </button>
      </div>
      
        <button onclick="toWiki();" class="pc-navbar-click" >Вики</button>
        <button onclick="toRules();" class="pc-navbar-click"> Правила</button>
        <button onclick="toApplications();" class="pc-navbar-click">Заявки</button>
        <button onclick="toQuestions();" class="pc-navbar-click">Вопросы</button>
        <button onclick="toYoutube();" class="pc-navbar-click">Видео</button>
        
        <div class="navbar-theme-div" onclick="
          changeTheme();
        ">
          <img class="navbar-theme-icon moon-icon" src="images/moon-icon.png">
        </div>
      </div>
    </div>
    `
}

//меняет верхнюю часть сайта "navbar" на мобильную версию
function setMobileNavbar() {
  document.querySelector('.navbar').innerHTML = `
  <div class="navbar-grid">
    <div class="left-navbar-ham-icon-div">
      <button class="left-navbar-ham-button" onclick="
        otherWindowOpen();
      ">
        <img class="left-navbar-ham-icon-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1200px-Hamburger_icon_white.svg.png">
      </button>
    </div>
    <div class="center-navbar-sl-logo-div">
      <button class="navbar-logo-button" onclick="
        toHome();
      ">
        <img class="center-navbar-sl-logo-img" src="images/sl-title.png">
      </button>
    </div>
    <div class="navbar-theme-div" onclick="
      changeTheme();
    ">
      <img class="navbar-theme-icon moon-icon mobile-icon" src="images/moon-icon.png">
    </div>
  </div>
  `
}


function changeTheme() {
  tElem = document.querySelector('.navbar-theme-icon');
  
  if (theme === 'dark') {
    tElem.src = 'images/sun-icon.png';
    tElem.classList.add('sun-icon');
    tElem.classList.remove('moon-icon');
    
    
    document.querySelector('.other-close-icon').style.filter = 'invert()';
    
    document.querySelectorAll('.other-page-img').forEach(elem => {
      elem.style.filter = 'none';
    });
    document.querySelector('.other-home-icon').style.filter = 'invert()';
    document.documentElement.style.setProperty('--bcg-night-color', 'rgb(240,240,240)');
    document.documentElement.style.setProperty('--bcg-night2-color', 'rgb(230,230,230)');
    document.documentElement.style.setProperty('--bcg-night3-color', 'rgb(220,220,220)');
    document.documentElement.style.setProperty('--bcg-night4-color', 'rgb(210,210,210)');
    
    document.documentElement.style.setProperty('--text-purple-color', '#7A86FF');
    
    document.documentElement.style.setProperty('--text-color', 'black');
    document.documentElement.style.setProperty('--text-gray-color', 'black');
    document.documentElement.style.setProperty('--text-green-color', '#9BFF5A');
    document.documentElement.style.setProperty('--bcg-transparent-night-color', 'rgba(240,240,240,0.5');
    
    document.documentElement.style.setProperty('--text-purple-color', '#5865f2');
    document.documentElement.style.setProperty('--text-cyan-color', '#30CFFF');
    document.documentElement.style.setProperty('--text-yellow-color', '#FFF13F');
    if (version === 'MOBILE') {
      document.querySelector('.left-navbar-ham-icon-img').style.filter = 'brightness(0)';
    }
    try {
      document.querySelector('.wiki-back-icon').style.filter = 'none';
      document.querySelector('.rules-back-icon').style.filter = 'none';
    } catch (exception) {

    }
    theme = 'light';
  } else {
    tElem.src = 'images/moon-icon.png';
    tElem.classList.add('moon-icon');
    tElem.classList.remove('sun-icon');
    
    document.querySelector('.other-close-icon').style.filter = 'none';
    
    document.querySelectorAll('.other-page-img').forEach(elem => {
      elem.style.filter = 'invert()';
    });
    document.querySelector('.other-home-icon').style.filter = 'none';
    
    document.documentElement.style.setProperty('--bcg-night-color', '#232323');
    document.documentElement.style.setProperty('--bcg-night2-color', '#262626');
    document.documentElement.style.setProperty('--bcg-night3-color', '#303030');
    document.documentElement.style.setProperty('--bcg-night4-color', '#2E2E2E');
    
    document.documentElement.style.setProperty('--text-purple-color', 'white');
    
    document.documentElement.style.setProperty('--text-color', 'white');
    document.documentElement.style.setProperty('--text-gray-color', '#F6F6F6');
    document.documentElement.style.setProperty('--text-green-color', 'white');
    document.documentElement.style.setProperty('--bcg-transparent-night-color', 'rgba(35,35,35,0.5');
    
    document.documentElement.style.setProperty('--text-purple-color', 'white');
    document.documentElement.style.setProperty('--text-cyan-color', 'white');
    document.documentElement.style.setProperty('--text-yellow-color', 'white');
    
    if (version === 'MOBILE') {
      document.querySelector('.left-navbar-ham-icon-img').style.filter = 'none';
    }
    try {
      document.querySelector('.wiki-back-icon').style.filter = 'invert()';
      document.querySelector('.rules-back-icon').style.filter = 'invert()';
    } catch (exception) {
      
    }
    theme = 'dark';
    
    
  }
  
}