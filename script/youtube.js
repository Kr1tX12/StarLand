let dataArray = [];
function loadVideos() {
  let videosIds = [];
  for (let i = 0; i<videosLinks.length; i++) {
    videosIds.push(youtubeLinkToId(videosLinks[i]));
  }
      
  document.querySelector('.videos-grid').innerHTML = '';
  
  fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&part=contentDetails&id=01WAod7bKRE&key=AIzaSyA7hUFsf_PLyolmslOQmkqyVheLlReDR3c`)
  .then(res => res.json())
  .then(data => {
    if (!data.error) {
      generateYoutubeAPIVideos(videosIds);
    } else {
      document.querySelector('.youtube-note').innerHTML = '<p class="youtube-noquote-note"><span style="color:darkred">Включена квотонепотребляемая версия</span> Youtube StarLand, так как сегодня люди много сюда заходили за 1 день, и теперь не отображается количество лайков, просмотров и дата выхода видео.</p>'
      generateNoEmbedAPIVideos(videosIds);
    }
  })
}
loadVideos();

function generateYoutubeAPIVideos(videosArray) {
  for (let i = 0; i<videosArray.length; i++) {
      fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&part=contentDetails&id=${videosArray[i]}&key=AIzaSyA7hUFsf_PLyolmslOQmkqyVheLlReDR3c`)
      .then(res => res.json())
      .then(data => {
         if (!data.error) {
            //console.log(data)
            const date1 = new Date(data.items[0].snippet.publishedAt);
            const date2 = new Date();
            let daysLag = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
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
            document.querySelector('.videos-grid').innerHTML += 
            `
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
                     ${data.items[0].snippet.channelTitle} • ${data.items[0].statistics.viewCount} просмотров • ${daysLag} ${offset} назад • ${data.items[0].statistics.likeCount} лайков • ${duration}
                  </div>
                </div>
              </div>
            </div>
            `
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
}

function pushVideosToHtmlYoutubeAPI(sort, videosArray) {
  if (sort === 'likes') {
    
  } else if (sort === 'views') {
    
  } else if (sort === 'date') {
    
  }
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


function bubbleSort(arr) {
    let i, j;
    let len = arr.length;
    let isSwapped = false;
    for (i = 0; i < len; i++) {
        isSwapped = false;
        for (j = 0; j < (len - i - 1); j++) {
            if (arr[j].items[0].statistics.viewCount > arr[j + 1].items[0].statistics.viewCount) {
                let temp = arr[j].items[0].statistics.viewCount
                arr[j].items[0].statistics.viewCount = arr[j + 1].items[0].statistics.viewCount;
                arr[j + 1].items[0].statistics.viewCount = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
}
