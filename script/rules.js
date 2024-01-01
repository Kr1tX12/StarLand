let html = '';
let html2 = '';
for (let i = 0; i<rules.length;i++) {
  if (rules[i].sub) {
    html += `
    <div class="rules-content-part rules-content-subpart">
      <a class="rules-content-part-link rules-content-part-sublink">${rules[i].num} ${rules[i].name}</a>
    </div>
   `
  } else {
    html += `
    <div class="rules-content-part">
      <a class="rules-content-part-link">${rules[i].num} ${rules[i].name}</a>
    </div>
   `
  }
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
    html2 += `<div class="rule">
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
    html2 += `<div class="rule">
      <div class="rule-name">
        <span class="${spanClass}">${rules[i].num}</span> ${rules[i].name}
      </div>
      <div class="rule-description">
        ${rules[i].desc}
      </div>
    </div>`
  } else if (!rules[i].sub) {
    html2 += `<div class="rule">
      <div class="rule-name rule-name-main">
        <span class="rule-num-main">${rules[i].num}.</span> ${rules[i].name}
      </div>
    </div>`
  }
}
document.querySelector('.rules-content').innerHTML = html;
document.querySelector('.rules').innerHTML = html2;