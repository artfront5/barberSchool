import React from 'react';

function Navbar(props) {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="*">
            GARAGE school
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#home">
                  Главная
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#services">
                  Курсы
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#command">
                  Вы научитесь
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Контакты
                </a>
              </li>
            </ul>
            <a href="*" class="btn btn-entrance">
              Корзина
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
