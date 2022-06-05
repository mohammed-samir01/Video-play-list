let videoList = document.querySelectorAll('.list');

// arr = ['Video/ww.mp4','Video/ww.mp4','Video/ww.mp4','Video/ww.mp4','Video/ww.mp4'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[1]);
   
// }



videoList.forEach(vid =>{
   vid.onclick = () =>{
      videoList.forEach(remove =>{remove.classList.remove('active')});
      vid.classList.add('active');
      let src = vid.querySelector('.list-video').src  ;
      let title = vid.querySelector('.list-title').innerHTML;
      document.querySelector('.main-video-container .main-video').src = src;
      document.querySelector('.main-video-container .main-video').play();
      document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
   };
});