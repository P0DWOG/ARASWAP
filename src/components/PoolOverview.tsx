import "./PoolOverview.scss"

import { PoolDataType, UserShareType } from "../hooks/usePoolData"
import React, { ReactElement } from "react"
import { formatBNToPercentString, formatBNToString } from "../utils"

import Button from "./Button"
import { Link } from "react-router-dom"
import { TOKENS_MAP } from "../constants"
import { Zero } from "@ethersproject/constants"
import { commify } from "@ethersproject/units"
import { useTranslation } from "react-i18next"

interface Props {
  poolRoute: string
  poolData: PoolDataType
  userShareData: UserShareType | null
}

function PoolOverview({
  poolData,
  poolRoute,
  userShareData,
}: Props): ReactElement | null {
  const { t } = useTranslation()
  const formattedData = {
    name: poolData.name,
    reserve: commify(formatBNToString(poolData.reserve, 18, 2)),
    tokens: poolData.tokens.map((coin) => {
      const token = TOKENS_MAP[coin.symbol]
      return {
        symbol: token.symbol,
        name: token.name,
        icon: token.icon,
        value: formatBNToString(coin.value, token.decimals, 4),
      }
    }),
  }

  const hasShare = !!userShareData?.usdBalance.gt("0")

  return (
    <div className="poolOverview">
      <div className="left">
        <h4 className="title">{formattedData.name}</h4>
        {hasShare && (
          <div className="balance">
            <span>{t("balance")}: </span>
            <span>{`$${formattedData.userBalanceUSD}`}</span>
          </div>
        )}
        <div className="tokens">
          <span style={{ marginRight: "8px" }}>[</span>
          {formattedData.tokens.map(({ symbol, icon }) => (
            <div className="token" key={symbol}>
              <img alt="icon" src={icon} />
              <span>{symbol}</span>
            </div>
          ))}
          <span style={{ marginLeft: "-8px" }}>]</span>
        </div>
      </div>

          <div className="volume">
            <span className="label">{t("currencyReserves")}</span>
            <span>{`$${formattedData.reserve}`}</span>
          </div>
        </div>
        <div className="buttons">
          <Link to={`${poolRoute}/withdraw`}>
            <Button kind="secondary" size="large" disabled={!hasShare}>
              {t("withdraw")}
            </Button>
          </Link>
          <Link to={`${poolRoute}/deposit`}>
            <Button kind="primary" size="large">
              {t("deposit")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PoolOverview
