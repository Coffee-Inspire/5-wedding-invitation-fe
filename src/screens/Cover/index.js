import React, {useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import './index.scss'
import "animate.css/animate.min.css";

import PhotoCover from '../../assets/photos/cover.jpg'
import Button from '../../components/Button'
import {fadeIn} from '../../helpers/musicFadeInOut'

function Cover(props) {

    const {
        show,
        setShow,
        music
    } = props
    
    const params = (new URL(document.location)).searchParams;
    const guest = params.get('guest');

    const closeCover = () => { 
        setShow(false)
        document.body.style.overflow = "auto"
        fadeIn(music);
        music.play();
        music.loop = true;
        setTimeout(()=>{
            document.querySelector("#cover").style.display = "none";
        }, 1200)
    }

    useEffect(() => {
        document.body.style.overflow = "hidden"
    }, [])
    

    return (
        <div id="cover"
            // className={(show ? 'd-block' : 'd-none') + ' cst-cover-container'}
            className={(show ? 'd-block' : 'animate__animated animate__fadeOut') + ' cst-cover-container'}
        >
            <img
                className='cst-cover-photo'
                src={PhotoCover}
                alt=""
            />
            <Row className='m-0 cst-cover-content'>
                <Col md={6} className='text-center'>
                    <h1 className='cst-cover-bridegroom m-4'>PETER {`&`} MEGA</h1>
                    {guest && 
                        <>
                            <h5 className='cst-cover-dear'>Dear :</h5>
                            <h4 className='cst-cover-guest my-4'>{guest}</h4>
                        </>
                    }
                    <Button
                        onClick={()=>closeCover()}
                    >
                        Buka Undangan
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default Cover