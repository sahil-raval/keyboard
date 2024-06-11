const pianoKeys = document.querySelectorAll('piano-keys .keys'),
volumeSlider = document.querySelector("volume-slider input"),
keyCheckbox = document.querySelector("keys-checkbox input");
let allKeys = [],
audio= new Audio(`src/A0.mp3`);
const playtune = (key)=>{
    audio.src = `tunes/${key}.wav`;
    audio.play();
    const clickkey = document.querySelector(`[data-key="${key}"]`);
    clickkey.classList.add('active');
    setTimeout(()=>{
        clickkey.classList.remove('active');
    },150);

}