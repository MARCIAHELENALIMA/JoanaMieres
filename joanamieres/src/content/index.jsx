import './css/index.css'
import { useEffect, useState } from 'react'
import PrincipalSFundo, { Favicon, WhppIcon, InstaIcon, SpotifyIcon } from './images/importsImg'
import gsap from 'gsap';
import $ from 'jquery'
const Index = () => {
    useEffect(() => {
        // Código para animação do loader
        gsap.to('#loader', 4, { y: "-100%" });
        gsap.to('#loader', 1, { opacity: 0 });
        gsap.to('#loader', 0, { display: "none", delay: 4 });
        gsap.to('#header', 0, { display: "block", delay: 1 });
        gsap.to('#navigation-content', 0, { display: "none" });
        gsap.to('#navigation-content', 0, { display: "flex", delay: 2 });

        // Evento de click na color panel
        $('.color-panel').on("click", function (e) {
            e.preventDefault();
            $('.color-changer').toggleClass('color-changer-active');
        });

        // Evento de click nas cores
        $('.colors a').on("click", function (e) {
            e.preventDefault();
            var attr = $(this).attr("title");
            console.log(attr);
            $('head').append('<link rel="stylesheet" href="css/' + attr + '.css">');
        });

        // Eventos de click na menubar e navigation-close
        $('.menubar').on('click', function () {
            gsap.to('#navigation-content', .6, { y: 0 });
        });

        $('.navigation-close').on('click', function () {
            gsap.to('#navigation-content', .6, { y: "-100%" });
        });

        // Evento de click em links específicos
        $('#podcast-link').on('click', function () {
            // Código para manipulação de elementos ao clicar em podcast-link
        });

        // Adicionando efeito de rotação de texto
        function TxtRotate(el, toRotate, period) {
            // Implementação da rotação de texto
        }

        window.onload = function () {
            // Implementação do texto rotativo
        };

        // Eventos de hover e movimento do cursor
        var body = document.querySelector('body');
        var $cursor = $('.cursor');

        function cursormover(e) {
            // Implementação do movimento do cursor
        }

        function cursorhover(e) {
            // Implementação do hover do cursor
        }

        function cursor(e) {
            // Implementação do cursor padrão
        }

        $(window).on('mousemove', cursormover);
        $('.menubar').hover(cursorhover, cursor);
        $('a').hover(cursorhover, cursor);
        $('.navigation-close').hover(cursorhover, cursor);
    }, []);

    return (
        <>
            <div id="all">


                <div class="cursor"></div>
                <div id="loader">
                    <span class="color">Joana Mieres</span>Terapeuta
                </div>


                <div id="breaker"></div>
                <div id="breaker-two"></div>

                <div id="navigation-bar">
                    <a href="https://wa.me/554197895343" target="_blank"><img src={Favicon} alt="logo" /></a>
                </div>

                <div id="header">
                    <div id="particles"></div>

                    <div class="social-media-links">
                        <a href="https://wa.me/554197895343" target="_blank"><img src={WhppIcon} class="social-media"
                            alt="whatsapp-logo" /></a>
                        <a href="https://www.instagram.com/joanamieres/" target="_blank"><img src={InstaIcon}
                            class="social-media" alt="instagram-logo" /></a>
                        <a href="https://spotify.com/" target="_blank"><img src={SpotifyIcon} class="social-media"
                            alt="spotify-logo" /></a>
                    </div>


                    <div class="header-image">
                        <img src={PrincipalSFundo} alt="logo" />
                    </div>

                    <div class="menu-home">
                        <a href="/" data-text="HOME" id="home-link">HOME</a>
                        <a href="/sobre" data-text="SOBRE" id="sobre-link">SOBRE MIM</a>
                        <a href="/servicos" data-text="SERVIÇOS" id="serviços-link">SERVIÇOS</a>
                        <a href="/depoimentos" data-text="DEPOIMENTOS" id="depoimentos-link">DEPOIMENTOS</a>
                        <a href="/blog" data-text="BLOG" id="blog-link">BLOG</a>
                        <a href="/podcast" data-text="PODCAST" id="podcast-link">PODCAST</a>
                    </div>
                </div>


            </div>
            <script src='./js/index.js'></script>
        </>
    )
}
export default Index;