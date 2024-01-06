let html2 = '';
for (let i = 0; i<questions.length; i++) {
  let spanClass = 'blue-num';
  
  if (questions[i].text && questions[i].warning) {
    html2 += `<div class="questions" id="questions-num${i}">
      <div class="questions-name">
        <span class="${spanClass}">${questions[i].num}</span>. ${questions[i].name}
      </div>
      <div class="questions-description">
        ${questions[i].text}
      </div>
      <div class="questions-warning">
        ${questions[i].warning}
      </div>
    </div>`
  } else if (questions[i].text) {
    html2 += `<div class="questions" id="questions-num${i}">
      <div class="questions-name">
        <span class="${spanClass}">${questions[i].num}.</span> ${questions[i].name}
      </div>
      <div class="questions-description">
        ${questions[i].text}
      </div>
    </div>`
  }
}
document.querySelector('.questions-all').innerHTML = html2;


let html = '';
for (let i = 0; i<questions.length; i++) {
  const element = document.getElementById(`questions-num${i}`);
  
  const rect = element.getBoundingClientRect();
  const xPosition = rect.left;
  const yPosition = rect.top;
  
  html += `
    <div class="questions-content-part" onclick="
      toY(${yPosition + 500})
    ">
      <p class="questions-content-part-link"> • <span class="questions-content-link-name">${questions[i].name}</span></p>
    </div>
 `
}


document.querySelector('.questions-content').innerHTML = html;

addEventListener('resize', () => {
  onResizeQuestions();
})
console.log(html2)
function onResizeQuestions() {
  if (innerWidth > 1300 && document.location.href.includes('questions.html')) {
    document.body.style.margin = '0 350px';
  } else if (document.location.href.includes('questions.html')) {
    document.body.style.margin = '0';
  }
}
onResizeQuestions();
