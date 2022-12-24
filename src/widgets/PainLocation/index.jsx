// styled components
import { PainLocationWrapper } from "./style";

// components
import Widget from "../../components/Widget";
import WidgetHeader from "../../components/Widget/WidgetHeader";
import WidgetBody from "../../components/Widget/WidgetBody";
import TabNav from "../../UI/TabNav";
import TabNavItem from "../../UI/TabNav/TabNavItem";
import { Tab } from "react-bootstrap";
import Body from "./Body";
import { useTranslation } from "react-i18next";

// utils
import { useState } from "react";

const PainLocation = () => {
  const [currentGender, setCurrentGender] = useState("male");
  const { t } = useTranslation();
  return (
    <Widget name="PainLocation">
      <WidgetHeader title={`${t("Location of pain")}`} flex={"column"}>
        <TabNav>
          <TabNavItem
            className={currentGender === "male" ? "active" : ""}
            eventKey="male"
            title={`${t("Male")}`}
            handler={() => setCurrentGender("male")}
          />
          <TabNavItem
            className={currentGender === "female" ? "active" : ""}
            eventKey="female"
            title={`${t("Female")}`}
            handler={() => setCurrentGender("female")}
          />
        </TabNav>
      </WidgetHeader>
      <WidgetBody>
        <PainLocationWrapper>
          <Tab.Container activeKey={currentGender} transition={true}>
            <Tab.Content>
              <Tab.Pane eventKey="male">
                <Body gender="male" />
              </Tab.Pane>
              <Tab.Pane eventKey="female">
                <Body gender="female" />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </PainLocationWrapper>
      </WidgetBody>
    </Widget>
  );
};

export default PainLocation;
