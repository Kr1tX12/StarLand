let html = '';
let html2 = '';
for (let i = 0; i<rules.length;i++) {
  

  let spanClass;
  if (rules[i].num < 1) { 
    spanClass = 'red-num';
  } else if (rules[i].num < 2) {
    spanClass = 'purple-num'
    gradClass = 'purple-gradient'
  } else if (rules[i].num < 3) {
    spanClass = 'yellow-num'
    gradClass = 'yellow-gradient'
  } else if (rules[i].num < 4) {
    spanClass = 'blue-num'
    gradClass = 'blue-gradient'
  } else {
    spanClass = 'green-num'
    gradClass = 'green-gradient'
  }
  
  if (rules[i].desc && rules[i].warning && rules[i].sub) {
    html2 += `<div class="rule rule-num${i}">
      <div class="rule-name">
        <span class="${spanClass}">${rules[i].num}</span> ${rules[i].name}
      </div>
      <div class="rule-description">
        ${rules[i].desc}
      </div>
      <div class="rule-warning">
        ${rules[i].warning}
      </div>
    </div>`
  } else if (rules[i].desc && rules[i].sub) {
    html2 += `<div class="rule rule-num${i}">
      <div class="rule-name">
        <span class="${spanClass}">${rules[i].num}</span> ${rules[i].name}
      </div>
      <div class="rule-description">
        ${rules[i].desc}
      </div>
    </div>`
  } else if (!rules[i].sub) {
    html2 += `<div class="rule rule-num${i}">
      <div class="${gradClass} rule-name rule-name-main">
        <span class="rule-num-main">${rules[i].num}.</span> ${rules[i].name}
      </div>
    </div>`
  }
  
  
  
  

}

document.querySelector('.rules').innerHTML = html2;


for (let i = 0; i<rules.length; i++) {
  const element = document.querySelector(`.rule-num${i}`);
  const rect = element.getBoundingClientRect();
  const xPosition = rect.left;
  const yPosition = rect.top;
  
  let spanClass;
  if (rules[i].num < 1) { 
    spanClass = 'red-num';
  } else if (rules[i].num < 2) {
    spanClass = 'purple-num'
    gradClass = 'purple-gradient'
  } else if (rules[i].num < 3) {
    spanClass = 'yellow-num'
    gradClass = 'yellow-gradient'
  } else if (rules[i].num < 4) {
    spanClass = 'blue-num'
    gradClass = 'blue-gradient'
  } else {
    spanClass = 'green-num'
    gradClass = 'green-gradient'
  }
  
  if (rules[i].sub) {
    html += `
    <div class="rules-content-part rules-content-subpart" onclick="
      to.y(${yPosition+innerHeight*2})
    ">
      <p class="rules-content-part-link rules-content-part-sublink"><span class="${spanClass}">${rules[i].num}</span> ${rules[i].name}</p>
    </div>
   `
  } else {
    html += `
    <div class="${gradClass} rules-content-part" onclick="
      to.y(${yPosition+innerHeight*2})
    ">
      <p class="rules-content-part-link"><img class="rules-content-img" src="${rules[i].img}"> ${rules[i].name}</p>
    </div>
   `
  }
}

document.querySelector('.rules-content').innerHTML = html;

addEventListener('resize', () => {
  onResizeWiki();
})

function onResizeWiki() {
  if (innerWidth > 1300 && document.location.href.includes('rules.html')) {
    document.body.style.margin = '0 350px';
  } else if (document.location.href.includes('rules.html')) {
    document.body.style.margin = '0';
  }
}
onResizeWiki();
