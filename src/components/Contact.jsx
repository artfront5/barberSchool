import React from 'react';

import vk from '../img/vk.png';

function Contact(props) {
  return (
    <>
      <section class="contact" id="contact">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="textContact">
                <h1>Контакты</h1>
                <h6>+7(999)999-99-99</h6>
                <h6>barbersopsc1@gmail.com</h6>
                <h6>Россия, Санкт-Петербург, ул.Федора Абрамова 8б, корпус 3</h6>
                <h6>Часы работы: с 10:00 до 21:00</h6>
                <h6>
                  По вопросам сотрудничества, трудоустройства, франшизы обращайтесь на
                  почту.
                </h6>
                <a href="https://vk.com/">
                  <img class="vk" src={vk} alt="" />
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <iframe
                title="This is a unique title"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae004bd7643204441c48c92121d8d066e866d57093affb4b4d4213e0bcf657ac8&amp;source=constructor"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
