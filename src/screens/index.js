import React, {useState, useEffect} from 'react'
import {Container} from 'react-bootstrap'

import PlayButton from '../components/PlayButton'
import Introduction from './Introduction'
import Ceremony from './Ceremony'
import LiveStreaming from './LiveStreaming'
import Reservation from './Reservation'
import Gallery from './Gallery'
import Gift from './Gift'
import Wishes from './Wishes'
import EndCover from './EndCover'
import Footer from '../components/Footer'
import Cover from './Cover'

import Song from '../assets/Inspiring Classical Piano.mp3'

function Index() {

  const [show, setShow] = useState(true)
  const [music] = useState(new Audio(Song))

  useEffect(() => {
    setShow(true)
  }, [])
  

  return (
    <Container fluid className='p-0'>
      <Cover
        show={show}
        setShow={setShow}
        music={music}
      />
      {!show&&
        <PlayButton 
          music={music}
        />
      }
      <Introduction/>
      <Ceremony/>
      <LiveStreaming/>
      <Reservation/>
      <Gallery/>
      <Gift/>
      <Wishes/>
      <EndCover/>
      <Footer/>
    </Container>
  )
}

export default Index