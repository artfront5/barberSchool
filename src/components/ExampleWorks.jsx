import React from 'react';

import hair1 from '../img/hair7.jpg';
import hair2 from '../img/hair3.jpg';
import hair3 from '../img/hair9.jpg';
import hair4 from '../img/hair8.jpg';

function ExampleWorks(props) {
  return (
    <>
      <section class="servicesSection team_section" id="command">
        <div class="container">
          <div class="row">
            <div class="col-12 intro">
              <h1>На курсе вы научитесь делать</h1>
              <div class="heading-line"></div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="single-content">
                <img class="teamImg" src={hair1} alt="" />
                <div class="text-content">
                  <h3 class="nameOfMemberOfteam">Классические стрижки</h3>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="single-content">
                <img class="teamImg" src={hair2} alt="" />
                <div class="text-content">
                  <h3 class="nameOfMemberOfteam">Fade</h3>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="single-content">
                <img class="teamImg" src={hair3} alt="" />
                <div class="text-content">
                  <h3 class="nameOfMemberOfteam">Удлиненные стрижки</h3>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="single-content">
                <img class="teamImg" src={hair4} alt="" />
                <div class="text-content">
                  <h3 class="nameOfMemberOfteam">Стрижки бороды и усов</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ExampleWorks;
