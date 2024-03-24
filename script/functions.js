const on = {
  logoClick: function() {
    const element = document.querySelector('.center-navbar-sl-logo-img')
    element.style.height = '20px';
  },
  scroll: function() {
    navbar.update();
    const height = document.documentElement.scrollHeight
    if (pageYOffset > height - 700) {
      toTopButton.hide();
    } else if (pageYOffset > 500 ) {
      toTopButton.show();
    } else {
      toTopButton.hide();
    }
  },
  resize: function() {
    if (innerWidth > widthToPcVersion) {
      navbar.pc();
    } else {
      navbar.mobile()
    }
  },
};

const to = {
  home: function() {
    if (document.location.href.includes('index.html')) {
      to.y(0);
    } else {
      document.location.href='index.html'
    }
  },
  page: function(page) {
    document.location.href=`${page}.html`
  },
  y: function(y) {
    window.scrollTo({
      top: y,
      left: 0,
      behavior: 'smooth'
   });
  }
};

const navbar = {
  pc: function() {
    version = 'PC';
    document.querySelector('.navbar').innerHTML = `
    <div class="pc-navbar-grid">
      <div class="pc-navbar-sl-logo-div">
        <button class="pc-navbar-logo-button" onclick="
          to.home();
        ">
          <img class="pc-navbar-sl-logo-img" src="images/sl-title.png">
        </button>
      </div>
        <button onclick="to.page('wiki');" class="pc-navbar-click" >Вики</button>
        <button onclick="to.page('rules');" class="pc-navbar-click"> Правила</button>
        <button onclick="to.page('applications');" class="pc-navbar-click">Заявки</button>
        <button onclick="to.page('questions');" class="pc-navbar-click">Вопросы</button>
        <button onclick="to.page('youtube');" class="pc-navbar-click">Видео</button>
        
        <div class="navbar-theme-div" onclick="
          theme.change();
        ">
          <img class="navbar-theme-icon moon-icon" src="images/moon-icon.png">
        </div>
      </div>
    </div>
    `
  },
  mobile: function() {
    version = 'MOBILE';
    document.querySelector('.navbar').innerHTML = `
    <div class="navbar-grid">
      <div class="left-navbar-ham-icon-div">
        <button class="left-navbar-ham-button" onclick="
          windowNavbar.open();
        ">
          <img class="left-navbar-ham-icon-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1200px-Hamburger_icon_white.svg.png">
        </button>
      </div>
      <div class="center-navbar-sl-logo-div">
        <button class="navbar-logo-button" onclick="
          to.home();
        ">
          <img class="center-navbar-sl-logo-img" src="images/sl-title.png">
        </button>
      </div>
      <div class="navbar-theme-div" onclick="
        theme.change();
      ">
        <img class="navbar-theme-icon moon-icon mobile-icon" src="images/moon-icon.png">
      </div>
    </div>
    `
  },
  update: function() {
    version = 'PC'
    if (pageYOffset) {
      document.querySelector('.navbar').style.borderBottom = '1px solid var(--bcg-night2-color)'
      document.querySelector('.navbar').style.background = 'var(--bcg-transparent-night-color)'
    } else {
      document.querySelector('.navbar').style.borderBottom = '1px solid transparent'
      document.querySelector('.navbar').style.background = 'none'
    }
  }
};

const windowNavbar = {
  open: function() {
    document.body.style.overflow = 'hidden';
    document.querySelector('.window-gray').style.display = 'inline-block';
    document.querySelector('.other-window').style.display = 'inline-block';
    document.querySelector('.other-window').style.animation = '0.5s ease-in-out 0s 1 alternate window-anim'
    document.querySelector('.window-gray').style.animation = '0.3s ease-in-out 0s 1 alternate opacity-anim'
  },
  close: function() {
    document.body.style.overflow = 'scroll';
    document.querySelector('.window-gray').style.display = 'none';
    document.querySelector('.other-window').style.display = 'none';
  }
};

