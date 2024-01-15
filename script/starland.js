let nowBedrockIp = bedrockAcademyIp;
let nowJavaIp = javaAcademyIp;


//обновляет сайт каждые 100 миллисекунд
addEventListener('resize', () => {
  updateStarland();
});
addEventListener('scroll', () => {
  updateStarland();
});
updateStarland();

//функция будет обновлять сайт
function updateStarland() {
  if (pageYOffset) {
    document.querySelector('.navbar').style.border = '1px solid var(--bcg-night2-color)'
    document.querySelector('.navbar').style.background = 'var(--bcg-transparent-night-color)'
  } else {
    document.querySelector('.navbar').style.border = '1px solid transparent'
    document.querySelector('.navbar').style.background = 'none'
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
  if (innerWidth > widthToPcVersion) {
    setPcVersion();
  } else {
    setMobileVersion();
  }
  if (innerWidth > 1220) {
    document.querySelector('.instruction').style.margin = '100px 400px';
  } else {
    document.querySelector('.instruction').style.margin = '100px 50px'
  }
  if (innerWidth > 1450) {
    document.querySelector('.server-stat-part').style.margin = '70px 400px';

    document.querySelectorAll('.stat-img').forEach(element => {
      element.style.width = '200px'
      element.style.marginLeft = 'calc(50vw - 100px - 400px)'
    })
  } else if (innerWidth > widthToPcVersion) {
    document.querySelector('.server-stat-part').style.margin = '70px 300px';
    document.querySelectorAll('.stat-img').forEach(element => {
      element.style.width = '200px'
      element.style.marginLeft = 'calc(50vw - 100px - 300px)'
    })
  }
}

//устанавливает компьютерную версию сайта
function setPcVersion() {
  document.querySelector('.copy-ip-text').style.fontSize = '36px';

    document.querySelector('.bedrock-ip-copy-button').style.width = '200px';
    document.querySelector('.java-ip-copy-button').style.width = '200px';
    document.querySelector('.ip-copy-buttons').style.marginLeft = 'calc(50vw - 200px)';

    document.querySelector('.discord-button').style.width = '400px';
    document.querySelector('.discord-button').style.marginLeft = 'calc(50vw - 200px)'

    document.querySelector('.wiki-rules-buttons-div').style.gridTemplateColumns = '200px 200px';
    document.querySelector('.wiki-rules-buttons-div').style.marginLeft = 'calc(50vw - 200px)';

    document.querySelector('.starland-title').style.fontSize = '80px';
    document.querySelector('.server-description').style.fontSize = '25px';
    document.querySelector('.server-description').style.width = '700px';

    document.querySelectorAll('.stat-num').forEach(element => {
      element.style.fontSize = '70px';
    })
    document.querySelectorAll('.stat-img').forEach(element => {
      element.style.width = '200px'
      element.style.marginLeft = 'calc(50vw - 100px - 300px)'
    })

    document.querySelector('.server-stat-part').style.margin = '70px 300px';
   
      document.querySelector('.starland-gallery').style.margin = '30px 450px'
      document.querySelectorAll('.starland-gallery-part img').forEach(elem => {
        elem.style.width = 'calc(100vw - 450px * 2)';
      })
    
    
}


//устанавливает мобильную версию сайта
function setMobileVersion() {
    document.querySelector('.discord-button').style.width = '300px';
    document.querySelector('.discord-button').style.marginLeft = 'calc(50vw - 150px)'

    document.querySelector('.wiki-rules-buttons-div').style.gridTemplateColumns = '150px 150px';
    document.querySelector('.wiki-rules-buttons-div').style.marginLeft = 'calc(50vw - 150px)';


    document.querySelector('.starland-title').style.fontSize = '60px';
    document.querySelector('.server-description').style.fontSize = '20px';
    document.querySelector('.server-description').style.width = '300px';

    document.querySelectorAll('.stat-num').forEach(element => {
      element.style.fontSize = '10vw';
    })
    document.querySelectorAll('.stat-img').forEach(element => {
      element.style.width = '30vw'
      element.style.marginLeft = 'calc(50vw - 15vw - 25px)'
    })

    document.querySelector('.server-stat-part').style.margin = '70px 25px'

    document.querySelector('.starland-gallery').style.margin = '30px 10px'
    document.querySelectorAll('.starland-gallery-part img').forEach(elem => {
      elem.style.width = 'calc(100vw - 10px * 2)';
    })
    
}

//Добавить текст "Готово" на кнопку бедрока на 2с. при копировании
document.querySelector('.bedrock-ip-copy-button').addEventListener('click', function(){
  copyText(nowBedrockIp);
  this.innerHTML = 'Готово!';
  this.style.color = '#DC9B2D';
  setTimeout(() => {
    this.style.color = 'white';
    this.innerHTML = 'Bedrock';
  },2000)
});


//Добавить текст "Готово" на кнопку джавы на 2с. при копировании
document.querySelector('.java-ip-copy-button').addEventListener('click', function(){
  copyText(nowJavaIp);
  this.innerHTML = 'Готово!';
  this.style.color = '#4ACE6D';
  setTimeout(() => {
    this.style.color = 'white';
    this.innerHTML = 'Java';
  },2000)
});
  
  
//Поменять скопированный айпи при изменении выбора Основы или Академии
document.querySelector('.server-select').addEventListener('change', function(){  
  if (this.value === 'main') {
    nowBedrockIp = bedrockMainIp;
    nowJavaIp = javaMainIp;
  } else if (this.value === 'academy') {
    nowBedrockIp = bedrockAcademyIp;
    nowJavaIp = javaAcademyIp;
  }
});


//функция чтобы скопировать любой текст
function copyText(text) {
  const textArea = document.createElement("textarea");

  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = text;

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand('copy');
    const msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
    if (msg === "unsuccessful") {
      alert('Не удалось скопировать айпи. Используйте браузер Chrome или скопируйте его через наш Дискорд Сервер');
    }
  } catch (err) {
    alert('Не удалось скопировать айпи. Используйте браузер Chrome или скопируйте его через наш Дискорд Сервер. Ошибка: ' + err);
  }

  document.body.removeChild(textArea);
}



