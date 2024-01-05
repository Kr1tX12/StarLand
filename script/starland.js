let nowBedrockIp = bedrockAcademyIp;
let nowJavaIp = javaAcademyIp;


//обновляет сайт каждые 100 миллисекунд
setInterval(() => {
  updateStarland();
}, 100);

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