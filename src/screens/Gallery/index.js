import React from 'react'
import {Row, Col} from 'react-bootstrap'
import './index.scss'

import One from "../../assets/photos/galleries/1.jpg";
import Two from "../../assets/photos/galleries/2.jpg";
import Three from "../../assets/photos/galleries/3.jpg";
import Four from "../../assets/photos/galleries/4.jpg";
import Five from "../../assets/photos/galleries/5.jpg";
import Six from "../../assets/photos/galleries/6.jpg";

function Gallery() {

    const contentDummy = {        
        one : One,
        two: Two,
        three: Three,
        four: Four,
        five: Five,
        six: Six
    }
    
  return (
    <div>
        <h1 className='my-5 cst-gallery-title'>OUR GALLERY</h1>
        <Row className='mb-5 cst-gallery-canvas'>
            <Col md={12} className='cst-gallery-header-frame'>
                <img
                    className='cst-gallery-photo'
                    src={contentDummy.one}
                    alt=""
                />
            </Col>
            <Col md={6} className='cst-gallery-header-frame'>
                <img
                    className='cst-gallery-photo'
                    src={contentDummy.two}
                    alt=""
                />
            </Col>
            <Col md={3} className='cst-gallery-header-frame'>
                <img
                    className='cst-gallery-photo'
                    src={contentDummy.three}
                    alt=""
                />
            </Col>
            <Col md={3} className='cst-gallery-header-frame'>
                <img
                    className='cst-gallery-photo'
                    src={contentDummy.four}
                    alt=""
                />
            </Col>
            <Col md={6} className='cst-gallery-header-frame'>
                <img
                    className='cst-gallery-photo'
                    src={contentDummy.five}
                    alt=""
                />
            </Col>
            <Col md={6} className='cst-gallery-header-frame'>
                <img
                    className='cst-gallery-photo'
                    src={contentDummy.six}
                    alt=""
                />
            </Col>
        </Row>
    </div>
  )
}

export default Gallery