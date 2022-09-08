import React from "react";

const AddtoCalendar = ({ country }) => {
  const addtocalendarCountry = {
    apple:
      country === "Colombia"
        ? "https://www.addevent.com/event/WU14903544+apple"
        : country === "Mexico"
        ? "https://www.addevent.com/event/em14903704+apple"
        : "https://www.addevent.com/event/Xa14903729+apple",
    google:
      country === "Colombia"
        ? "https://www.addevent.com/event/WU14903544+google"
        : country === "Mexico"
        ? "https://www.addevent.com/event/em14903704+google"
        : "https://www.addevent.com/event/Xa14903729+google",
    office365:
      country === "Colombia"
        ? "https://www.addevent.com/event/WU14903544+office365"
        : country === "Mexico"
        ? "https://www.addevent.com/event/em14903704+office365"
        : "https://www.addevent.com/event/Xa14903729+office365",
    outlook:
      country === "Colombia"
        ? "https://www.addevent.com/event/WU14903544+outlook"
        : country === "Mexico"
        ? "https://www.addevent.com/event/em14903704+outlook"
        : "https://www.addevent.com/event/Xa14903729+outlook",
    outlookcom:
      country === "Colombia"
        ? "https://www.addevent.com/event/WU14903544+outlookcom"
        : country === "Mexico"
        ? "https://www.addevent.com/event/em14903704+outlookcom"
        : "https://www.addevent.com/event/Xa14903729+outlookcom",
    yahoo:
      country === "Colombia"
        ? "https://www.addevent.com/event/WU14903544+yahoo"
        : country === "Mexico"
        ? "https://www.addevent.com/event/em14903704+yahoo"
        : "https://www.addevent.com/event/Xa14903729+yahoo",
  };

  return (
    <div>
      <p className="title-add-to-calendar">
        Puedes añadir este evento a tu calendario favorito
      </p>
      <p className="container-imgs-addtocalendar">
        <a href={addtocalendarCountry.apple} title="Apple" target="_blank">
          <img
            src="https://cdn.addevent.com/libs/imgs/icon-emd-share-apple-t1.png"
            alt="Apple"
          />
        </a>
        <a href={addtocalendarCountry.google} title="Google" target="_blank">
          <img
            src="https://cdn.addevent.com/libs/imgs/icon-emd-share-google-t1.png"
            alt="Google"
          />
        </a>
        <a
          href={addtocalendarCountry.office365}
          title="Office 365"
          target="_blank"
        >
          <img
            src="https://cdn.addevent.com/libs/imgs/icon-emd-share-office365-t1.png"
            alt="Office 365"
          />
        </a>
        <a href={addtocalendarCountry.outlook} title="Outlook" target="_blank">
          <img
            src="https://cdn.addevent.com/libs/imgs/icon-emd-share-outlook-t1.png"
            alt="Outlook"
          />
        </a>
        <a
          href={addtocalendarCountry.outlookcom}
          title="Outlook.com"
          target="_blank"
        >
          <img
            src="https://cdn.addevent.com/libs/imgs/icon-emd-share-outlookcom-t1.png"
            alt="Outlook.com"
          />
        </a>
        <a href={addtocalendarCountry.yahoo} title="Yahoo" target="_blank">
          <img
            src="https://cdn.addevent.com/libs/imgs/icon-emd-share-yahoo-t1.png"
            alt="Yahoo"
          />
        </a>
      </p>
    </div>
  );
};

export default AddtoCalendar;
