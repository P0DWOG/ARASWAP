import React, { ReactElement } from "react"

import PoolOverview from "../components/PoolOverview"
import { STABLECOIN_POOL_NAME } from "../constants"
import TopMenu from "../components/TopMenu"
import styles from "./Pools.module.scss"
import usePoolData from "../hooks/usePoolData"

function Pools(): ReactElement | null {
  //const [btcPoolData, btcUserShareData] = usePoolData(BTC_POOL_NAME)
  const [usdPoolData, usdUserShareData] = usePoolData(STABLECOIN_POOL_NAME)
  //const [veth2PoolData, veth2UserShareData] = usePoolData(VETH2_POOL_NAME)
  //const [alethPoolData, alethUserShareData] = usePoolData(ALETH_POOL_NAME)

  return (
    <div className={styles.poolsPage}>
      <TopMenu activeTab="pools" />
      <div className={styles.content}>
        <PoolOverview
          poolData={usdPoolData}
          poolRoute={`/pools/usd`}
          userShareData={usdUserShareData}
        />
      </div>
    </div>
  )
}

export default Pools
