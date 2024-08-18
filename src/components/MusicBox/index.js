import { useState } from "react";
import music_on from "../../assets/on.svg";
import music_off from "../../assets/off.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";
// import "./index.scss";
// import Song from "../../assets/i-was-made-for-loving-you.mp3";

import { fadeIn, fadeOut } from "../../helpers/musicFadeInOut";
import { takeIcon } from "../../data/iconMapper";

function MusicBox(props) {
  const { music } = props;
  // const { music } = props;
  // const [music] = useState(new Audio(Song));
  const [isPlaying, setIsPlaying] = useState(true);

  // music.play();
  const test = () => {
    // if (isPlaying) {
    //   music.pause();
    // } else {
    //   music.play().catch((error) => console.error("Playback error:", error));
    // }
    // setIsPlaying(!isPlaying);
  };
  return (
    <div>
      <div className="position-relative">
        <div
          onClick={() => {
            fadeOut(music);
            music.pause();
            setIsPlaying(false);
          }}
        >
          <span
            className={`cst-music-btn ${
              isPlaying ? "cst-animate-zoom-in" : "cst-animate-zoom-out d-none"
            }`}
          >
            {takeIcon("pause")}
          </span>
        </div>
        <div
          onClick={() => {
            fadeIn(music);
            music.play();
            setIsPlaying(true);
          }}
        >
          <span
            className={`cst-music-btn ${
              isPlaying ? "cst-animate-zoom-out d-none" : "cst-animate-zoom-in"
            }`}
          >
            {takeIcon("play")}
          </span>
        </div>
      </div>

      {/* <div className='fixed-top d-flex justify-content-end m-2'> */}
      {/* {isplaying ?
        <div className='pointer position-absolute' onClick={()=>{
          fadeOut(music);
          music.pause();
          setIsPlaying(false);
        }}>
          <img
            className='cst-music-svg'
            src={music_on}
            alt=""
          />
        </div>
      :
      <div className='pointer position-absolute off' onClick={()=>{
        fadeIn(music);
        music.play();
        setIsPlaying(true);
      }}>
            <img
              className='cst-music-svg'
              src={music_off}
              alt=""
            />
      </div>
      } */}
      {/* </div> */}
    </div>
  );
}

export default MusicBox;
