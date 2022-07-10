import React from 'react'
import {Row, Col} from 'react-bootstrap'
import './index.scss'

function Gallery() {

    const contentDummy = {
        one: "https://uc70ad6bf1ceddbc186c417803f9.previews.dropboxusercontent.com/p/thumb/ABnfrx99bnI-V-cFmY-COkV2JzUC8cIqcM-6V_0x-w255BWmu006r-xJNXDZBeg37Um3GHxjc_miQRMZIelAIv4HP1Im3aZ8Tiswo0jWyHXxA2D_OrLBkyX6Ag1vyeYs9Q4owjEXXlmvgxTg3dz-gtyqadDHdYjg7UYLuecigytR6NDhfs6ZabIwyt4pgUZE-lsd9FjfbJyiZhfT9ke096VVrmXB8dQB45BEB8HGrRmoirMOS9KV-fBl6MiH6z75BmqkDMSpqwMh9EYpakvNGV1Afz4zWRCkDinKxIq602qc9lqfoW4U79XBGTS-BbRke7ZtHUavYEr-ch7Op_1g_B6Goa5ZQ94pb2U6aQ6x96PqBGPftCix_3IwwdrgANWtz5deVeiAz-LugSclvn6CurEOYcihWBo64YOHZCL_fW1LyCSFb_cTjJTmeCqRqei-vzjUypWTr2dfCQH7lckExYi85NRNH7919-rf-oxASVi-vw/p.jpeg",
        two: "https://uc0ace1d98930b125a5ea3fd7ed0.previews.dropboxusercontent.com/p/thumb/ABn2SDAAyx66HE9XOHX9wXBqJ6gb4j9GD_oPMSCtnKDUCafZSBsueMCeX4rgIpM0vGsYSehKrjhvgfIyrMd7wK2IbujIWeGH-dKuxzWJ2b5VcAe132lUObWCZGmxI8zGbRsGRNnIW01lJiLbJst_snnc1257-yCQWsCfotWDeUnqQceI5joRKBr8nCaIKZ6KnCfjC7mBVD_6W411WWaFyGPAk1coJDrl-Wz1UN_g0UuqyXPAV-Iyj7TsMQtjP0o55WvdxkrRuJfeoQHS7iQ9yTz7QKbHV7gx8Zio-iimz8VlPiG-KW2Z5ZmlvMv9HKHfuElfeX9vQA7G2J3jva8BK21bzvYoGAErnoJNe3DY6o1EBM0Dojrp8pSwPpvqRTuNUoPXWzFiEH7uF-DXvhV5c4QM5DiKv8nxeODn1Oqlf1Q-cg/p.jpeg",
        three: "https://ucda819e6932cdeea5af148ee7b9.previews.dropboxusercontent.com/p/thumb/ABm5fHJVE0MmmO0k2QsRNHsyukJ_dJ9b38qXt7Ud27VV7-iZmuybtJJ8w2RGe2OnT7I2AZ6k_f0VlrR8XCyxfGYMWrt129wEVFBQYoJEzJT5Ffx7I-JlmNoGZQeJ9czySljLGng1HEgcF0DG_25IYdEYT04PIA0jymkNaNKaJFQpV7ze_4ORsNWDE5fTZsOpIbmGMjleILNOj_pr-isgpIr8tUTt3bFVj1yYBMU5EH7bVph0qE5zPYkyAYRObWiDK5aexf0okJkPg6VWOjsrNDnb83nOBOgsF7KatL_KPMiRoz173xsorlY2ywu19E72Zq_uT7TaBVKY_l60v9CtCVp1zlIJ3zfqhCpAampb3i9MyMPolJg-FMRmaKCq2RN3l5qODfb2uUWJzFABExEQssSuKFDLeNRgNpJgSJCV85LTxA/p.jpeg",
        four: "https://uce55e5e88b745a03cc1d80ca2b2.previews.dropboxusercontent.com/p/thumb/ABmmwKEZRwpZe4Z9QwrAsNefO-3jzburp5OkpzgwjSgCmMFpj9gnGq_QX6CzlLCH1x2KFq6TFNAJsVlpMrd5Jbjdym65D3shiUN629Tomh2FGSpkJ2vGx_4bfqTZKTVkBfCa7_AB9nTr-RFPUb1cEqmqFk3illX1D_SOj8oIT9iFX4rUYnSVH5G0qAdofVyNnKfr2x_v5Ve7DNYcF8M57JMlWSVRX7lnuah3nXoVqPepqxL5X_luj8urD6Oo9RsCcF0XlEDO9LYuD3UInkDWQzs7aUole7EvoOxKhzHf7HMVN_j8soFjJKtDfbSQBqnrHFcSWF7ItjtycTqRC1iJ-kIANE5eaBm7sNJcfEgBRiudPpGaajG5XmlzSIe1V1QhpY0k_58638x6puHwrScdtqdc4NqsVdAWX951Uzslua-f6w/p.jpeg",
        five: "https://uc5736859f00be1cb327e3e77f3c.previews.dropboxusercontent.com/p/thumb/ABniasl0mN7hc9vLJybSTnihws5JoepLVlcnfuTbWyN2jrHKu_BkygktAbR5bAKuTHO8A7oivRPLn9Cx98508UbU5NL4QB4EXuFDq-cqA6kfrZU5zxySAhoS6UgCEPmWY6a0Pk-KQNoJDEm97XfmflHrym585AvUdBh9G6lmHukNV4IC36Fn5E8I2QSCxy30jE2wZqDDqvymfXiEKvGWb3NEjvPqPmhn10fdiBK_X2vcRfqzjYeU4DqiUSliZx_2v5ednj--pvrR1SosYteFSP0dqRTmz691PxyvL2TazlqVAkC6BtRG98LYRbT6M3ciuMATbqfgjIbbterxqCHur29iVj1Ubq1tt9dHFgtBIY_WL1FbQUyZQRROcqAn9rcOpWRvPl2eDLFvKjjHWwQySZ-Y48dFH96G5bP3V2Y-gPcGAA/p.jpeg",
        six: "https://uc23371823dc824df9d4203a0abe.previews.dropboxusercontent.com/p/thumb/ABnTr7kYwE3miOeXOhUdm3QBO0cidCVSGvOxfalNgi40TDv4BVS3bxnOo-18MWzL7o_QjDt_tjRMa4DkFKdiYl3Nh9LWYSTDBP69deFN8iqs5PDxc5_1Obu8lVYj8HCbkBeUGeBiTWM68Q3ZkZZMZZrUvuAGxCJLUp9JA1tt-zgkCm4yGBRKhvheBEDzmtkmne8IG-kWeQv_bLQRoprS1ESdozfPTXguJ2iF2YO-Z3mZCHNsRmH-5ZvbZI5Y3r8eioedKtjIQLUwl2Lw-2EZG-EiUTyg1DMfDo6-5irKQdiscAgIO4-2QhhaRqcGGVvQRW6LMl_kL29najkZOjd-uhHvCEsOXGii291GmJnCgZbeP9gxMxcUhFxeYauiLrFmtvMD9mltH0iasBhDL5WYbJElyP1vs6M091Yu4ntOUiYmeA/p.jpeg"
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