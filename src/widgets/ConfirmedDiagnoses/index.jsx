// components
import Widget from "../../components/Widget";
import WidgetHeader from "../../components/Widget/WidgetHeader";
import WidgetNav from "../../components/Widget/WidgetNav";
import WidgetBody from "../../components/Widget/WidgetBody";
import ConfirmedDiagnosesList from "../../widgets/ConfirmedDiagnoses/List";
import PeriodNav from "../../components/PeriodNav";

// utils
import PropTypes from "prop-types";

// hooks
import usePeriodNav from "../../hooks/usePeriodNav";
import useArrayNav from "../../hooks/useArrayNav";

// data placeholder
import { confirmed } from "../../db/confirmed";
import { useTranslation } from "react-i18next";

const ConfirmedDiagnoses = ({ nav }) => {
  const { period, periods, setPeriod } = usePeriodNav();
  const { index, navigate } = useArrayNav(periods);
  const { t } = useTranslation();

  return (
    <Widget name="ConfirmedDiagnosesTabs">
      {nav === "tabs" ? (
        <WidgetHeader
          title={`${t("Confirmed Diagnoses")}`}
          style={{ paddingBottom: 16 }}
        />
      ) : (
        <WidgetNav
          title={`${t("Confirmed Diagnoses")}`}
          handler={navigate}
          style={{ paddingBottom: 8 }}
        />
      )}
      <WidgetBody style={{ paddingBottom: 26 }}>
        {nav === "tabs" && <PeriodNav current={period} handler={setPeriod} />}
        <ConfirmedDiagnosesList
          short={nav === "tabs"}
          period={nav === "tabs" ? period : periods[index]}
          data={confirmed}
        />
      </WidgetBody>
    </Widget>
  );
};

ConfirmedDiagnoses.propTypes = {
  nav: PropTypes.oneOf(["arrows", "tabs"]).isRequired,
};

export default ConfirmedDiagnoses;
