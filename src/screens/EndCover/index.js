import React from 'react'
import {Row, Col} from 'react-bootstrap'
import './index.scss'

import Button from '../../components/Button'

function EndCover() {

    const screenContent = {
        title: "TERIMA KASIH",
        backgroundImage: "https://images.unsplash.com/photo-1501901609772-df0848060b33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        text: "Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kami.",
        endStatement: "Kami yang berbahagia",
        bride: "Peter & Mega",
        buttonText: "join streaming"
    }
    
    return (
        <div className='d-flex justify-content-center align-items-center cst-end-wrap'>
            <img src={screenContent.backgroundImage} className='cst-end-bg-photo' alt=""/>
            <Row className='m-0 d-flex justify-content-center cst-end-content'>
                <Col xs={10} md={7} className='text-center'>
                    <h3 className='cst-end-title'>
                        {screenContent.title}
                    </h3>
                    <h5>
                        {screenContent.text}
                    </h5>
                    <div className='cst-end-sign'>
                        <h5>
                            {screenContent.endStatement}
                        </h5>
                        <h5 className='my-4'>
                        {screenContent.bride} 
                        </h5>
                    </div>
                </Col>
            </Row>            
        </div>
    )
}

export default EndCover