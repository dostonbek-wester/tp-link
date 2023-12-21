import React from 'react'
import usta from '../../assets/shutterstock_1486816109 1.png'
import bgimg from '../../assets/Ellipse 192.png'
import bgimg2 from '../../assets/Ellipse 195.png'
import bgimg3 from '../../assets/Ellipse 193.png'
import './nineth.css'

function Nineth() {
  return (
    <div className="Nineth-main" id='График'>
        <div className="fourth-box">
          <h1>Как мы работаем</h1><br />
          <p>Подбор и установка оборудования за 24 часа</p>
        </div>
      <div className="divdiv2"></div>

        <div className="fifth-box">
          <div className="box2">
            <div className="text2">
              <h1>Присылаем специалиста</h1>
              <p>Прежде чем приступать к монтажу, инженер должен сделать замеры и продумать 
                где расположить оборудование, чтобы оно корректно работало и чтобы не пострадал ремонт.</p>
            </div>
            <div className="text2">
              <h1>Консультируем по телефону</h1>
              <p>
              Уточняем детали по объекту — расположение, площадь, материал стен, уровень сигнала,
               необходимые операторы и диапазоны частот. Это поможет подобрать нужное оборудование.
              </p>
              </div>
          </div>
          <div className="box2">
          <div className="text2">
              <h1>Считаем смету</h1>
              <p>В течение получаса рассчитаем 3 варианта решения вашей задачи — с разным оборудованием,
               площадью покрытия, доступными диапазонами — 2G, 3G, LTE и стоимостью.</p>
            </div>
             <img className='box2-rasm6' src={bgimg} alt="" />
             <img className='box2-rasm4' src={bgimg2} alt="" />
             <img className='box2-rasm4' src={bgimg3} alt="" />
             <img className='box2-rasm3' src={bgimg2} alt="" />
             <img className='box2-rasm2' src={usta} alt=""  />
          </div>
          
          <div className="box2">
            <div className="text2">
                <h1>Подписываем договор</h1>
                <p>Если объект до 300 квадратных метров, подпишем прямо на месте,
                 перед началом монтажа. Юрлица вносят предоплату в размере стоимости оборудования.</p>
            </div>
            <div className="text2">
              <h1>Согласуем дату и время монтажа</h1>
              <p>Если для усиления объекта требуется проектная документация — сделаем её в течение 1 дня. Важно согласовать все работы со строителями, 
              если ремонт ещё идёт. На объектах до 300 кв. м выполняем работы в день подписания.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Nineth