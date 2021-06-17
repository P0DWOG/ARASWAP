import { AppDispatch } from "../state"
import retry from "async-retry"
import { updateSwapStats } from "../state/application"

const swapStatsURI = "https://ipfs.saddle.exchange/swap-stats.json"

interface SwapStatsReponse {
  [swapAddress: string]: {
    oneDayVolume: string
    APY: string
    TVL: string
  }
}

const fetchSwapStatsNow = (): Promise<SwapStatsReponse> =>
  fetch(`${swapStatsURI}`)
    .then((res) => res.json())
    .then((swapStatsList: SwapStatsReponse) => {
      // console.log(swapStatsList)
      return swapStatsList
    })

export default async function fetchSwapStats(
  dispatch: AppDispatch,
): Promise<void> {
  const dispatchUpdate = (swapStats: SwapStatsReponse) => {
    dispatch(updateSwapStats(swapStats))
  }
  await retry(() => fetchSwapStatsNow().then(dispatchUpdate), {
    retries: 3,
  })
}
