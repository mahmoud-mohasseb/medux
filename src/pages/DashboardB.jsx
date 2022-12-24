// components
import Page from "../layout/Page";
import PatientAppointmentsHistory from "../widgets/PatientAppointmentsHistory";
import PatientOverallAppointments from "../widgets/PatientOverallAppointments";
import RadarAreaChart from "../widgets/RadarAreaChart";
import DiagnosesDonut from "../widgets/DiagnosesDonut";
import { useTranslation } from "react-i18next";

const DashboardB = () => {
  const { t } = useTranslation();
  return (
    <Page title={`${t("Basic Patient Dashboard")}`}>
      <div key="patient-app-history">
        <PatientAppointmentsHistory />
      </div>
      <div key="patient-overall-appointments">
        <PatientOverallAppointments />
      </div>
      <div key="radar">
        <RadarAreaChart />
      </div>
      <div key="diagnoses-donut">
        <DiagnosesDonut variant="basic" />
      </div>
    </Page>
  );
};

export default DashboardB;
