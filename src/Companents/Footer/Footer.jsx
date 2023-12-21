import React from 'react'
import './footer.css'
import WIFI from '../../assets/wifi.svg'
import TPPlink from '../../assets/Tplink-footer.svg'


function Footer() {
  return (
    <div className="footer-obsh">
        <div className="footer-katta">
            <div className="footer-left">
                <img src={WIFI} alt=""  />
                <img className='img2' src={TPPlink} alt="" />
            </div>
            <div className="footer-middle">
                <h4>2021 ©️ TpLink | ООО «ТПЛИНК»<br />ИНН 7734435689</h4>
            </div>
            <div className="footer-right">
                <h4>+7 (111) 111-11-11</h4>
            </div>
        </div>
    </div>
  )
}

export default Footer