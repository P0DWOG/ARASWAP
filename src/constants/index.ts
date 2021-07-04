import { injected, walletconnect, walletlink } from "../connectors"

import { AbstractConnector } from "@web3-react/abstract-connector"
import { BigNumber } from "@ethersproject/bignumber"
import alethLogo from "../assets/icons/aleth.svg"
import coinbasewalletIcon from "../assets/icons/coinbasewallet.svg"
import daiLogo from "../assets/icons/dai.svg"
import metamaskIcon from "../assets/icons/metamask.svg"
import renbtcLogo from "../assets/icons/renbtc.svg"
import saddleLogo from "../assets/icons/logo.png"
import sbtcLogo from "../assets/icons/sbtc.svg"
import sethLogo from "../assets/icons/seth.svg"
import tbtcLogo from "../assets/icons/tbtc.svg"
import usdcLogo from "../assets/icons/usdc.svg"
import usdtLogo from "../assets/icons/usdt.svg"
import veth2Logo from "../assets/icons/veth2.svg"
import walletconnectIcon from "../assets/icons/walletconnect.svg"
import wbtcLogo from "../assets/icons/wbtc.svg"
import wethLogo from "../assets/icons/weth.svg"

export const NetworkContextName = "NETWORK"
export const BTC_POOL_NAME = "BTC Portal "
export const STABLECOIN_POOL_NAME = "USD Portal "
export const VETH2_POOL_NAME = "vETH2 Portal "
export const ALETH_POOL_NAME = "ETH Portal "
export type PoolName =
  | typeof BTC_POOL_NAME
  | typeof STABLECOIN_POOL_NAME
  | typeof VETH2_POOL_NAME
  | typeof ALETH_POOL_NAME

export enum ChainId {
  MAINNET = 1,
  // ROPSTEN = 3,
  // RINKEBY = 4,
  // GÖRLI = 5,
  // KOVAN = 42,
  HARDHAT = 31337,
}

export class Token {
  readonly addresses: { [chainId in ChainId]: string }
  readonly decimals: number
  readonly symbol: string
  readonly name: string
  readonly icon: string
  readonly geckoId: string
  readonly isSynthetic: boolean

  constructor(
    addresses: { [chainId in ChainId]: string },
    decimals: number,
    symbol: string,
    geckoId: string,
    name: string,
    icon: string,
    isSynthetic = false,
  ) {
    this.addresses = addresses
    this.decimals = decimals
    this.symbol = symbol
    this.geckoId = geckoId
    this.name = name
    this.icon = icon
    this.isSynthetic = isSynthetic
  }
}

export const BLOCK_TIME = 13000 // ms

export const BRIDGE_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0xf5059a5D33d5853360D16C683c16e67980206f36", // TODO replace once mainnet deploy goes out
  [ChainId.HARDHAT]: "0xf5059a5D33d5853360D16C683c16e67980206f36",
}

export const STABLECOIN_SWAP_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0x3911F80530595fBd01Ab1516Ab61255d75AEb066",
  [ChainId.HARDHAT]: "0x76E3b4913Cd0887F128f1a7Eb8ea6ada9b721375",
}

export const BTC_SWAP_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0x4f6A43Ad7cba042606dECaCA730d4CE0A57ac62e",
  [ChainId.HARDHAT]: "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
}

export const VETH2_SWAP_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0xdec2157831D6ABC3Ec328291119cc91B337272b",
  [ChainId.HARDHAT]: "0xE8f7D556989401f8E940B5034C171ffFcbdF1c95",
}

export const ALETH_SWAP_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0xa6018520EAACC06C30fF2e1B3ee2c7c22e64196a",
  [ChainId.HARDHAT]: "0x0516c9365cA83EB1b507ea3206BF1249B4B2de43",
}

export const MERKLETREE_DATA: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "mainnetTestAccounts.json",
  [ChainId.HARDHAT]: "hardhat.json",
}

export const STABLECOIN_SWAP_TOKEN_CONTRACT_ADDRESSES: {
  [chainId in ChainId]: string
} = {
  [ChainId.MAINNET]: "0x76204f8CFE8B95191A3d1CfA59E267EA65e06FAC",
  [ChainId.HARDHAT]: "0x0A162db55B8824A87f5a39B9Fa14e04C3BDE4aF9",
}

export const BTC_SWAP_TOKEN_CONTRACT_ADDRESSES: {
  [chainId in ChainId]: string
} = {
  [ChainId.MAINNET]: "0xC28DF698475dEC994BE00C9C9D8658A548e6304F",
  [ChainId.HARDHAT]: "0x8aCd85898458400f7Db866d53FCFF6f0D49741FF",
}

export const VETH2_SWAP_TOKEN_CONTRACT_ADDRESSES: {
  [chainId in ChainId]: string
} = {
  [ChainId.MAINNET]: "0xe37E2a01feA778BC1717d72Bd9f018B6A6B241D",
  [ChainId.HARDHAT]: "0xa4a6243ba529867f53Cc03F662bC3FB65b483D87",
}