document.querySelectorAll('.starland-gallery-part img').forEach(elem => {
  elem.style.transform = `perspective(400px) rotate3d(${getRandomInt(-1,2)},${getRandomInt(-1,2)}, 0, ${version === 'PC' ? 5 : 15}deg)`;
  elem.addEventListener('click', () => {
    elem.style.transform = `perspective(400px) rotate3d(${getRandomInt(-1,2)},${getRandomInt(-1,2)}, 0, ${version === 'PC' ? 5 : 15}deg)`;
  })
});


setInterval(() => {
  selectNextImages();
}, 5000)

function selectNextImages() {
  setTimeout(() => {
    document.querySelector('.starland-gallery-online').style.transform = `perspective(400px) rotate3d(${getRandomInt(-1,2)},${getRandomInt(-1,2)}, 0, ${version === 'PC' ? 5 : 15}deg)`
    document.querySelector('.starland-gallery-online').src = `images/screen${getRandomInt(1,3)}.png`
  }, getRandomInt(100, 2500));
  document.querySelector('.starland-gallery-building').style.transform = `perspective(400px) rotate3d(${getRandomInt(-1,2)},${getRandomInt(-1,2)}, 0, ${version === 'PC' ? 5 : 15}deg)`;
  document.querySelector('.starland-gallery-building').src = `images/building${getRandomInt(1,6)}.png`
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
}


let colorH = getRandomInt(0,300);
document.querySelectorAll('.instruction-num').forEach(elem => {
  colorH += getRandomInt(5,10);
  elem.style.color = `hsl(${colorH}, 100%, 50%)`
})


let xRotate = 0;
let yRotate = 1;
let dx = 0.01;
let dy = -0.01;
setInterval(() => {
  elem = document.querySelector('.sl-logo-top-part');
  elem.style.transform = `perspective(400px) rotate3d(${xRotate},${yRotate},0,20deg)`
  elem2 = document.querySelector('.ip-chest-icon');
  elem2.style.transform = `perspective(400px) rotate3d(${xRotate},${yRotate},0,20deg)`
  xRotate += dx;
  yRotate += dy;
  if (xRotate >= 1.5) {
    dx = -0.01;
  }
  if (yRotate >= 1.5) {
    dy = -0.01;
  }
  if (xRotate <= -1.5) {
    dx = 0.01;
  }
  if (yRotate <= -1.5) {
    dy = 0.01;
  }
},10)



setInterval(() => {
  getDataFromServers();
}, 1000)

  function setOnline(main, academy) {
    if (mainOnline === false && academyOnline === false) {
        online = '<span style="-webkit-text-fill-color: darkred">Сервера оффлайн</span>';
      } else if (mainOnline === false) {
        online = `<span style="-webkit-text-fill-color:orange">Онлайн: ${academyOnline}</span>`;
      } else if (academyOnline === false) {
        online = `<span style="-webkit-text-fill-color:orange">Онлайн: ${mainOnline}</span>`;
      } else if (academyOnline + mainOnline < 1){
        online = `<span style="-webkit-text-fill-color:darkred">Онлайн: ${mainOnline + academyOnline}</span>`;
      } else if (academyOnline + mainOnline < 5) {
        online = `<span style="-webkit-text-fill-color:orange">Онлайн: ${mainOnline + academyOnline}</span>`;
      } else if (academyOnline + mainOnline < 10) { 
        online = `<span style="-webkit-text-fill-color:yellow">Онлайн: ${mainOnline + academyOnline}</span>`;
      } else {
        online = 'Онлайн: ' + (mainOnline + academyOnline);
      }
      document.querySelector('.server-online').innerHTML = online;
  }
  
function getDataFromServers() {
    fetch('https://api.mcsrvstat.us/3/n1.minwix.net:25063')
  .then(response => {
    if (!response.ok) {
      throw new Error('Не удалось взять информацию с сервера')
    }
    return response.json();
  })
  .then(data => {
    if (data.online) {
      mainOnline = data.players.online;
    } else {
      mainOnline = false;
    }
  })
  .then(() => {
    fetch('https://api.mcsrvstat.us/3/n1.minwix.net:25010')
     .then(response => {
      if (!response.ok) {
        throw new Error('Не удалось взять информацию с сервера')
      }
      return response.json();
    })
    .then(data => {
      if (data.online) {
        academyOnline = data.players.online
      } else {
        academyOnline = false;
      }
    })
    .then(() => {
      setOnline(mainOnline, academyOnline);
    })
    .catch(error => {console.error(error); document.querySelector('.server-online').innerHTML = '<span style="-webkit-text-fill-color: darkred">У вас нет интернета!</span>';});
  })
  .catch(error => {console.error(error); document.querySelector('.server-online').innerHTML = '<span style="-webkit-text-fill-color: darkred">У вас нет интернета!</span>';});
}
getDataFromServers();
getDataFromDiscord();

//взять участников дс с сервера и отправить на сайт
function getDataFromDiscord() {
  fetch('https://discord.com/api/v9/invites/puKqkSUb4k?with_counts=true')
  .then(responce => responce.json())
  .then(data => {
    document.querySelector('.ds-stat-num').innerHTML = data.approximate_member_count;
  })
  
}

