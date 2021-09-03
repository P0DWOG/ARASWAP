import "./Risk.scss"

import React, { ReactElement } from "react"

import TopMenu from "../components/TopMenu"
import { useTranslation } from "react-i18next"

function Risk(): ReactElement {
  const { t } = useTranslation()

  return (
    <div className="riskpage">
      <TopMenu activeTab={t("risk")} />
      <div className="content">
        <p>
          {t("riskIntro")}{" "}
          <a href="https://github.com/MuneFinance/MuneFinance">
            {t("riskIntro2")}
          </a>{" "}
          {t("riskIntro3")}
        </p>
        <h3>{t("audits")}</h3>
        <p>
          {t("riskAudits")}{" "}
          <a href="https://docs.mune.finance">{t("riskAudits2")}</a>
          {"."}
          <br />
          <br />
          {t("riskAudits3")}
          <br />
          <br />
          {t("riskAudits4")}
        </p>
        <h3>{t("adminKeys")}</h3>
        <p>{t("riskAdminKeys")}</p>
        <h3>{t("lossOfPeg")}</h3>
        <p>
          {t("riskLossOfPeg")}
          <a href="https://www.thegivingblock.com">
            {t("The Giving Block")}
          </a>{" "}
          {t("riskLossOfPeg2")}
        </p>
      </div>
    </div>
  )
}

export default Risk
