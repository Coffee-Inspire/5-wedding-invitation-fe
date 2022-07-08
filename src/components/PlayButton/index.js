import React, { useState } from 'react'
import music_on from '../../assets/on.svg'
import music_off from '../../assets/off.svg'
import './index.scss'

import {fadeIn, fadeOut} from '../../helpers/musicFadeInOut'

function Index(props) {

  const {music} = props;
  const [isplaying, setIsPlaying] = useState(true);

  return (
    <div className='fixed-top d-flex justify-content-end m-2'>
      {isplaying ?
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
      }
    </div>
  )
}

export default Index