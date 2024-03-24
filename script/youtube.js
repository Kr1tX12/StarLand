const reverseSelect = document.querySelector('.reverse-select');
const sortSelect = document.querySelector('.youtube-sort-choose-select');
const checkedVideosSelect = document.querySelector('.checked-videos-select')
let checkedVideos = true;
let choosenSort = sortSelect.value;
const loadingWindow = document.querySelector('.loading-window')
let loadingProgress = 0;
let reversed = false;
let dataArray = [];
function loadVideos() {
  loadingProgress = 0;
  let videosIds = [];
  if (checkedVideos) {
    for (let i = 0; i<checkedVideosLinks.length; i++) {
      videosIds.push(youtubeLinkToId(checkedVideosLinks[i]));
    }
  } else {
    for (let i = 0; i<videosLinks.length; i++) {
      videosIds.push(youtubeLinkToId(videosLinks[i]));
    }
  }
  document.querySelector('.videos-grid').innerHTML = '';
  
  fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&part=contentDetails&id=01WAod7bKRE&key=AIzaSyA7hUFsf_PLyolmslOQmkqyVheLlReDR3c`)
  .then(res => res.json())
  .then(data => {
    if (!data.error) {
      generateYoutubeAPIVideos(videosIds);
    } else {
      document.querySelector('.youtube-sort-choose').style.display = 'none'
      document.querySelector('.youtube-note').innerHTML = '<p class="youtube-noquote-note"><span style="color:darkred">Включена квотонепотребляемая версия</span> Youtube StarLand, так как сегодня люди много сюда заходили за 1 день, и теперь не отображается статистика и сортировка видео.</p>'
      generateNoEmbedAPIVideos(videosIds);
    }
  })
}
loadVideos();

function getVideoCode(data) {
            console.log(data)
            const date1 = new Date(data.items[0].snippet.publishedAt);
            const date2 = new Date();
            let daysLag = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
            const daysLagSave = daysLag;
            let offset = 'дней';
            
            if (daysLag > 365) {
              daysLag = Math.round(daysLag / 365)
              if (daysLag === 1) {
                offset = 'год'
              } else if (daysLag % 10 < 5) {
                offset = 'года'
              } else {
                offset = 'лет'
              }
            } else if (daysLag > 30) {
              daysLag = Math.round(daysLag / 30)
              if (daysLag === 1) {
                offset = 'месяц'
              } else if (daysLag < 5) {
                offset = 'месяца'
              } else {
                offset = 'месяцев'
              }
            } else {
              if (daysLag === 1) {
                offset = 'день'
              } else if (dayslag < 5) {
                offset = 'дня'
              } else {
                offset = 'дней'
              }
            }
            
            let duration = data.items[0].contentDetails.duration;
            
            duration = duration.slice(2);
            duration = duration.slice(0,-1);
            duration = duration.replace(/\D/g,':');
            
            //console.log(duration)
            const html = 
            {
              likes: data.items[0].statistics.likeCount,
              date: daysLagSave,
              views: data.items[0].statistics.viewCount,
              duration: duration,
              actual: (data.items[0].statistics.likeCount + data.items[0].statistics.viewCount / 10) / (daysLagSave / 10),
              code:             `
            <div class="video" onclick="
              window.open('https://youtu.be/' + '${data.items[0].id}');
            ">
              <div class="video-top-part">
                <img class="video-thumbnail" src="${data.items[0].snippet.thumbnails.high.url}">
                
              </div>
              <div class="video-bottom-part">
                <div class="video-bottom-right-part">
                  <div class="video-bottom-right-top-part">
                     ${data.items[0].snippet.title}
                  </div>
                  <div class="video-bottom-right-bottom-part">
                     ${data.items[0].snippet.channelTitle} • ${data.items[0].statistics.viewCount} просмотров • ${daysLag} ${offset} назад • ${data.items[0].statistics.likeCount} лайков • ${duration} • Актуальность: ${Math.round((data.items[0].statistics.likeCount + data.items[0].statistics.viewCount / 10) / (daysLagSave / 10))}
                  </div>
                </div>
              </div>
            </div>
            `
            }

            return html;
}
let youtubeDATA = [];
function generateYoutubeAPIVideos(videosArray) {
  document.querySelector('.loading-videos-progress2').innerHTML = videosArray.length;
  for (let i = 0; i<videosArray.length; i++) {
      fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&part=contentDetails&id=${videosArray[i]}&key=AIzaSyA7hUFsf_PLyolmslOQmkqyVheLlReDR3c`)
      .then(res => res.json())
      .then(data => {
         if (!data.error) {
            if (checkedVideos && i > checkedVideosLinks.length) {
              youtubeDATA = [];
              return;
            }
            loadingProgress++;
            const html = getVideoCode(data);
            youtubeDATA.push(html)
            loadingWindow.style.opacity = 1;
            document.querySelector('.loading-videos-progress1').innerHTML = loadingProgress;
            setTimeout(() => {
              loadingWindow.style.opacity = 0;
            }, 500);
            updateVideos();
          }
      })
      .catch(err => console.error(err))
  }
}
function generateNoEmbedAPIVideos(videosArray) {
  for (let i = 0; i<videosArray.length; i++) {
      fetch(`https://noembed.com/embed?url=https://youtu.be/${videosArray[i]}`)
      .then(res => res.json())
      .then(data => {
            if (!data.error) {
              document.querySelector('.videos-grid').innerHTML += 
              `
              <div class="video" onclick="
                window.open('${data.url}');
              ">
                <div class="video-top-part">
                  <img class="video-thumbnail" src="${data.thumbnail_url}">
                </div>
                <div class="video-bottom-part">
                  <div class="video-bottom-right-part">
                    <div class="video-bottom-right-top-part">
                      ${data.title}
                    </div>
                    <div class="video-bottom-right-bottom-part">
                       ${data.author_name}
                    </div>
                  </div>
                </div>
              </div>
              `
              resize2();
            }
      })
      .catch(err => console.error(err))
  }
  resize2();
}

