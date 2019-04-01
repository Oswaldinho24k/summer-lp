import React, { Component } from 'react';
import './Home.css';
import FontAwesome from 'react-fontawesome';
import atom from '../assets/atom-solid.png';
import comillas from '../assets/comillas.svg';
import photo from '../assets/Copy of ironhack-53.jpg';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="slide">
                    <div className="cover">
                        <div className="title">
                            <h2>Aprende a programar <br/> este verano en</h2>
                            <h1> IRONHACK</h1>
                            <p>Del 3 de Junio al 2 de Agosto | CDMX </p>

                            <br/>
                            <br/>
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
                        <p><img src={atom} alt=""/> Aprender a programar te abrirá muchas puertas, puesto que la demanda laboral es cada vez es más alta</p>
                        <p><img src={atom} alt=""/> Desarrollo o programación web, es una de las carreras mejor remuneradas globalmente</p>
                        <p><img src={atom} alt=""/> Te motivará a crear cosas nuevas. Tal como lo dijo Mark Zuckerberg, “la programación te permite crear algo totalmente nuevo de la nada”.</p>
                        <p><img src={atom} alt=""/> Ser programador te permite trabajar desde la comodidad de tu hogar</p>
                    </div>
                    <div className="quote">
                        <p><img src={comillas} alt="comillas"/>  I decided to get ahead of the curve before I’m 35 years old and a computer replaces my job and yours.</p>
                        <span>Andrew Ettinger - Web Development Bootcamp MIA, Jun'15
                        </span>
                    </div>
                        </div>
                <div className="ih">
                    <h2>Irohack es uno de los mejores 3 bootcamps del mundo</h2>
                    <div className="badget">
                        <img className="course" src="https://coursereport-production-herokuapp-com.global.ssl.fastly.net/assets/best_bootcamp_course_report_white_2018-1e688fb10a5abd8da1e947223f2a606b.png" alt="course-report"/>
                        <img className="switch" src="https://s3.amazonaws.com/alpha-centauri-production/uploads%2Feditor_content%2F1524230637704-Best+Bootcamp+SwitchUp+Winner.png" alt="switch-up"/>
                    </div>
                    <div className="data">
                        <span> <strong>+ 2000</strong> <br/> Estudiantes graduados</span>
                        <span> <strong>11 </strong> <br/> Campus en el mundo</span>
                        <span> <strong>+ 600</strong> <br/> Empresas Partners</span>
                        <span> <strong>+ 70 </strong><br/> Nacionalidades</span>
                    </div>

                </div>
                <div className="temario">
                    <h2>Programa del curso</h2>
                    <p>Este curso de verano intensivo esta dirigido a principiantes o prefesionales que quieran aprender a crear
                        alicaciones web fullstack con JavaScript.
                    </p>
                    <div className="contenido">
                        <div className="temas">
                            <div className="week">
                                <h3>Módulo 1</h3>
                                <p> HTML, CSS y JavaScript</p>
                            </div>
                            <div className="resumen">

                                <p><FontAwesome name="adjust"/> JavaScript</p>
                                <p><FontAwesome name="adjust"/> Git y Github</p>
                                <p><FontAwesome name="adjust"/> Testing y Jasmine</p>
                                <p><FontAwesome name="adjust"/> Canvas</p>
                                <p><FontAwesome name="adjust"/> Proyecto 1: Videojuego en canvas</p>

                            </div>
                        </div>

                        <div className="temas">
                            <div className="week">
                                <h3>Módulo 2</h3>
                                <p> NodeJs y MongoDB</p>
                            </div>
                            <div className="resumen">
                                <p><FontAwesome name="adjust"/> Node y Http server</p>
                                <p><FontAwesome name="adjust"/> Mongo DB y Express</p>
                                <p><FontAwesome name="adjust"/> API's</p>
                                <p><FontAwesome name="adjust"/> AJAX </p>
                                <p><FontAwesome name="adjust"/> Deployment </p>
                                <p><FontAwesome name="adjust"/> Proyecto 2: Full-stack aplication</p>

                            </div>
                        </div>
                        <div className="temas">
                            <div className="week">
                                <h3>Módulo 3</h3>
                                <p> ReactJs</p>
                            </div>
                            <div className="resumen">
                                <p><FontAwesome name="adjust"/> React</p>
                                <p><FontAwesome name="adjust"/> Integration y autenticación</p>
                                <p><FontAwesome name="adjust"/> Proyecto 3: MERN Aplication </p>

                            </div>
                        </div>
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
                    </div>
                </div>
                <div>

                    <div className="apply">
                        <img src={photo} alt=""/>
                            <div className="descript">
                                <h2>Web Development Bootcamp</h2>
                                <div style={{textAlign:"left"}}>
                                <p>  <FontAwesome name="check"/> 9 semanas intensivas</p>
                                <p><FontAwesome name="check"/> 360 horas de curso</p>
                                <p> <FontAwesome name="check"/> Charlas y mentoría</p>
                                <p> <FontAwesome name="check"/> Servicios de carrera</p>
                                <p> <FontAwesome name="check"/> Global network</p></div>
                                <br/>
                                <a href="https://www.ironhack.com/es/cursos/curso-ux-ui-design/aplicar">
                                    <button className="btn_aplicar">Aplicar</button>
                                </a>
                            </div>
                    </div>
                    <br/>

                </div>
                <div className="footer">

                        <h3>¿Tienes alguna pregunta? Contáctanos</h3>
                    <div>
                    <a href="https://www.facebook.com/ironhackMEX/" aria-label="Facebook" target={"blank"} >
                            <FontAwesome name="facebook"/>
                        </a>
                        <a href="https://wa.me/5215530391903" aria-label="whatsapp" target={"blank"}>
                            <FontAwesome name="whatsapp"/>
                        </a>

                        <a href="mailto:paula@ironhack.com" aria-label="mail">
                            <FontAwesome name="envelope"/>
                        </a>
                </div></div>
                    <div className="copy">
                        <div className="cp">
                            <img src="https://learning.ironhack.com.mx/logo.png" alt="logo"/>
                            <div>
                                <p>990 Biscayne Blvd. Ste 503 - Miami FL 33132</p>
                                <p>© 2013-2018 Ironhack. All Rights Reserved</p>
                            </div>
                        </div>
                        <img className="education" src="https://www.ironhack.com/37510fff605a7f412b370aadc317f9d2.png" alt=""/>
                    </div>

            </div>
        );
    }
}

export default Home;
