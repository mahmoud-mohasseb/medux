// styled components
import { LinksList, List, MainItem } from "../style";
import { colors } from "../../../styles/vars";

// components
import Accordion from "react-bootstrap/Accordion";
import { NavLink } from "react-router-dom";

// hooks
import { useSidebarContext } from "../../../contexts/sidebarContext";

// menu links
// import { menu } from "../../../constants/menu";
import { useTranslation } from "react-i18next";

const Content = () => {
  const { toggleSidebar } = useSidebarContext();
  const { t } = useTranslation();
  const activeStyle = { color: colors.blue };

  const menu = [
    {
      cat: `${t("dashboard")}`,
      icon: "blocks",
      links: [
        { name: `${t("Dashboard A")}`, link: "/dashboard_a" },
        { name: `${t("Dashboard B")}`, link: "/dashboard_b" },
        { name: `${t("Dashboard C")}`, link: "/dashboard_c" },
        { name: `${t("Dashboard D")}`, link: "/dashboard_d" },
        { name: `${t("Dashboard E")}`, link: "/dashboard_e" },
        { name: `${t("Dashboard F")}`, link: "/dashboard_f" },
        { name: `${t("Dashboard G")}`, link: "/dashboard_g" },
        { name: `${t("Dashboard H")}`, link: "/dashboard_h" },
        { name: `${t("Dashboard I")}`, link: "/dashboard_i" },
        { name: `${t("Dashboard J")}`, link: "/dashboard_j" },
        { name: `${t("Dashboard K")}`, link: "/dashboard_k" },
        { name: `${t("Page 404")}`, link: "/404" },
      ],
    },
    {
      cat: `${t("appointments")}`,
      icon: "calendar",
      links: [
        { name: `${t("Patient Appointments")}`, link: "/patient_appointments" },
        { name: `${t("Doctor Appointments")}`, link: "/doctor_appointments" },
      ],
    },
    {
      cat: `${t("patients")}`,
      icon: "users",
      links: [
        { name: `${t("Patients")}`, link: "/patients" },
        { name: `${t("Tests")}`, link: "/tests" },
      ],
    },
    {
      cat: `${t("doctors")}`,
      icon: "stethoscope",
      links: [
        { name: `${t("Doctors")}`, link: "/doctors" },
        { name: `${t("Staff")}`, link: "/staff" },
      ],
    },
    {
      cat: `${t("messages")}`,
      icon: "comment",
      links: [
        { name: `${t("Doctor Messenger")}`, link: "/doctor_messenger" },
        { name: `${t("Patient Messenger")}`, link: "/patient_messenger" },
      ],
    },
    {
      cat: `${t("reviews")}`,
      icon: "star",
      links: [
        { name: `${t("Doctor Reviews")}`, link: "/doctor_reviews" },
        { name: `${t("Patient Reviews")}`, link: "/patient_reviews" },
      ],
    },
    {
      icon: "wallet",
      name: `${t("Finances")}`,
      link: "/finances",
    },
    {
      icon: "settings",
      name: `${t("Settings")}`,
      link: "/settings",
    },
  ];

  return (
    <List as={Accordion}>
      {menu.map((item, index) => {
        // console.log(item);
        // console.log(item.cat);
        if (item.cat) {
          return (
            <Accordion.Item eventKey={item.cat} key={item.cat}>
              <MainItem as={Accordion.Header}>
                <i className={`icon icon-${item.icon}`}></i> {item.cat}
              </MainItem>
              <Accordion.Body>
                <LinksList>
                  {item.links.map((link) => {
                    return (
                      <li key={link.link}>
                        <NavLink
                          to={link.link}
                          onClick={() => toggleSidebar()}
                          style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                          }
                        >
                          {link.name}
                        </NavLink>
                      </li>
                    );
                  })}
                </LinksList>
              </Accordion.Body>
            </Accordion.Item>
          );
        } else if (item.link) {
          return (
            <MainItem
              as={NavLink}
              to={item.link}
              onClick={() => toggleSidebar()}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              key={item.link}
              className={index === menu.length - 1 ? "pin-down" : ""}
            >
              <i className={`icon icon-${item.icon}`}></i> {item.name}
            </MainItem>
          );
        } else return null;
      })}
    </List>
  );
};

export default Content;
