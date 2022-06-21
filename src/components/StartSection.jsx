import React from 'react';

function StartSection(props) {
  return (
    <>
      <section id="start" class="startSection">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h1 class="display-5">Курсы барберов № 1 в Санкт-Петербурга</h1>
              <p class="startText">
                Уже через 30 дней заработаешь больше, чем вложил(а) в обучение <br />
                Первое полноценное занятие бесплатно для всех желающих. Его прохождение ни
                к чему не обязывает и можно отказаться в любой момент
              </p>
              <a href="https://www.garagebarbers.net/" class="btn btn-brand">
                Наш барбершоп
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StartSection;
