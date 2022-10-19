import React, { useContext, useMemo } from "react";
import { useState } from "react";
import Banner from "./assets/banner.png";
import Face from "./assets/face-icon.png";
import Insta from "./assets/insta-icon.png";
import Ldin from "./assets/linkedin-icon.png";
import Youtube from "./assets/you-icon.png";
import Twit from "./assets/icon-twitter.png";
import AdobeLg from "./assets/logo Adobe.png";
import Form from "./components/form";
import { DataContext } from "./DataContext";
import ReactGA from "react-ga";
const TRACKING_ID = "UA-172127471-1";

ReactGA.initialize(TRACKING_ID);

const LandingForm = () => {
  const [company, setCompany] = useState("");
  const { info, companys, setCompanys } = useContext(DataContext);

  ReactGA.pageview("/eventobootcamp");

  const dataUsers = useMemo(() => {
    const infoCompany = info.filter(({ Empresa }) => Empresa === company);
    const infoCompanyObj = {
      name: company,
      invitados: infoCompany.length,
    };
    return infoCompanyObj;
  }, [company, info]);

  const [country] = companys.filter(({ Empresa }) => Empresa === company);

  return (
    <>
      <div id="App">
        <header>
          <img src={Banner} alt="banner-adobe" />
        </header>
        <main>
          <p className="text-thankyou">
            ¡Gracias por aceptar la invitación a nuestro Bootcamp! Por favor
            completa la siguiente información para tu participación.
          </p>
          <div className="box-form-landing">
            <div className="form-landing">
              {<Form companys={companys} country={{ País: "Colombia" }} />}
              <h2 className="acrobat-resolve">¡Acrobat lo resuelve!</h2>
            </div>
          </div>
        </main>
        <footer>
          <div className="icons">
            <img src={AdobeLg} alt="Adobe" width={130} />
            <div className="social-networks">
              <a
                href="https://www.facebook.com/adobelatinoamerica"
                target="_blank"
              >
                <img src={Face} alt="Facebook" width={27} height={27} />
              </a>

              <a href="https://www.instagram.com/adobe_lat/" target="_blank">
                <img src={Insta} alt="Instagram" width={27} height={27} />
              </a>

              <a href="https://www.linkedin.com/company/adobe/" target="_blank">
                <img src={Ldin} alt="Linkedin" width={27} height={27} />
              </a>

              <a
                href="https://www.youtube.com/c/adobelatinoamericaoficial"
                target="_blank"
              >
                <img src={Youtube} alt="Youtube" width={27} height={27} />
              </a>

              <a href="https://twitter.com/AdobeLat" target="_blank">
                <img src={Twit} alt="twitter" width={27} height={27} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingForm;