function generateNavbarWindow() {
  document.querySelector('.other-window').innerHTML = `
  <div class="other-text-div">
    <div class="other-text">
      Страницы
    </div>
    <div class="other-close-button-div">
      <button class="other-close-button"onclick="
        windowNavbar.close();
      ">
        <img src="images/close-icon.png" class="other-close-icon">
      </button>
    </div>
  </div>
      <div class="other-buttons">
        <div class="other-main-page other-button-part" onclick="
          to.home();
        ">
          <div>
            <img src="images/home-icon.png" class="other-page-img other-home-icon">
          </div>
          <div class="other-button-name" ${document.location.href.includes('index') ? 'style="color:lightgreen"' : ''}>
            Домашняя страница
          </div>
        </div>
        <div class="other-wiki-page other-button-part" onclick="
          to.page('wiki');
        ">
          <div>
            <img src="images/wiki-icon.png" style="filter:invert()" class="other-page-img">
          </div>
          <div class="other-button-name" ${document.location.href.includes('wiki') ? 'style="color:lightgreen"' : ''}>
            Википедия сервера
          </div>
        </div>
        <div class="other-rules-page other-button-part" onclick="
          to.page('rules');
        ">
          <div>
            <img src="images/rules-icon.png" style="filter:invert()" class="other-page-img">
          </div>
          <div class="other-button-name" ${document.location.href.includes('rules') ? 'style="color:lightgreen"' : ''}>
            Правила
          </div>
        </div>
        <div class="other-applications-page other-button-part" onclick="
          to.page('applications');
        ">
          <div>
            <img src="images/applications-icon.png" style="filter:invert()" class="other-page-img">
          </div>
          <div class="other-button-name" ${document.location.href.includes('applications') ? 'style="color:lightgreen"' : ''}>
            Заявка на сервер
          </div>
        </div>

        <div class="other-applications-page other-button-part" onclick="
          to.page('questions');
        ">
          <div>
            <img src="images/question-icon.png" style="filter:invert()" class="other-page-img">
          </div>
          <div class="other-button-name" ${document.location.href.includes('questions') ? 'style="color:lightgreen"' : ''}>
            Вопросы
          </div>
        </div>
        
        <div class="other-applications-page other-button-part" onclick="
      to.page('youtube');
    ">
      <div>
        <img src="images/youtube-icon.png" style="filter:invert()" class="other-page-img">
      </div>
      <div class="other-button-name" ${document.location.href.includes('youtube') ? 'style="color:lightgreen"' : ''}>
        Видео
      </div>
    </div>
  </div>
  `
};

const theme = {
  what: true,
  dark: function() {
    tElem = document.querySelector('.navbar-theme-icon');
    theme.what = true;
    tElem.src = 'images/moon-icon.png';
    tElem.classList.add('moon-icon');
    tElem.classList.remove('sun-icon');
    
    document.querySelector('.other-close-icon').style.filter = 'none';
    
    document.querySelectorAll('.other-page-img').forEach(elem => {
      elem.style.filter = 'invert()';
    });
   
    document.documentElement.style.setProperty('--bcg-night-color', '#232323');
    document.documentElement.style.setProperty('--bcg-night2-color', '#262626');
    document.documentElement.style.setProperty('--bcg-night3-color', '#303030');
    document.documentElement.style.setProperty('--bcg-night4-color', '#2E2E2E');
    document.documentElement.style.setProperty('--text-gray2-color', '#D9D9D9');
    
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
    document.querySelectorAll('.soc-icon').forEach(elem => {
      elem.style.filter = 'invert()'
    });
  },
  light: function() {
    tElem = document.querySelector('.navbar-theme-icon');
    theme.what = false;
    tElem.src = 'images/sun-icon.png';
    tElem.classList.add('sun-icon');
    tElem.classList.remove('moon-icon');
    
    document.querySelector('.other-close-icon').style.filter = 'invert()';
    
    document.querySelectorAll('.other-page-img').forEach(elem => {
      elem.style.filter = 'none';
    });
    
    document.documentElement.style.setProperty('--bcg-night-color', 'rgb(240,240,240)');
    document.documentElement.style.setProperty('--bcg-night2-color', 'rgb(230,230,230)');
    document.documentElement.style.setProperty('--bcg-night3-color', 'rgb(220,220,220)');
    document.documentElement.style.setProperty('--bcg-night4-color', 'rgb(210,210,210)');
    document.documentElement.style.setProperty('--text-gray2-color', 'black');
    
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
    document.querySelectorAll('.soc-icon').forEach(elem => {
      elem.style.filter = 'none'
    })
  },
  change: function() {
    theme.what ? theme.light() : theme.dark();
  }
};

const toTopButton = {
  show: function() {
    document.querySelector('.to-top-button').style.opacity = '1';
    document.querySelector('.to-top-button').style.bottom = '20px';
  },
  hide: function() {
    document.querySelector('.to-top-button').style.opacity = '0;'
    document.querySelector('.to-top-button').style.bottom = '-100px';
  }
}

const youtube = {
  getInfo: function(url) {
    fetch(`https://noembed.com/embed?dataType=json&url=${url}`)
    .then(res => res.json())
    .then(data => {
      youtube.addToList(data);
    })
    .catch(err => console.error(err))
  },
  addToList: function(data) {
    videos.push(data)
  }
}

function youtubeLinkToId(url) {
   const match = url.match(/(^|=|\/)([0-9A-Za-z_-]{11})(\/|&|$|\?|#)/)[2]
   return match
   return (match ? match['1'] : false);
};

function visible(target) {
  // Все позиции элемента
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
    return true;
  } else {
    // Если элемент не видно, то запускаем этот код
    return false;
  };
};