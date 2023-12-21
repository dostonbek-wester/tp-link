import React from 'react'
import './four.css'

function Four() {
  return (
    <div className="four-obsh" id='price'>
      <div className="four-katta">
        <div className="four-box1">
          <h3>Калькулятор стоимости</h3>
          <h4>Рассчитаем стоимость оборудования и работ под <br /> ключ в трех вариантах под ваш бюджет</h4>
        </div>
        <div className="four-box2">
          <div className="four-box-left">
            <div className="left-top">
              <div className="top-left">
                  <div className="tepa">
                    <h5>Тип объекта</h5>
                    <input type="text" placeholder='Загородный дом' />
                  </div>
                  <div className="orta">
                    <h5>Материал стен</h5>
                    <input type="text" placeholder='Кирпич'/>
                  </div>
                  <div className="pas">
                    <h5>Ремонт</h5>
                    <input type="text"placeholder='Не выполнен' />
                  </div>
              </div>
              <div className="top-right">
                  <div className="tepa">
                    <h5>Удалённость от МКАД</h5>
                    <input type="text" placeholder='В пределах МКАД'/>
                  </div>
                  <div className="pas">
                    <h5>Что усиливаем?</h5>
                    <input type="text" placeholder='Только звонки'/>
                  </div>
                <h5>На какой площади? (кв. м)</h5>
                <hr />
              </div>
            </div>
            <div className="left-bottom">
                  <div className="bottom">
                    <h5>Рассчитаем стоимость усиления c разным оборудованием, <br /> расскажем в чем разница и выберем оптимальный вариант</h5>
                  </div>
            </div>
          </div>
          <div className="four-box-right">
            <div className="bir">
              <h4>Узнайте точную стоимость</h4>
              <h5>Чтобы получить бесплатную консультацию и точный расчет - введите свой номер телефона и нажмите "Заказать расчет"</h5>
            </div>
            <div className="ikki">
              <input type="text" placeholder=' +998 (99) 999 99 99 '/>
              <h5>Согласен с политикой конфиденциальности</h5>
            </div>
            <div className="uch">
              <button>Заказать расчет</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Four