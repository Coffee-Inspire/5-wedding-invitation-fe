import React, { useState } from "react";
import music_on from "../../assets/on.svg";
import music_off from "../../assets/off.svg";
// import "./index.scss";
// import Song from "../../assets/i-was-made-for-loving-you.mp3";

import { fadeIn, fadeOut } from "../../helpers/musicFadeInOut";

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
      {/* <Button onClick={() => test()}>Play music</Button> */}

      <div className="">
        {isPlaying ? (
          <div
            className="cursor-pointer"
            onClick={() => {
              fadeOut(music);
              music.pause();
              setIsPlaying(false);
            }}
          >
            <img className="cst-music-svg" src={music_on} alt="" />
          </div>
        ) : (
          <div
            className="cursor-pointer"
            onClick={() => {
              fadeIn(music);
              music.play();
              setIsPlaying(true);
            }}
          >
            <img className="cst-music-svg" src={music_off} alt="" />
          </div>
        )}
      </div>
    </div>
    // <div className='fixed-top d-flex justify-content-end m-2'>
    //   {isplaying ?
    //     <div className='pointer position-absolute' onClick={()=>{
    //       fadeOut(music);
    //       music.pause();
    //       setIsPlaying(false);
    //     }}>
    //       <img
    //         className='cst-music-svg'
    //         src={music_on}
    //         alt=""
    //       />
    //     </div>
    //   :
    //   <div className='pointer position-absolute off' onClick={()=>{
    //     fadeIn(music);
    //     music.play();
    //     setIsPlaying(true);
    //   }}>
    //         <img
    //           className='cst-music-svg'
    //           src={music_off}
    //           alt=""
    //         />
    //   </div>
    //   }
    //  </div>
  );
}

export default MusicBox;
