import React from 'react'
import {Row, Col} from 'react-bootstrap'
import './index.scss'

function EndCover() {

    const screenContent = {
        title: "TERIMA KASIH",        
        text: "Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kami.",
        endStatement: "Kami yang berbahagia",
        bride: "Peter & Mega",
        buttonText: "join streaming"
    }
    
    return (
        <div className='d-flex justify-content-center align-items-center cst-end-wrap'>
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