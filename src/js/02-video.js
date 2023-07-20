import VimeoPlayer from '@vimeo/player'
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
    const player = new VimeoPlayer(iframe);

    

    player.on('timeupdate', throttle(saveCurrentTime, 1000));

    function saveCurrentTime(event){
        const currentTime = event.seconds
localStorage.setItem("videoplayer-current-time", currentTime)
    }

const savedTime = localStorage.getItem("videoplayer-current-time")
    
if(savedTime){
    player.setCurrentTime(savedTime);
}