addEventListener('resize', () => resize2())
function resize2() {
  const videosGrid = document.querySelector('.videos-grid');
  const videoThumbnail = document.querySelectorAll('.video-thumbnail');
  if (innerWidth > 800 && innerWidth < 1200) {
    videosGrid.style.gridTemplateColumns = `1fr 1fr`;
    
    videoThumbnail.forEach(elem => {
      elem.style.width = `50vw`;
      elem.style.height = `calc(50vw * 0.5625)`;
    })
    
  } else if (innerWidth > 1200 && innerWidth < 1600) {
    videosGrid.style.gridTemplateColumns = '1fr 1fr 1fr';
    
    videoThumbnail.forEach(elem => {
      elem.style.width = `33vw`;
      elem.style.height = `calc(33vw * 0.5625)`;
    })
  } else if (innerWidth > 1600) {
    videosGrid.style.gridTemplateColumns = '1fr 1fr 1fr 1fr'
    
    videoThumbnail.forEach(elem => {
      elem.style.width = `25vw`;
      elem.style.height = `calc(25vw * 0.5625)`;
    })
  } else {
    videosGrid.style.gridTemplateColumns = '1fr'
    videoThumbnail.forEach(elem => {
      elem.style.width = '100vw';
      elem.style.height = 'calc(100vw * 0.5625)';
    })
  }
}
resize2()

sortSelect.addEventListener('change', () => {
  choosenSort = sortSelect.value;
  updateVideos();
})
reverseSelect.addEventListener('change', () => {
  reversed = reverseSelect.checked;
  updateVideos();
});
checkedVideosSelect.addEventListener('change', () => {
  checkedVideos = checkedVideosSelect.checked;
  loadVideos();
});
function updateVideos() {
  if (choosenSort === 'view') {
    youtubeDATA.sort((a, b) => b.views - a.views);
  } else if (choosenSort === 'like') {
    youtubeDATA.sort((a, b) => b.likes - a.likes);
  } else if (choosenSort === 'new') {
    youtubeDATA.sort((a, b) => a.date - b.date);
  } else if (choosenSort === 'during') {
    youtubeDATA.sort((a, b) => b.duration.replace(/\D/g, '') - a.duration.replace(/\D/g, ''));
  } else if (choosenSort === 'actual') {
    youtubeDATA.sort((a, b) => b.actual - a.actual);
  }
  if (reversed) {
    youtubeDATA.reverse();
  }
    let htmlCode = '';
    for (i = 0; i < youtubeDATA.length; i++) {
      htmlCode += youtubeDATA[i].code;
    }
    document.querySelector('.videos-grid').innerHTML = htmlCode;
}
let youtubeDATAold;