import PrincipalSFundo, { Favicon, WhppIcon, InstaIcon, SpotifyIcon, Foto7, LogoCompleta, Coding, LogoWhite, Gear } from './images/importsImg'
import gsap from 'gsap';
import $ from 'jquery'
import { useEffect } from 'react';
const Sobre = () => {
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
        <div id="all" >


            <div class="cursor"></div>


            <div id="breaker"></div>
            <div id="breaker-two"></div>

            <div id="navigation-content">
                <div className="logo">
                    <img src={LogoWhite} alt="logo" />
                </div>

                <div className="navigation-close">
                    <span className="close-first"></span>
                    <span className="close-second"></span>
                </div>


                <div className="navigation-links">
                    <a href="/" data-text="HOME" id="home-link">HOME</a>
                    <a href="/sobre" data-text="SOBRE" id="sobre-link">SOBRE MIM</a>
                    <a href="/servicos" data-text="SERVIÇOS" id="serviços-link">SERVIÇOS</a>
                    <a href="/depoimentos" data-text="DEPOIMENTOS" id="depoimentos-link">DEPOIMENTOS</a>
                    <a href="/blog" data-text="BLOG" id="blog-link">BLOG</a>
                    <a href="/podcast" data-text="PODCAST" id="podcast-link">PODCAST</a>
                </div>

            </div>


            <div id="navigation-bar">
                <a href="https://wa.me/554197895343" target="_blank"><img src={Favicon} alt="logo" /></a>
                <div className="menubar">
                    <span className="first-span"></span>
                    <span className="second-span"></span>
                    <span className="third-span"></span>
                </div>
            </div>

            <div id="sobre">


                <div id="about-content">
                    <div className="about-header">
                        Joana <span className="color">Mieres</span>
                        <span className="header-caption">Sobre <span className="color"> mim</span></span>
                    </div>
                    <div className="about-main">
                        <div className="about-img">
                            <img src={Foto7} alt="Your Image" />
                            <img className="image-responsivo" src={LogoCompleta} alt="Your Image" />
                        </div>
                        <div className="about-first-paragraph">

                            <span className="about-first-line">
                                Terapeuta,
                                <span className="color">escritora, professora</span> e empresária.
                            </span>
                            <span className="about-second-line">
                                A menina nascida em 23/01/1983, de mente inquieta, comunicativa,
                                e ao mesmo tempo introspectiva, tinha o sonho de ser <b />escritora,
                                professora e empresária<b />. Foi persistente, resiliente e fez a
                                vida que ela queria acontecer.
                                <br />
                                <br />
                                Em 2008, se formou em <b />Letras Português / Inglês pela FURG<b /> e
                                estudou <b />Mestrado em História da Literatura<b />, pesquisando a literatura
                                nos jornais do século XIX e a vida e obra de uma escritora feminista
                                da mesma época.
                                <br />
                                <br />
                                Hoje, <b />pós-graduanda em Espiritualidade, Carreira e Sentido de Vida<b />,
                                pesquisa o mundo da mentalidade e do autoconhecimento para trazer mais
                                ferramentas de cura para seu trabalho de <b />Terapeuta Holística, Taróloga,
                                Biblioterapeuta e Desprogramadora de Crenças<b />.
                                <br />
                                <br />
                                Aliado ao seu trabalho de sessões e mentorias terapêuticas, traz a experiência
                                de mais de <b />17 anos de liderança e gestão de pessoas e de empresária desde
                                2013<b />.
                                <br />
                                <br />
                                São mais de <b />13 mil horas de aulas dadas<b />, mais de <b />12 mil horas de
                                treinamentos feitos<b /> e já era mentora antes mesmo desse termo virar moda.
                                São também mais de <b />20 mil horas de atendimento<b /> pedagógico, coordenação
                                de ensino, seleção de pessoas, entrevistas, contratações, atendimento ao cliente,
                                negociações e vendas.
                                <br />
                                <br />
                                <span class="color">Joana Mieres</span> é PAS <b>(Pessoa Altamente Sensível)</b>
                                e uma <b>aquariana</b> que adora inovar, ouvir e contar histórias que curam.
                                Através da <b>Literatura Terapêutica</b>, em seus <b>Círculos de Empoderamento</b>,
                                ela cria espaços de fala para mulheres praticarem o <b>autocuidado e a escuta das
                                    emoções</b>. E o <b>Tarô</b>, uma de suas paixões, também conta histórias para
                                quem tem ouvidos para ouvir e olhos para despertar.
                                <br />
                                <br />
                                Passou pelas perdas do pai em 2006 e da mãe em 2015, além de outras perdas que
                                mudaram sua maneira de ver a vida. E só o fato de ser empresária também a fez
                                amadurecer como pessoa e não só como profissional. Clarice Lispector a definiria
                                assim: <i>Sou como você me vê. Posso ser leve como uma brisa ou forte como uma
                                    ventania. Depende de quando e como você me vê passar.</i>
                                <br />
                                <br />
                                Aquário e Capricórnio são seus signos solares. Touro é seu signo lunar. Seus
                                ascendentes são em Aquário e Peixes, com influência de Áries. Representam sua
                                busca intensa pelo <b>sentido da vida</b> e pela <b>autenticidade</b>. Suas 5
                                Forças Pessoais se entrelaçam com os 5 Pilares que ela vem construindo em sua
                                vida e carreira:
                            </span>
                        </div>
                    </div>
                    <div className="sobre-content">
                        <div className="sobre-destaques one">
                            <div className="sobre-img">
                                <img src={Coding} alt="service-one" />
                            </div>
                            <div className="sobre-description">
                                <h2>Forças Pessoais:</h2>
                                <ul>
                                    <li>Beleza e Excelência</li>
                                    <li>Espiritualidade</li>
                                    <li>Perspectiva</li>
                                    <li>Inteligência Social</li>
                                    <li>Criatividade</li>
                                </ul>
                            </div>
                        </div>
                        <div className="sobre-destaques two">
                            <div className="sobre-img">
                                <img src={Coding} alt="service-two" />
                            </div>
                            <div className="sobre-description">
                                <h2>Seus Pilares:</h2>
                                <ul>
                                    <li>Poética</li>
                                    <li>Espiritualidade</li>
                                    <li>Autoconhecimento</li>
                                    <li>Mentalidade</li>
                                    <li>TransformAÇÃO</li>
                                </ul>
                            </div>
                        </div>
                        <div className="text-sobre">
                            <p>
                                <span className="color">Joana Mieres</span> acredita que todas podemos ter sucesso
                                quando recebemos as ferramentas certas, motivação e conhecimento e ela está aqui
                                para trazer valentia para tua vida. A cada dia, uma parte adormecida te pede para
                                despertar. <span className="color">Acorde!</span>
                            </p>
                            <div className="button-sobre">
                                <a href="#"><button>Saiba Mais</button></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="color-changer">

                    <div className="color-panel">
                        <img src={Gear} alt="" />
                    </div>

                    <div className="color-selector">
                        <div className="heading">Customise</div>

                        <div className="colors">
                            <ul>
                                <li>
                                    <a href="css/color-yellow.css" className="color-yellow" title="color-yellow"></a>
                                </li>
                                <li>
                                    <a href="css/color-pink.css" className="color-pink" title="color-pink"></a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>


                <div className="footer">
                    <div className="footer-text">
                        <p>©2023 JOANA MIERES. Todos os direitos reservados.</p>
                        <p>Desenvolvido com amor por <a href="https://www.instagram.com/marciahelena.lima/"
                            target="_blank">@Márcia Helena</a></p>
                    </div>

                    <div className="redes-footer">
                        <a href="https://wa.me/554197895343" target="_blank"><img src={WhppIcon}
                            className="social-media-footer" alt="whatsapp-logo" /></a>
                        <a href="https://www.instagram.com/joanamieres/" target="_blank"><img
                            src={InstaIcon} className="social-media-footer" alt="instagram-logo" /></a>
                        <a href="https://spotify.com/" target="_blank"><img src={SpotifyIcon}
                            className="social-media-footer" alt="spotify-logo" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sobre;