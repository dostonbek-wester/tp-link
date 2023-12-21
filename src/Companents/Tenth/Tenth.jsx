import React from 'react'
import rasm1 from '../../assets/vegatel-certificate-mini 1.png'
import rasm2 from '../../assets/antex-certificate-mini 1.png'
import rasm3 from '../../assets/bs-certificate-mini 1.png'
import rasm4 from '../../assets/zyxel-certificate-mini 1.png'
import './tenth.css'

function Tenth() {
  return (
    <div className="Tenth-main">
         <div className="sixth-box">
          <h1>Гарантии и сертификаты</h1><br />
          <p>Вся продукция и услуги прошли сертификацию</p>

        </div>
        <div className="seventh-box" >
          <div className="rasm">
            <img src={rasm1} alt="" />
            <img src={rasm4} alt="" />
            <img src={rasm2} alt="" />
            <img src={rasm3} alt="" />
          </div>

        </div>
    </div>
  )
}

export default Tenth