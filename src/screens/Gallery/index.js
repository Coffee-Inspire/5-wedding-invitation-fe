import React from 'react'
import {Row, Col} from 'react-bootstrap'
import './index.scss'

function Gallery() {

    const contentDummy = {
        one: "https://images.unsplash.com/photo-1521145239174-279dc2227166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        two: "https://images.unsplash.com/photo-1587053213559-c0511c50be8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        three: "https://images.unsplash.com/photo-1558037865-65d4bcdc37ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",
        four: "https://images.unsplash.com/photo-1535507005612-9b796a99f4f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
        five: ""
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
        </Row>
    </div>
  )
}

export default Gallery