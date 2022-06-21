import React from 'react';

import cours1 from '../img/hair.png';
import cours2 from '../img/beard.png';
import cours3 from '../img/finn.png';
function Cards(props) {
  return (
    <>
      <section class="servicesSection" id="services">
        <div class="container">
          <div class="row">
            <div class="col-12 intro">
              <h1>Наши курсы</h1>
              <div class="heading-line"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-12">
              <img class="sevicesImg" src={cours1} alt="" />
              <h3 class="serviceTitle">Барбер с нуля — Индивидуальный</h3>
              <p class="price">
                Базовый курс для начинающих с нулевым или начальным опытом
                <br />
                50000 рублей
              </p>
              <a href="*" class="btn btn-brand" target="_blank">
                Приобрести
              </a>
            </div>
            <div class="col-lg-4 col-md-12">
              <img class="sevicesImg" src={cours3} alt="" />
              <h3 class="serviceTitle">Барбер с нуля — Групповой</h3>
              <p class="price">
                Курс для группы от 3 до 6 человек
                <br />
                40000 рублей
              </p>
              <a href="*" class="btn btn-brand" target="_blank">
                Приобрести
              </a>
            </div>
            <div class="col-lg-4 col-md-12">
              <img class="sevicesImg" src={cours2} alt="" />
              <h3 class="serviceTitle">Из парикмахера в барберы</h3>
              <p class="price">
                Курс повышения квалификации для барберов и мастеров-универсалов
                <br />
                45000 рублей
              </p>
              <a href="*" class="btn btn-brand" target="_blank">
                Приобрести
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cards;