export const ALETH_SWAP_TOKEN_CONTRACT_ADDRESSES: {
  [chainId in ChainId]: string
} = {
  [ChainId.MAINNET]: "0xc9da65931ABf0Ed1b74Ce5ad8c041C4220940368",
  [ChainId.HARDHAT]: "0x9Ad346f9F5e1f5BC76D68bbe82508Bf1E281EBf3",
}

export const BTC_SWAP_TOKEN = new Token(
  BTC_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "bARA",
  "invaderbtc",
  "Invader TBTC/WBTC/RENBTC/SBTC",
  saddleLogo,
)

export const STABLECOIN_SWAP_TOKEN = new Token(
  STABLECOIN_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "uARA",
  "invaderusd",
  "Invader DAI/USDC/USDT",
  saddleLogo,
)

export const VETH2_SWAP_TOKEN = new Token(
  VETH2_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "veARA",
  "invaderveth2",
  "Invader WETH/vETH2",
  saddleLogo,
)

export const ALETH_SWAP_TOKEN = new Token(
  ALETH_SWAP_TOKEN_CONTRACT_ADDRESSES,
  18,
  "eARA",
  "invadereth",
  "Invader WETH/alETH/sETH",
  saddleLogo,
)

// Stablecoins
const DAI_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  [ChainId.HARDHAT]: "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e",
}
export const DAI = new Token(
  DAI_CONTRACT_ADDRESSES,
  18,
  "DAI",
  "dai",
  "Dai",
  daiLogo,
)

const USDC_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  [ChainId.HARDHAT]: "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82",
}
export const USDC = new Token(
  USDC_CONTRACT_ADDRESSES,
  6,
  "USDC",
  "usd-coin",
  "USDC Coin",
  usdcLogo,
)

const USDT_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0xdac17f958d2ee523a2206206994597c13d831ec7",
  [ChainId.HARDHAT]: "0x0B306BF915C4d645ff596e518fAf3F9669b97016",
}
export const USDT = new Token(
  USDT_CONTRACT_ADDRESSES,
  6,
  "USDT",
  "tether",
  "Tether",
  usdtLogo,
)

export const STABLECOIN_POOL_TOKENS = [DAI, USDC, USDT]

// Tokenized BTC
const TBTC_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0x8daebade922df735c38c80c7ebd708af50815faa",
  [ChainId.HARDHAT]: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
}
export const TBTC = new Token(
  TBTC_CONTRACT_ADDRESSES,
  18,
  "TBTC",
  "tbtc",
  "tBTC",
  tbtcLogo,
)

const WBTC_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
  [ChainId.HARDHAT]: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
}
export const WBTC = new Token(
  WBTC_CONTRACT_ADDRESSES,
  8,
  "WBTC",
  "wrapped-bitcoin",
  "WBTC",
  wbtcLogo,
)

const RENBTC_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d",
  [ChainId.HARDHAT]: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
}
export const RENBTC = new Token(
  RENBTC_CONTRACT_ADDRESSES,
  8,
  "RENBTC",
  "renbtc",
  "renBTC",
  renbtcLogo,
)

const SBTC_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6",
  [ChainId.HARDHAT]: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
}
export const SBTC = new Token(
  SBTC_CONTRACT_ADDRESSES,
  18,
  "sBTC",
  "sbtc",
  "sBTC",
  sbtcLogo,
  true,
)

export const BTC_POOL_TOKENS = [TBTC, WBTC, RENBTC, SBTC]

const WETH_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  [ChainId.HARDHAT]: "0x68B1D87F95878fE05B998F19b66F4baba5De1aed",
}
export const WETH = new Token(
  WETH_CONTRACT_ADDRESSES,
  18,
  "WETH",
  "ethereum",
  "WETH",
  wethLogo,
)

const VETH2_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0x898BAD2774EB97cF6b94605677F43b41871410B1",
  [ChainId.HARDHAT]: "0xc6e7DF5E7b4f2A278906862b61205850344D4e7d",
}
export const VETH2 = new Token(
  VETH2_CONTRACT_ADDRESSES,
  18,
  "VETH2",
  "ethereum",
  "vETH2",
  veth2Logo,
)

export const VETH2_POOL_TOKENS = [WETH]

const ALETH_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0x0100546F2cD4C9D97f798fFC9755E47865FF7Ee6",
  [ChainId.HARDHAT]: "0x7a2088a1bFc9d81c55368AE168C2C02570cB814F",
}
export const ALETH = new Token(
  ALETH_CONTRACT_ADDRESSES,
  18,
  "alETH",
  "alchemix-eth",
  "Alchemix ETH",
  alethLogo,
)

const SETH_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb",
  [ChainId.HARDHAT]: "0xc5a5C42992dECbae36851359345FE25997F5C42d",
}
export const SETH = new Token(
  SETH_CONTRACT_ADDRESSES,
  18,
  "sETH",
  "seth",
  "Synth sETH",
  sethLogo,
)

