import React, { PropTypes } from 'react'

const MainContent = () => {
  return <div className='page-content-wrapper'>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-sm-12 page-content'>
          <div className='content-header'>
            <hr className='separator' id='topSep'/>
            <h1>Recent work</h1>
            <h2>Checkout the stuff I have done recently</h2>
            <hr className='separator' id='botSep'/>
          </div>
          <div className='page-content'>
          </div>
        </div>
      </div>
    </div>
  </div>
}

MainContent.propTypes = {
}

export default MainContent
