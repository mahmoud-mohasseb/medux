import React from "react";
import Page from "../layout/Page";
import NextPatient from "../widgets/NextPatient";
import LaboratoryTests from "../widgets/LaboratoryTests";
import UpcomingAppointments from "../widgets/UpcomingAppointments";
import DoctorOverallAppointment from "../widgets/DoctorOverallAppointment";
import PatientsPace from "../widgets/PatientsPace";
import RecentQuestions from "../widgets/RecentQuestions";
import ConfirmedDiagnoses from "../widgets/ConfirmedDiagnoses";

import { useTranslation } from "react-i18next";

const DashboardA = () => {
  const { t } = useTranslation();
  return (
    <Page title={`${t("Basic Doctor Dashboard")}`}>
      <div key="next-patient">
        <NextPatient />
      </div>
      <div key="laboratory-tests">
        <LaboratoryTests />
      </div>
      <div key="doctor-upcoming-appointments">
        <UpcomingAppointments />
      </div>
      <div key="doctor-overall-appointment">
        <DoctorOverallAppointment />
      </div>
      <div key="patients-pace">
        <PatientsPace />
      </div>
      <div key="recent-questions">
        <RecentQuestions />
      </div>
      <div key="confirmed-diagnoses">
        <ConfirmedDiagnoses nav="tabs" />
      </div>
    </Page>
  );
};

export default DashboardA;
