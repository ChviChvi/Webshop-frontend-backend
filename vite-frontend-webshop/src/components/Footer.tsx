import React from "react";

import '../stylesheets/reset.css';
import '../stylesheets/HomePage.css';
function Footer() {

    return (

        <footer>

            <div className="footer-container">
                <div>
                    <h3>
                        Contact
                    </h3>
                    <h4>
                        <a href='mailto:cvin@dtu.dk'> Christiaan Vink</a>
                    </h4>
                    <h4>
                        <a href='mailto:s205446@student.dk'> Gustav Lund Fauser</a>
                    </h4>
                    <h4>
                        <a href='mailto:s211615@student.dk'> Tobias Henriksen </a>
                    </h4>
                    <h4>
                        <a href='mailto:s205349@student.dk'> Villads Hellman Andersen </a>
                    </h4>
                    <h4>
                        <a href='mailto:s205863@student.dk'> Jean Bora Yagan</a>
                    </h4>
                </div>

                <div>
                    <h3>
                        Find us
                    </h3>
                    <h4>
                        <a href="https://www.google.com/search?tbs=lf:1,lf_ui:3&tbm=lcl&sxsrf=APwXEdcTmZGVvcpWDxwWsuzDU_ODgzl2kw:1682879763097&q=dtu+lyngby&rflfq=1&num=10&rllag=55786164,12519371,141&rldimm=14917149974382364357&ved=2ahUKEwjtkOrTn9L-AhVGSPEDHSsEDb0Qu9QIegQIExAL#rlfi=hd:;si:14917149974382364357;mv:[[55.7899551,12.525561699999999],[55.7790508,12.5152547]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:3">
                            DTU Lyngby
                        </a>
                    </h4>

                </div>

                <div>
                    <h3>
                        Follow us
                    </h3>
                    <h4>
                        <a href="https://www.facebook.com/">
                            Facebook
                        </a>
                    </h4>
                    <h4>
                        <a href="https://www.instagram.com/">
                            Instragram
                        </a>
                    </h4>
                    <h4>
                        <a href="https://twitter.com/">
                            Twitter
                        </a>
                    </h4>


                </div>
            </div>

        </footer>
    )
}

export default Footer;