import React, { Component } from 'react';
import './Home.css';
import FontAwesome from 'react-fontawesome';
import atom from '../assets/atom-solid.png';
import comillas from '../assets/comillas.svg';

import parque from '../assets/parque.jpeg';
import ping from '../assets/ping.jpg';
import summit from '../assets/summit.jpg';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="slide">
                    <div className="cover">
                        <div className="title">
                            <h2>Aprende a programar <br /> este verano en</h2>
                            <h1> IRONHACK</h1>
                            <p>Del 3 de Junio al 2 de Agosto | CDMX </p>

                            <br />
                            <br />
                            <a href="https://www.ironhack.com/es/cursos/curso-ux-ui-design/aplicar">
                                <button className="btn_aplicar">Aplicar</button>
                            </a>
                        </div>
                        {/* <div className="card">
                            <h2>Curso de Desarrollo Web</h2>
                        </div>*/}
                    </div>

                </div>
                <div className="why">
                    <div className="reasons">
                        <h2>¿Por qué aprender a programar?</h2>
                        <p><img src={atom} alt="" /> El idioma del futuro: programar será una habilidad casi tan básica como es ahora leer o escribir</p>
                        <p><img src={atom} alt="" /> Aprender a programar te abrirá muchas puertas, puesto que la demanda laboral es cada vez más alta</p>
                        <p><img src={atom} alt="" /> Desarrollo o programación Web, es una de las carreras mejor remuneradas globalmente</p>
                        <p><img src={atom} alt="" /> En un mundo cada vez más digital, es importante saber qué pasa detrás de la pantalla y por qué suceden las cosas</p>
                    </div>
                    <div className="quote">
                        <p><img src={comillas} alt="comillas" />  Gracias a Ironhack, varias cosas cambiaron en mi vida. Ahora tengo sólidos conocimientos en programación, pero el bootcamp también me dio las herramientas y la lógica para entender problemas más complejos de ciberseguridad e inteligencia artificial.</p>
                        <span>Alec Plehn - Web Development Bootcamp MEX</span>
                        <br />
                        <a href="https://medium.com/ironhack/my-experience-as-the-first-15-year-old-ironhacker-d971aac6012d" target="_blank">Leer más</a>

                    </div>
                </div>
                <div className="ih">
                    <h2>Irohack es uno de los mejores 3 bootcamps del mundo</h2>
                    <div className="badget">
                        <img className="course" src="https://coursereport-production-herokuapp-com.global.ssl.fastly.net/assets/best_bootcamp_course_report_white_2018-1e688fb10a5abd8da1e947223f2a606b.png" alt="course-report" />
                        <img className="switch" src="https://s3.amazonaws.com/alpha-centauri-production/uploads%2Feditor_content%2F1524230637704-Best+Bootcamp+SwitchUp+Winner.png" alt="switch-up" />
                    </div>
                    <div className="data">
                        <span> <strong>+ 3000</strong> <br /> Estudiantes graduados</span>
                        <span> <strong>9 </strong> <br /> Campus en el mundo</span>
                        <span> <strong>+ 600</strong> <br /> Empresas Asociadas</span>
                        <span> <strong>+ 70 </strong><br /> Nacionalidades</span>
                    </div>

                </div>
                <div className="temario">
                    <div>
                        <h2>Programa del curso</h2>
                        <p>Este curso de verano intensivo está dirigido a cualquier persona que quiera colaborar y aprender a crear aplicaciones Web Full-Stack con JavaScript, el lenguaje más utilizado en el mundo.</p>
                        <div className="contenido">
                            <div className="temas">
                                <div className="week">
                                    <h3>Módulo 1</h3>
                                    <p> HTML, CSS y JavaScript</p>
                                </div>
                                <div className="resumen">

                                    <p><FontAwesome name="adjust" /> JavaScript</p>
                                    <p><FontAwesome name="adjust" /> Git y Github</p>
                                    <p><FontAwesome name="adjust" /> Testing y Jasmine</p>
                                    <p><FontAwesome name="adjust" /> Canvas</p>
                                    <p><FontAwesome name="adjust" /> Proyecto 1: Videojuego en canvas</p>

                                </div>
                            </div>

                            <div className="temas">
                                <div className="week">
                                    <h3>Módulo 2</h3>
                                    <p> NodeJs y MongoDB</p>
                                </div>
                                <div className="resumen">
                                    <p><FontAwesome name="adjust" /> Node y Http server</p>
                                    <p><FontAwesome name="adjust" /> Mongo DB y Express</p>
                                    <p><FontAwesome name="adjust" /> API's</p>
                                    <p><FontAwesome name="adjust" /> AJAX </p>
                                    <p><FontAwesome name="adjust" /> Deployment </p>
                                    <p><FontAwesome name="adjust" /> Proyecto 2: Full-stack aplication</p>

                                </div>
                            </div>
                            <div className="temas">
                                <div className="week">
                                    <h3>Módulo 3</h3>
                                    <p> ReactJs</p>
                                </div>
                                <div className="resumen">
                                    <p><FontAwesome name="adjust" /> React</p>
                                    <p><FontAwesome name="adjust" /> Integration y autenticación</p>
                                    <p><FontAwesome name="adjust" /> Proyecto 3: MERN Aplication </p>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/KNxfcUUTK6Y" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen autoPlay></iframe>
                    </div>
                </div>
                <div className="box">
                    <div className="money">
                        <h2>¿Cuál es el costo?</h2>
                        <p>$70,000.00 + IVA</p>
                    </div>
                    <div className="option">
                        <h3>Opciones de Financiación</h3>
                        <p>                            ¿Necesitas ayuda con el pago? Nuestras opciones de financiación te ayudan a pagar el curso para que puedas centrarte en los estudios, en lugar de preocuparte por las barreras de financiación. Puedes obtener más información aquí.
                         </p>
                        <a href="https://www.ironhack.com/es/cursos/curso-ux-ui-design/aplicar">
                            <button className="btn_aplicar">Aplicar Ahora</button>
                        </a>
                    </div>
                </div>
                <div className="cards">


                    <div className="apply">
                        <img src={ping} alt="" />
                        <div className="descript">
                            <h2>Actividades y Tech Talks</h2>
                            <div style={{ textAlign: "left" }}>
                                <p>  <FontAwesome name="check" />
                                    Cada semana te prepararemos actividades (juegos, sesiones de meditación…) y office-hours exclusivas con profesionales del ecosistema para que puedas desconectar de tu computadora
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="apply">
                        <img src={parque} alt="" />
                        <div className="descript">
                            <h2>Escenario perfecto</h2>
                            <div style={{ textAlign: "left" }}>
                                <p>  <FontAwesome name="check" />
                                    El campus se ubica en una de las mejores zonas de la ciudad: la Roma Norte. Se encuentra a dos cuadras del Parque Río de Janeiro y en el centro del ecosistema Tech, emprendimiento e innovación de la Ciudad de México.
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="apply">
                        <img src={summit} alt="" />
                        <div className="descript">
                            <h2>Alumni Program</h2>
                            <div style={{ textAlign: "left" }}>
                                <p>  <FontAwesome name="check" />
                                    En Ironhack, organizamos taller, programas de estudios y pláticas para que todos nuestros alumni sigan aprendiendo y tengan la oportunidad de conocerse.
                                </p>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="footer">

                    <h3>¿Tienes alguna pregunta? Contáctanos</h3>
                    <div>
                        <a href="https://www.facebook.com/ironhackMEX/" aria-label="Facebook" target={"blank"} >
                            <FontAwesome name="facebook" />
                        </a>
                        <a href="https://wa.me/5215530391903" aria-label="whatsapp" target={"blank"}>
                            <FontAwesome name="whatsapp" />
                        </a>

                        <a href="mailto:paula@ironhack.com" aria-label="mail">
                            <FontAwesome name="envelope" />
                        </a>
                    </div>
                    <span><FontAwesome name="phone" /> 5530391903</span>
                </div>
                <div className="copy">
                    <div className="cp">
                        <img src="https://www.ironhack.com/assets/shared/logo.svg" alt="logo" />
                        <div>
                            <p>990 Biscayne Blvd. Ste 503 - Miami FL 33132</p>
                            <p>© 2013-2018 Ironhack. All Rights Reserved</p>
                        </div>
                    </div>
                    <img className="education" src="https://www.ironhack.com/37510fff605a7f412b370aadc317f9d2.png" alt="" />
                </div>

            </div>
        );
    }
}

export default Home;
