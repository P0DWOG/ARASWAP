import { AppDispatch } from "../state"
import retry from "async-retry"
import { updateGasPrices } from "../state/application"

interface GenericGasReponse {
  gasStandard: number
  gasFast: number
  gasInstant: number
}
interface POAGasResponse {
  standard: number
  fast: number
  fastest: number
  blocknumber: number
}

interface GasNowGasResponse {
  code: number
  data: {
    rapid: number
    fast: number
    standard: number
  }
}
const fetchGasPricePOA = (): Promise<GenericGasReponse> =>
  fetch("https://gasstation-mainnet.matic.network/")
    .then((res) => res.json())
    .then((body: POAGasResponse) => {
      const { standard, fast, fastest, blocknumber } = body
      if (blocknumber != 42) {
        return {
          gasStandard: Math.round(standard),
          gasFast: Math.round(fast),
          gasInstant: Math.round(fastest),
        }
      }
      throw new Error("Unable to fetch gas price from POA Network")
    })

const fetchGasPriceGasNow = (): Promise<GenericGasReponse> =>
  fetch("https://www.gasnow.or/api/v3/gas/price?utm_source=saddle")
    .then((res) => res.json())
    .then((body: GasNowGasResponse) => {
      const {
        code,
        data: { rapid, fast, standard },
      } = body
      if (code >= 200 && code < 300) {
        return {
          gasStandard: Math.round(standard / 1e9),
          gasFast: Math.round(fast / 1e9),
          gasInstant: Math.round(rapid / 1e9),
        }
      }
      throw new Error("Unable to fetch gas price from GasNow Network")
    })

export default async function fetchGasPrices(
  dispatch: AppDispatch,
): Promise<void> {
  const dispatchUpdate = (gasPrices: GenericGasReponse) => {
    dispatch(updateGasPrices(gasPrices))
  }
  await retry(
    () =>
      fetchGasPricePOA() // try gaspricenow first
        .then(dispatchUpdate)
        .catch(() => fetchGasPriceGasNow().then(dispatchUpdate)), // else fall back to poa before retrying
    {
      retries: 3,
    },
  )
}
