import React, { useContext, useEffect, useMemo, useRef } from "react";
import { useState } from "react";
import Banner from "./assets/banner.png";
import { Radio, Modal } from "@mantine/core";
import Face from "./assets/face-icon.png";
import Insta from "./assets/insta-icon.png";
import Ldin from "./assets/linkedin-icon.png";
import Youtube from "./assets/you-icon.png";
import Twit from "./assets/icon-twitter.png";
import AdobeLg from "./assets/logo Adobe.png";
import axios from "axios";
import Form from "./components/form";
import { DataContext } from "./DataContext";

const LandingForm = () => {
  let [registerCountry, setRegisterCountry] = useState();
  const [company, setCompany] = useState("");
  const { info } = useContext(DataContext);

  useEffect(() => {
    const utms = window.location.pathname.split("-");
    setRegisterCountry(utms[1].slice(8));
  }, []);

  const dataUsers = useMemo(() => {
    const infoCompany = info.filter(({ Empresa }) => Empresa === company);
    const infoCompanyObj = {
      name: company,
      invitados: infoCompany.length,
    };
    return infoCompanyObj;
  }, [company, info]);

  const formApperConditional = () => {
    if (company !== "") {
      if (dataUsers.invitados >= 2) {
        return (
          <div className="remaining-guests">
            <p>Ya hay dos invitados registrados</p>
          </div>
        );
      }
      if (dataUsers.invitados >= 0) {
        return (
          <>
            <div className="remaining-guests">
              <p>
                ¡Hola {company}, puedes registrar {2 - dataUsers.invitados}{" "}
                {dataUsers.invitados === 1 ? "invitado" : "invitados"}!
              </p>
            </div>
            <Form
              country={registerCountry}
              company={company}
              setCompany={setCompany}
            />
          </>
        );
      }
    }
  };
  console.log(dataUsers);
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
              <form action="submit" className="companyform">
                <div className="form-and-extra-info">
                  <div className="container-form-inputs">
                    <div className="form-input">
                      <label htmlFor="empresa">Empresa:</label>
                      <select
                        name="company"
                        required
                        onChange={(e) => setCompany(e.target.value)}
                      >
                        <option value="">Selecciona tu empresa</option>
                        <option value="AMD">AMD</option>
                        <option value="Intel">Intel</option>
                        <option value="Nvidia">Nvidia</option>
                        <option value="Lenovo">Lenovo</option>
                        <option value="Dell">Dell</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
              {formApperConditional()}
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