export const ALETH_POOL_TOKENS = [WETH, ALETH, SETH]

export type Pool = {
  name: string
  emoj: string
  lpToken: Token
  poolTokens: Token[]
  isSynthetic: boolean
  addresses: { [chainId in ChainId]: string }
}
export type PoolsMap = {
  [poolName: string]: Pool
}
export const POOLS_MAP: PoolsMap = {
  [BTC_POOL_NAME]: {
    name: BTC_POOL_NAME,
    emoj: "👽",
    addresses: BTC_SWAP_ADDRESSES,
    lpToken: BTC_SWAP_TOKEN,
    poolTokens: BTC_POOL_TOKENS,
    isSynthetic: true,
  },
  [STABLECOIN_POOL_NAME]: {
    name: STABLECOIN_POOL_NAME,
    emoj: "👴",
    addresses: STABLECOIN_SWAP_ADDRESSES,
    lpToken: STABLECOIN_SWAP_TOKEN,
    poolTokens: STABLECOIN_POOL_TOKENS,
    isSynthetic: false,
  },
  [VETH2_POOL_NAME]: {
    name: VETH2_POOL_NAME,
    emoj: "👻",
    addresses: VETH2_SWAP_ADDRESSES,
    lpToken: VETH2_SWAP_TOKEN,
    poolTokens: VETH2_POOL_TOKENS,
    isSynthetic: false,
  },
  [ALETH_POOL_NAME]: {
    name: ALETH_POOL_NAME,
    emoj: "🤖",
    addresses: ALETH_SWAP_ADDRESSES,
    lpToken: ALETH_SWAP_TOKEN,
    poolTokens: ALETH_POOL_TOKENS,
    isSynthetic: true,
  },
}

// maps a symbol string to a token object
export type TokensMap = {
  [symbol: string]: Token
}
export const TOKENS_MAP = Object.keys(POOLS_MAP).reduce((acc, poolName) => {
  const pool = POOLS_MAP[poolName as PoolName]
  const newAcc = { ...acc }
  pool.poolTokens.forEach((token) => {
    newAcc[token.symbol] = token
  })
  return newAcc
}, {} as TokensMap)

export type TokenToPoolsMap = {
  [tokenSymbol: string]: string[]
}
export const TOKEN_TO_POOLS_MAP = Object.keys(POOLS_MAP).reduce(
  (acc, poolName) => {
    const pool = POOLS_MAP[poolName as PoolName]
    const newAcc = { ...acc }
    pool.poolTokens.forEach((token) => {
      newAcc[token.symbol] = (newAcc[token.symbol] || []).concat(
        poolName as PoolName,
      )
    })
    return newAcc
  },
  {} as TokenToPoolsMap,
)

export const TRANSACTION_TYPES = {
  DEPOSIT: "DEPOSIT",
  WITHDRAW: "WITHDRAW",
  SWAP: "SWAP",
}

export const POOL_FEE_PRECISION = 10

export enum SWAP_TYPES {
  DIRECT = "swapDirect", // route length 2
  SYNTH_TO_SYNTH = "swapSynthToSynth", // route length 2
  SYNTH_TO_TOKEN = "swapSynthToToken", // route length 3
  TOKEN_TO_SYNTH = "swapTokenToSynth", // route length 3
  TOKEN_TO_TOKEN = "swapTokenToToken", // route length 4
  INVALID = "invalid",
}

export const SWAP_CONTRACT_GAS_ESTIMATES_MAP = {
  [SWAP_TYPES.INVALID]: BigNumber.from("999999999"), // 999,999,999
  [SWAP_TYPES.DIRECT]: BigNumber.from("200000"), // 157,807
  [SWAP_TYPES.TOKEN_TO_TOKEN]: BigNumber.from("2000000"), // 1,676,837
  [SWAP_TYPES.TOKEN_TO_SYNTH]: BigNumber.from("2000000"), // 1,655,502
  [SWAP_TYPES.SYNTH_TO_TOKEN]: BigNumber.from("1500000"), // 1,153,654
  [SWAP_TYPES.SYNTH_TO_SYNTH]: BigNumber.from("999999999"), // 999,999,999 //
  addLiquidity: BigNumber.from("400000"), // 386,555
  removeLiquidityImbalance: BigNumber.from("350000"), // 318,231
  removeLiquidityOneToken: BigNumber.from("250000"), // 232,947
}

export interface WalletInfo {
  name: string
  icon: string
  connector: AbstractConnector
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  METAMASK: {
    name: "MetaMask",
    icon: metamaskIcon,
    connector: injected,
  },
  WALLET_CONNECT: {
    name: "WalletConnect",
    icon: walletconnectIcon,
    connector: walletconnect,
  },
  WALLET_LINK: {
    name: "Coinbase Wallet",
    icon: coinbasewalletIcon,
    connector: walletlink,
  },
}

// FLAGS
export const IS_VIRTUAL_SWAP_ACTIVE = false
// FLAGS END
