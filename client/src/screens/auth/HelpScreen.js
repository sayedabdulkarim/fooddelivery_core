import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import OrderHelp from "../../components/auth/Help/OrderHelp";
import Faq from "../../components/auth/Help/Faq";
import Generalissue from "../../components/auth/Help/GeneralIssue";
import Legal from "../../components/auth/Help/Legal";
import Super from "../../components/auth/Help/Super";

const HelpScreen = () => {
  const [activeSection, setActiveSection] = useState("orderHelp");

  let showAccordion;
  switch (activeSection) {
    case "orderHelp":
      showAccordion = <OrderHelp />;
      break;
    case "generalissues":
      showAccordion = <Generalissue />;
      break;
    case "legalterms":
      showAccordion = <Legal />;
      break;
    case "faq":
      showAccordion = <Faq />;
      break;
    case "super":
      showAccordion = <Super />;
      break;
    default:
      showAccordion = <OrderHelp />;
  }

  return (
    <div className="help_page_container">
      <div className={"Helptop"}>
        <div className={"Helptoptext"}>
          <div>Help & Support</div>
          <p>Let's take a step ahead and help you better.</p>
        </div>

        <div className={"Accordianmenu"}>
          <div className={"Accordian"}>
            <div className={"AccordianBtn"}>
              <ul>
                <li onClick={() => setActiveSection("orderHelp")}>
                  <NavLink to="/helppage" className={"Nav_link"}>
                    Help with Orders
                  </NavLink>
                </li>
                <li onClick={() => setActiveSection("generalissues")}>
                  <NavLink to="/helppage">General Issues</NavLink>
                </li>
                <li onClick={() => setActiveSection("legalterms")}>
                  <NavLink to="/helppage">Legal, Term & Conditions</NavLink>
                </li>
                <li onClick={() => setActiveSection("faq")}>
                  <NavLink to="/helppage">FAQs</NavLink>
                </li>
                <li onClick={() => setActiveSection("super")}>
                  <NavLink to="helppage">Our Super FAQs</NavLink>
                </li>
              </ul>
            </div>

            <div className={"Accordianpage"}>{showAccordion}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpScreen;
