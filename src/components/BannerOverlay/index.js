import React from 'react'
import './index.scss'

function BannerOverlay({children, className}) {
  return (
    <div className={`${className} cst-banner-overlay`}>
        {children}
    </div>
  )
}

export default BannerOverlay