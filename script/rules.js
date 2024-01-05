let html = '';
let html2 = '';
for (let i = 0; i<rules.length;i++) {
  

  let spanClass;
  if (rules[i].num < 2) {
    spanClass = 'purple-num'
  } else if (rules[i].num < 3) {
    spanClass = 'yellow-num'
  } else if (rules[i].num < 4) {
    spanClass = 'blue-num'
  } else {
    spanClass = 'green-num'
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
      <div class="rule-name rule-name-main">
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
  
  if (rules[i].sub) {
    html += `
    <div class="rules-content-part rules-content-subpart" onclick="
      toY(${yPosition+1700})
    ">
      <a class="rules-content-part-link rules-content-part-sublink">${rules[i].num} ${rules[i].name}</a>
    </div>
   `
  } else {
    html += `
    <div class="rules-content-part" onclick="
      toY(${yPosition+1700})
    ">
      <a class="rules-content-part-link">${rules[i].num} ${rules[i].name}</a>
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
    document.body.style.margin = '90px 350px';
  } else if (document.location.href.includes('rules.html')) {
    document.body.style.margin = '90px 0';
  }
}
onResizeWiki();