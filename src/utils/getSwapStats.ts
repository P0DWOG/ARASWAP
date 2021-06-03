import { AppDispatch } from "../state"
import retry from "async-retry"

const swapStatsURI = "https://ipfs.saddle.exchange/swap-stats.json"

interface swapStatsReponse {
  [swapAddress: string]: {
    oneDayVolume: string
    APY: string
    TVL: string
  }
}

export default function fetchSwapStats(dispatch: AppDispatch): void {
  void retry(
    () =>
      fetch(`${swapStatsURI}`)
        .then((res) => res.json())
        .then(async (body: swapStatsReponse) => {
          const result = 5 // TODO use the response to update poolData
          //   dispatch(updateTokensPricesUSD(result))
        }),
    { retries: 3 },
  )
}
