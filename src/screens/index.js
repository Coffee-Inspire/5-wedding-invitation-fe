import React, {useState, useEffect} from 'react'
import {Container} from 'react-bootstrap'

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

function Index() {

  const [show, setShow] = useState(true)

  useEffect(() => {
    setShow(true)
  }, [])
  

  return (
    <Container fluid className='p-0'>
      <Cover
        show={show}
        setShow={setShow}
      />
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