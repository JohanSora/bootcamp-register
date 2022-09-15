import React, { useContext } from "react";
import { useState } from "react";
import { Radio, Modal } from "@mantine/core";
import AdobeLg from "../assets/logo Adobe.png";
import axios from "axios";
import { DataContext } from "../DataContext";
import AddtoCalendar from "./AddtoCalendar";
import { useEffect } from "react";

const Form = ({ company, companys, country }) => {
  const { info, setInfo } = useContext(DataContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOcuppation] = useState("");
  const [visit, setVisit] = useState("");
  const [Nacionality, setNacionality] = useState("");
  const [dateBorn, setDateBorn] = useState("");
  const [address, setAdress] = useState("");
  const [passport, setPassport] = useState("");
  const [datearrival, setDatearrival] = useState("");
  const [timearrival, setTimearrival] = useState("");
  const [dateexit, setDateexit] = useState("");
  const [timeexit, setTimeexit] = useState("");

  const [modal, setModal] = useState(false);

  const companyobj = companys.map(({ Dominio }) => {
    return Dominio.split(".")[0];
  });

  const city = () => {
    if (country.País === "Colombia") {
      return "Bogotá";
    }
    if (country.País === "México") {
      return "Ciudad de México";
    }
    if (country.País === "Chile") {
      return "Santiago de Chile";
    }
  };

  const handleForm = () => {
    const formdata = new FormData();

    formdata.append("País", String(country.País));
    formdata.append("Empresa", company);
    formdata.append("Nombre-Completo", name);
    formdata.append("Cargo", occupation);
    formdata.append("Email", email);
    formdata.append("Nacionalidad", Nacionality);
    formdata.append("Visita-fuera-de-la-ciudad?", visit);
    formdata.append("Fecha-de-nacimiento", dateBorn);
    formdata.append("Dirección", address);
    formdata.append("#pasaporte", passport);
    formdata.append("día-de-llegada", datearrival);
    formdata.append("hora-de-llegada", timearrival);
    formdata.append("dia-de-salida", dateexit);
    formdata.append("hora-de-salida", timeexit);

    axios
      .post("https://hooks.zapier.com/hooks/catch/666990/be1t6ge/", formdata)
      .then((res) => {
        res;
      });

    setModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (visit === "") {
      alert("¿Nos visitas fuera de la ciudad de bogotá?");
      return;
    }
    return handleForm();
  };

  console.log(info);

  return (
    <>
      <Modal
        opened={modal}
        onClose={() => {
          const objregister = {
            País: country.País,
            Empresa: company,
            "Nombre-Completo": name,
            Cargo: occupation,
            Email: email,
            Nacionalidad: Nacionality,
            "Visita-fuera-de-la-ciudad?": visit,
            "Fecha-de-nacimiento": dateBorn,
            Dirección: address,
            "#pasaporte": passport,
            "día-de-llegada": datearrival,
            "hora-de-llegada": timearrival,
            "dia-de-salida": dateexit,
            "hora-de-salida": timeexit,
          };

          setInfo([...info, objregister]);

          setName("");
          setEmail("");
          setOcuppation("");
          setVisit("");
          setNacionality("");
          setDateBorn("");
          setAdress("");
          setPassport("");
          setDatearrival("");
          setTimearrival("");
          setDateexit("");
          setTimeexit("");
          setModal(false);
        }}
      >
        <div className="info-modal">
          <img src={AdobeLg} alt="adobelogo" width={166} />
          <p>Muchas gracias, recibimos los datos del invitado con Exito.</p>
          <AddtoCalendar country={country} />
        </div>
      </Modal>
      <form onSubmit={handleSubmit} autoComplete="on">
        <div className="form-and-extra-info">
          <div className="container-form-inputs">
            <div className="form-input">
              <label htmlFor="Nombre completo">Nombre Completo:</label>
              <input
                type="text"
                autoComplete="on"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label htmlFor="cargo">Cargo:</label>
              <input
                type="text"
                autoComplete="on"
                value={occupation}
                required
                onChange={(e) => setOcuppation(e.target.value)}
              />
            </div>

            <div className="form-input">
              <label htmlFor="Email">Correo Electrónico:</label>
              <input
                type="email"
                autoComplete="on"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                onBlur={(e) => {
                  const confirmation = e.target.value
                    .split("@")[1]
                    .split(".")[0];

                  const repeatEmail = info.map(({ Email }) => Email);

                  console.log(repeatEmail);
                  if (repeatEmail.includes(e.target.value)) {
                    return (
                      alert("Lo sentimos! Este email ya está registrado."),
                      setEmail("")
                    );
                  }

                  if (!companyobj.includes(confirmation)) {
                    alert(
                      "Lo lamento, no estás dentro de nuestra base de datos de empresas invitadas."
                    ),
                      setEmail(""),
                      setName(""),
                      setOcuppation("");
                  }
                }}
              />
            </div>
          </div>
        </div>

        <div className="terms-and-conditions">
          <div className="adobe-terms">
            <div className="button-and-checkbox">
              <div className="checkbox">
                <Radio.Group
                  offset="sm"
                  size="md"
                  withAsterisk
                  orientation="vertical"
                  value={visit}
                  label={
                    company === "ADOBE"
                      ? "¿Nos visita fuera de Bogotá, Ciudad de México o Santiago de Chile?"
                      : `Nos visita fuera de ${city()}?`
                  }
                  onChange={setVisit}
                >
                  <Radio value="Yes" label="Sí." color="red" />
                  <Radio value="No" color="red" label="No." />
                </Radio.Group>
              </div>

              {visit === "Yes" && (
                <div className="form-and-extra-info">
                  <h2>
                    Por favor completa la información requerida para el
                    alojamiento de 2 noches en el hotel
                  </h2>
                  <div className="container-form-inputs">
                    <div className="form-input">
                      <label htmlFor="nacionalidad">Nacionalidad:</label>
                      <input
                        type="text"
                        autoComplete="on"
                        value={Nacionality}
                        required
                        onChange={(e) => setNacionality(e.target.value)}
                      />
                    </div>
                    <div className="form-input">
                      <label htmlFor="fecha de nacimiento">
                        Fecha de Nacimiento:
                      </label>
                      <input
                        type="date"
                        autoComplete="on"
                        required
                        onChange={(e) => setDateBorn(e.target.value)}
                      />
                    </div>
                    <div className="form-input">
                      <label htmlFor="empresa">Dirección:</label>
                      <input
                        type="text"
                        autoComplete="on"
                        value={address}
                        required
                        onChange={(e) => setAdress(e.target.value)}
                      />
                    </div>
                    <div className="form-input">
                      <label htmlFor="pasaporte">Número de pasaporte:</label>
                      <input
                        type="text"
                        autoComplete="on"
                        value={passport}
                        required
                        onChange={(e) => setPassport(e.target.value)}
                      />
                    </div>
                    <div className="form-input">
                      <label htmlFor="empresa">Día de llegada:</label>
                      <input
                        type="date"
                        autoComplete="on"
                        required
                        onChange={(e) => setDatearrival(e.target.value)}
                      />
                    </div>
                    <div className="form-input">
                      <label htmlFor="empresa">Hora de llegada:</label>
                      <input
                        type="time"
                        autoComplete="on"
                        value={timearrival}
                        required
                        onChange={(e) => setTimearrival(e.target.value)}
                      />
                    </div>
                    <div className="form-input">
                      <label htmlFor="empresa">Día de salida:</label>
                      <input
                        type="date"
                        autoComplete="on"
                        value={dateexit}
                        required
                        onChange={(e) => setDateexit(e.target.value)}
                      />
                    </div>
                    <div className="form-input">
                      <label htmlFor="empresa">Hora de salida:</label>
                      <input
                        type="time"
                        autoComplete="on"
                        value={timeexit}
                        required
                        onChange={(e) => setTimeexit(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="button-submit">
                <button type="submit">Enviar</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
