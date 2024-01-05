let html2 = '';
for (let i = 0; i<wiki.length; i++) {
  let spanClass;
  if (wiki[i].num < 2) {
    spanClass = 'purple-num'
  } else if (wiki[i].num < 3) {
    spanClass = 'yellow-num'
  } else if (wiki[i].num < 4) {
    spanClass = 'blue-num'
  } else {
    spanClass = 'green-num'
  }
  if (wiki[i].text && wiki[i].warning) {
    html2 += `<div class="wiki wiki-num${i}">
      <div class="wiki-name">
        <span class="${spanClass}">${wiki[i].num}</span> ${wiki[i].name}
      </div>
      <div class="wiki-description">
        ${wiki[i].text}
      </div>
      <div class="wiki-warning">
        ${wiki[i].warning}
      </div>
    </div>`
  } else if (wiki[i].text) {
    html2 += `<div class="wiki wiki-num${i}">
      <div class="wiki-name">
        <span class="${spanClass}">${wiki[i].num}</span> ${wiki[i].name}
      </div>
      <div class="wiki-description">
        ${wiki[i].text}
      </div>
    </div>`
  } else if (wiki[i].mainName) {
    html2 += `<div class="wiki wiki-num${i}">
      <div class="wiki-name wiki-name-main">
        <span class="wiki-num-main">${wiki[i].num}.</span> ${wiki[i].mainName}
      </div>
    </div>`
  }
}
document.querySelector('.wiki-all').innerHTML = html2;


let html = '';
for (let i = 0; i<wiki.length; i++) {
  const element = document.querySelector(`.wiki-num${i}`);
  const rect = element.getBoundingClientRect();
  const xPosition = rect.left;
  const yPosition = rect.top;
  
  if (!wiki[i].mainName) {
    html += `
    <div class="wiki-content-part wiki-content-subpart" onclick="
      toY(${yPosition + 500})
    ">
      <a class="wiki-content-part-link wiki-content-part-sublink">${wiki[i].num} ${wiki[i].name}</a>
    </div>
   `
  } else {
    html += `
    <div class="wiki-content-part" onclick="
      toY(${yPosition + 500})
    ">
      <a class="wiki-content-part-link">${wiki[i].num} ${wiki[i].mainName}</a>
    </div>
   `
  }
}


document.querySelector('.wiki-content').innerHTML = html;

addEventListener('resize', () => {
  onResizeWiki();
})

function onResizeWiki() {
  if (innerWidth > 1300 && document.location.href.includes('wiki.html')) {
    document.body.style.margin = '90px 350px';
  } else if (document.location.href.includes('wiki.html')) {
    document.body.style.margin = '90px 0';
  }
}
onResizeWiki();
