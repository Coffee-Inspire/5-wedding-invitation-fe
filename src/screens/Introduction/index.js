import React from 'react'
import {Row, Col} from 'react-bootstrap'
import './index.scss'

import PhotoGroom from '../../assets/photos/man.jpg'
import PhotoBride from '../../assets/photos/female.jpg'

function Introduction() {
  return (
    <>
        <Row className="mx-0 mb-3 cst-intro-row">
            <Col md={12} lg={5} className='px-0 d-flex justify-content-center align-items-center'>
                <img
                    src={PhotoGroom}
                    className='cst-intro-photo'
                    alt=""
                />                
            </Col>
            <Col md={12} lg={7} className='d-flex justify-content-center align-items-center'>
                <div className='cst-intro-name-card'>
                    <h1 className='py-3 cst-text-highlight-two cst-intro-text-spacing fw-normal'>PETER JIMIE</h1>
                    <p className='m-0'>Putra Kedua Dari :</p>
                    <p className='m-0'>Lorem ipsum dolor sit amet, consectus adispicing elit. Aliquas quis sodales metus</p>                
                </div>
            </Col>
        </Row>

        <div className='cst-intro-and'>
            <h1>&</h1>
        </div>

        <Row className="mx-0 mb-md-3 cst-intro-row cst-intro-padding-bottom">
            <Col md={12} lg={7} className='d-flex justify-content-center align-items-center'>
                <div className='cst-intro-name-card'>
                    <h1 className='py-3 cst-text-highlight-two cst-intro-text-spacing fw-normal'>MEGA PISTIA</h1>
                    <p className='m-0'>Putri Pertama Dari :</p>
                    <p className='m-0'>Lorem ipsum dolor sit amet, consectus adispicing elit. Aliquas quis sodales metus</p>                
                </div>
            </Col>
            <Col md={12} lg={5} className='px-0 d-flex justify-content-center align-items-center'>
                <img
                    src={PhotoBride}
                    className='cst-intro-photo'
                    alt=""
                />                
            </Col>
        </Row>
    </>
  )
}

export default Introduction