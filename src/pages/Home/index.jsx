<title>Sportly</title>

import React from "react";
import "./style.css";
import { useNavigate } from 'react-router-dom';
import * as Images from '../../assets';


// import logoSporlty from '../../assets/logo_sportly.png';
// import imgBasqueteSlider from '../../assets/basquete_slider_esportes.png';
// import imgTenisSlider from '../../assets/tenis_slider_esportes.png';
// import imgVoleiSlider from '../../assets/volei_slider_esportes.png';
// import imgHandebolSlider from '../../assets/handebol_slider_esportes.png';
// import imgFutsalSlider from '../../assets/futsal_slider_esportes.png';
// import imgBadmintonSlider from '../../assets/badminton_slider_esportes.png';
// import imgBasquete3x3Slider from '../../assets/basquete3x3_slider_esportes.png';

// Atenção: precisa ter o Swiper instalado e importado
// npm install swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
    
const navigate = useNavigate();

function irParaRegister() {
    navigate('/register');
}

  return (
    <div>
      <header className="cabecalho">
        <div className="logo-area">
          <a href="#">
            <img src={Images.logoSportly} alt="Sportly logo" />
          </a>
        </div>

        <div className="barra-pesquisa">
          <input type="text" placeholder="Busque por Esportes" />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>

        <nav className="navegacao">
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">CATEGORIAS</a></li>
            <li><a href="#">NUTRIÇÃO</a></li>
            <li><a href="#">PROGRESSO</a></li>
            <li><a href="#">SUPORTE</a></li>
          </ul>
        </nav>

        <div className="botoes-auth">

          <i class="bi bi-cart3 botaoCarrinho"></i>

          <button className="btn-login"><p>Entrar</p></button>

          <button onClick={irParaRegister} className="btn-register">Registrar</button>

        </div>
      </header>

      <main>
        {/* Slider Esportes */}
        <div className="esportes-container">
          <h1 className="titulo-categoria">ESPORTES DE QUADRA</h1>
          <div className="categoria-tabs">
            <button className="tab-btn active" data-category="quadra">Esportes de Quadra</button>
            <button className="tab-btn" data-category="areia">Esportes de Areia</button>
            <button className="tab-btn" data-category="agua">Esportes Aquáticos</button>
            <button className="tab-btn" data-category="radicais">Esportes Radicais</button>
            <button className="tab-btn" data-category="inverno">Esportes de Inverno</button>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}
            className="esportesSwiper"
          >

            <SwiperSlide>

              <div className="esportes-grid">

                <div className="esporte-card">
                  <div className="esporte-imagem">
                    <img src={Images.imgBasqueteSlider} alt="Basquete" />
                  </div>
                  <h3 className="esporte-nome">Basquete</h3>
                </div>

                <div className="esporte-card">
                  <div className="esporte-imagem">
                    <img src={Images.imgTenisSlider} alt="Tênis" />
                  </div>
                  <h3 className="esporte-nome">Tênis</h3>
                </div>

                <div className="esporte-card">
                  <div className="esporte-imagem">
                    <img src={Images.imgVoleiSlider} alt="Vôlei" />
                  </div>
                  <h3 className="esporte-nome">Vôlei</h3>
                </div>

                <div className="esporte-card">
                  <div className="esporte-imagem">
                    <img src={Images.imgHandebolSlider} alt="Handebol" />
                  </div>
                  <h3 className="esporte-nome">Handebol</h3>
                </div>

              </div>
            </SwiperSlide>

            <SwiperSlide>

              <div className="esportes-grid">

                <div className="esporte-card">
                  <div className="esporte-imagem">
                    <img src={Images.imgFutsalSlider} alt="Futsal" />
                  </div>
                  <h3 className="esporte-nome">Futsal</h3>
                </div>

                <div className="esporte-card">
                  <div className="esporte-imagem">
                    <img src={Images.imgBadmintonSlider} alt="Badminton" />
                  </div>
                  <h3 className="esporte-nome">Badminton</h3>
                </div>

                <div className="esporte-card">
                  <div className="esporte-imagem">
                    <img src={Images.imgBasquete3x3Slider} alt="Basquete_3x3" />
                  </div>
                  <h3 className="esporte-nome">Basquete 3x3</h3>
                </div>

                <div className="esporte-card">
                  <div className="esporte-imagem">
                    <img src={Images.imgTenisDeMesaSlider} alt="Tênis_de_Mesa" />
                  </div>
                  <h3 className="esporte-nome">Tênis de Mesa</h3>
                </div>

              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Slider Produtos */}
        <h1 className="titulo-loja">Loja de Equipamentos</h1>
        <div className="produtos-container">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>

              <div className="card-container">

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src={Images.imgRaqueteTenis} alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Raquete de Tênis Wilson</h3>
                    <p className="produto-preco">R$ 899,90</p>
                    <p className="produto-parcela">5x de R$ 179,98 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src={Images.imgBolaFutebol} alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Bola de Futebol Nike</h3>
                    <p className="produto-preco">R$ 249,90</p>
                    <p className="produto-parcela">3x de R$ 83,30 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src={Images.imgLuvaBoxe} alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Luvas de Boxe Everlast</h3>
                    <p className="produto-preco">R$ 199,90</p>
                    <p className="produto-parcela">2x de R$ 99,95 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Colchonete Yoga 1,8m</h3>
                    <p className="produto-preco">R$ 149,90</p>
                    <p className="produto-parcela">2x de R$ 74,95 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Halteres Ajustáveis 10kg</h3>
                    <p className="produto-preco">R$ 499,90</p>
                    <p className="produto-parcela">5x de R$ 99,98 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

              </div>
            </SwiperSlide>

            <SwiperSlide>

              <div className="card-container">

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Console PlayStation 5 Slim</h3>
                    <p className="produto-preco">R$ 3.533,07</p>
                    <p className="produto-parcela">10x de R$ 379,90 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Console PlayStation 5 Slim</h3>
                    <p className="produto-preco">R$ 3.533,07</p>
                    <p className="produto-parcela">10x de R$ 379,90 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Console PlayStation 5 Slim</h3>
                    <p className="produto-preco">R$ 3.533,07</p>
                    <p className="produto-parcela">10x de R$ 379,90 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Console PlayStation 5 Slim</h3>
                    <p className="produto-preco">R$ 3.533,07</p>
                    <p className="produto-parcela">10x de R$ 379,90 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Monitor Gamer Curvo</h3>
                    <p className="produto-preco">R$ 1.899,99</p>
                    <p className="produto-parcela">10x de R$ 211,11 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

              </div>
            </SwiperSlide>

            <SwiperSlide>

              <div className="card-container">

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Console PlayStation 5 Slim</h3>
                    <p className="produto-preco">R$ 3.533,07</p>
                    <p className="produto-parcela">10x de R$ 379,90 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Console PlayStation 5 Slim</h3>
                    <p className="produto-preco">R$ 3.533,07</p>
                    <p className="produto-parcela">10x de R$ 379,90 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Console PlayStation 5 Slim</h3>
                    <p className="produto-preco">R$ 3.533,07</p>
                    <p className="produto-parcela">10x de R$ 379,90 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Console PlayStation 5 Slim</h3>
                    <p className="produto-preco">R$ 3.533,07</p>
                    <p className="produto-parcela">10x de R$ 379,90 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Monitor Gamer Curvo</h3>
                    <p className="produto-preco">R$ 1.899,99</p>
                    <p className="produto-parcela">10x de R$ 211,11 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

              </div>
            </SwiperSlide>

            <SwiperSlide>

              <div className="card-container">

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Console PlayStation 5 Slim</h3>
                    <p className="produto-preco">R$ 3.533,07</p>
                    <p className="produto-parcela">10x de R$ 379,90 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Console PlayStation 5 Slim</h3>
                    <p className="produto-preco">R$ 3.533,07</p>
                    <p className="produto-parcela">10x de R$ 379,90 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Console PlayStation 5 Slim</h3>
                    <p className="produto-preco">R$ 3.533,07</p>
                    <p className="produto-parcela">10x de R$ 379,90 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Console PlayStation 5 Slim</h3>
                    <p className="produto-preco">R$ 3.533,07</p>
                    <p className="produto-parcela">10x de R$ 379,90 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Monitor Gamer Curvo</h3>
                    <p className="produto-preco">R$ 1.899,99</p>
                    <p className="produto-parcela">10x de R$ 211,11 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <h1 className="titulo-loja">Produtos Esportivos</h1>
        <div className="produtos-container">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            <SwiperSlide>

              <div className="card-container">

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Console PlayStation 5 Slim</h3>
                    <p className="produto-preco">R$ 3.533,07</p>
                    <p className="produto-parcela">10x de R$ 379,90 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Console PlayStation 5 Slim</h3>
                    <p className="produto-preco">R$ 3.533,07</p>
                    <p className="produto-parcela">10x de R$ 379,90 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Console PlayStation 5 Slim</h3>
                    <p className="produto-preco">R$ 3.533,07</p>
                    <p className="produto-parcela">10x de R$ 379,90 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Console PlayStation 5 Slim</h3>
                    <p className="produto-preco">R$ 3.533,07</p>
                    <p className="produto-parcela">10x de R$ 379,90 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Monitor Gamer Curvo</h3>
                    <p className="produto-preco">R$ 1.899,99</p>
                    <p className="produto-parcela">10x de R$ 211,11 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <h1 className="titulo-loja">Suplementos</h1>
        <div className="produtos-container">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            <SwiperSlide>

              <div className="card-container">

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Console PlayStation 5 Slim</h3>
                    <p className="produto-preco">R$ 3.533,07</p>
                    <p className="produto-parcela">10x de R$ 379,90 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Console PlayStation 5 Slim</h3>
                    <p className="produto-preco">R$ 3.533,07</p>
                    <p className="produto-parcela">10x de R$ 379,90 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Console PlayStation 5 Slim</h3>
                    <p className="produto-preco">R$ 3.533,07</p>
                    <p className="produto-parcela">10x de R$ 379,90 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Console PlayStation 5 Slim</h3>
                    <p className="produto-preco">R$ 3.533,07</p>
                    <p className="produto-parcela">10x de R$ 379,90 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Monitor Gamer Curvo</h3>
                    <p className="produto-preco">R$ 1.899,99</p>
                    <p className="produto-parcela">10x de R$ 211,11 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <h1 className="titulo-loja">Acessórios</h1>
        <div className="produtos-container">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            <SwiperSlide>

              <div className="card-container">

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Console PlayStation 5 Slim</h3>
                    <p className="produto-preco">R$ 3.533,07</p>
                    <p className="produto-parcela">10x de R$ 379,90 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Console PlayStation 5 Slim</h3>
                    <p className="produto-preco">R$ 3.533,07</p>
                    <p className="produto-parcela">10x de R$ 379,90 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Console PlayStation 5 Slim</h3>
                    <p className="produto-preco">R$ 3.533,07</p>
                    <p className="produto-parcela">10x de R$ 379,90 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Console PlayStation 5 Slim</h3>
                    <p className="produto-preco">R$ 3.533,07</p>
                    <p className="produto-parcela">10x de R$ 379,90 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

                <div className="produto-card">
                  <div className="produto-imagem">
                    <img src="https://placehold.co/300x300" alt="Produto" />
                  </div>
                  <div className="produto-info">
                    <h3>Monitor Gamer Curvo</h3>
                    <p className="produto-preco">R$ 1.899,99</p>
                    <p className="produto-parcela">10x de R$ 211,11 sem juros</p>
                    <button className="btn-comprar">Comprar</button>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          </Swiper>
        </div>

         <footer>
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>Sportly</h3>
          <p>
            Tecnologia, preço baixo e confiança.
          </p>
        </div>

        <div className="footer-section">
          <h3>Redes Sociais</h3>

          <div class="social-icons">
              <a href="#" target="_blank"><i class="bi bi-facebook iconesRedes"></i></a>
              <a href="#" target="_blank"><i class="bi bi-instagram iconesRedes"></i></a>
              <a href="#" target="_blank"><i class="bi bi-youtube iconesRedes"></i></a>
              <a href="#" target="_blank"><i class="bi bi-tiktok iconesRedes"></i></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Atendimento</h3>
          <a href="#">Fale Conosco</a><br />
          <a href="#">Política de Privacidade</a><br />
          <a href="#">SUPORTE 24 HORAS</a><br />
        </div>


      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Sportly - Todos os direitos reservados.
      </div>
    </footer>

      </main>
    </div>
  );
}