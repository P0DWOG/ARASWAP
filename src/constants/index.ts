import { injected, walletconnect, walletlink } from "../connectors"

import { AbstractConnector } from "@web3-react/abstract-connector"
import { BigNumber } from "@ethersproject/bignumber"
import alethLogo from "../assets/icons/aleth.svg"
import coinbasewalletIcon from "../assets/icons/coinbasewallet.svg"
import daiLogo from "../assets/icons/dai.svg"
import metamaskIcon from "../assets/icons/metamask.svg"
import renbtcLogo from "../assets/icons/renbtc.svg"
import saddleLogo from "../assets/icons/logo.svg"
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
export const STABLECOIN_POOL_NAME = "Earth Currency"
export const VETH2_POOL_NAME = "vETH2 Portal "
export const ALETH_POOL_NAME = "ETH Portal "
export type PoolName =
  | typeof BTC_POOL_NAME
  | typeof STABLECOIN_POOL_NAME
  | typeof VETH2_POOL_NAME
  | typeof ALETH_POOL_NAME

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  // RINKEBY = 4,
  // GÖRLI = 5,
  // KOVAN = 42,
  HARDHAT = 31337,
  MATIC = 137,
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
  [ChainId.ROPSTEN]: "",
  [ChainId.MATIC]: "",
}

export const STABLECOIN_SWAP_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0x3911F80530595fBd01Ab1516Ab61255d75AEb066",
  [ChainId.HARDHAT]: "0x98A0Bc3f9FdAD482CB2e40dE1291f8b0A6FE1860",
  [ChainId.ROPSTEN]: "0x1D0c6DB99b51373A2de4bb0BAcd4fe2CF14220e6",
  [ChainId.MATIC]: "0xea3b0F59663dA26BCB0D0Ed4779AB91F62A7c0fd",
}

export const BTC_SWAP_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0x4f6A43Ad7cba042606dECaCA730d4CE0A57ac62e",
  [ChainId.HARDHAT]: "0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
  [ChainId.ROPSTEN]: "0x419A351565cb72C69EE7D49E0AF41EfA612A8BeA",
  [ChainId.MATIC]: "",
}

export const VETH2_SWAP_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0xdec2157831D6ABC3Ec328291119cc91B337272b",
  [ChainId.HARDHAT]: "0x6F62d12568c81Dc0fb38426B7Cdba2d265f89B2",
  [ChainId.ROPSTEN]: "0x7b34f218bFf90f4cE1a0C143475F08a7288338B0",
  [ChainId.MATIC]: "",
}

export const ALETH_SWAP_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0xa6018520EAACC06C30fF2e1B3ee2c7c22e64196a",
  [ChainId.HARDHAT]: "0xCafac3dD18aC6c6e92c921884f9E4176737C052c",
  [ChainId.ROPSTEN]: "0xB7fCF6a4f040fB332F1baD0a61CD5E96Cb9928E0",
  [ChainId.MATIC]: "",
}

export const MERKLETREE_DATA: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "mainnetTestAccounts.json",
  [ChainId.HARDHAT]: "hardhat.json",
  [ChainId.ROPSTEN]: "",
  [ChainId.MATIC]: "",
}

export const STABLECOIN_SWAP_TOKEN_CONTRACT_ADDRESSES: {
  [chainId in ChainId]: string
} = {
  [ChainId.MAINNET]: "0x76204f8CFE8B95191A3d1CfA59E267EA65e06FAC",
  [ChainId.HARDHAT]: "0x6D1c89F08bbB35d80B6E6b6d58D2bEFE021eFE8d",
  [ChainId.ROPSTEN]: "0xD93775c907eD2CcBCdad0C4bE18998D88025b9FF",
  [ChainId.MATIC]: "0x3a36D46e4861C5d9CC17DA03201FB3499Cb765D4",
}

export const BTC_SWAP_TOKEN_CONTRACT_ADDRESSES: {
  [chainId in ChainId]: string
} = {
  [ChainId.MAINNET]: "0xC28DF698475dEC994BE00C9C9D8658A548e6304F",
  [ChainId.HARDHAT]: "0x6F1216D1BFe15c98520CA1434FC1d9D57AC95321",
  [ChainId.ROPSTEN]: "0x48b9F52c28632dE872AbD0dfD9F1e3037e8ce86C",
  [ChainId.MATIC]: "",
}

export const VETH2_SWAP_TOKEN_CONTRACT_ADDRESSES: {
  [chainId in ChainId]: string
} = {
  [ChainId.MAINNET]: "0xe37E2a01feA778BC1717d72Bd9f018B6A6B241D",
  [ChainId.HARDHAT]: "0xd44a47B19a7862709588D574f39480f9C4DED1A",
  [ChainId.ROPSTEN]: "0x8459CDD04a9DbC03F0D3AC99c034860882d2243E",
  [ChainId.MATIC]: "",
}

export const ALETH_SWAP_TOKEN_CONTRACT_ADDRESSES: {
  [chainId in ChainId]: string
} = {
  [ChainId.MAINNET]: "0xc9da65931ABf0Ed1b74Ce5ad8c041C4220940368",
  [ChainId.HARDHAT]: "0xAe367415f4BDe0aDEE3e59C35221d259f517413E",
  [ChainId.ROPSTEN]: "0x9A9fb07080580dd26c4967e882BE6E2Dd246Ec56",
  [ChainId.MATIC]: "",
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
  "uMUNE",
  "MUNE USD",
  "Mune DAI/USDC/USDT",
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
  [ChainId.HARDHAT]: "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0",
  [ChainId.ROPSTEN]: "0x8C924e41d0624Ae6E7DB09fc93BBfB324c31BE0C",
  [ChainId.MATIC]: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
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
  [ChainId.HARDHAT]: "0x9A676e781A523b5d0C0e43731313A708CB607508",
  [ChainId.ROPSTEN]: "0xA4fe4981f7550884E7E6224F0c78245DC145b2F2",
  [ChainId.MATIC]: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
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
  [ChainId.HARDHAT]: "0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1",
  [ChainId.ROPSTEN]: "0x0593d1b92e8Ba6bBC428923245891efF0311Fa15",
  [ChainId.MATIC]: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
}
export const USDT = new Token(
  USDT_CONTRACT_ADDRESSES,
  6,
  "USDT",
  "tether",
  "Tether",
  usdtLogo,
)

const MATIC_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
  [ChainId.HARDHAT]: "0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1",
  [ChainId.ROPSTEN]: "0x0593d1b92e8Ba6bBC428923245891efF0311Fa15",
  [ChainId.MATIC]: "0x0000000000000000000000000000000000001010",
}
export const MATIC = new Token(
  MATIC_CONTRACT_ADDRESSES,
  18,
  "MATIC",
  "matic",
  "matic",
  usdtLogo,
)

export const STABLECOIN_POOL_TOKENS = [DAI, USDC, USDT]

// Tokenized BTC
const TBTC_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0x8daebade922df735c38c80c7ebd708af50815faa",
  [ChainId.HARDHAT]: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
  [ChainId.ROPSTEN]: "0x9F6aA48f852Dd928F53A7dd3dcd2AC96a76c8727",
  [ChainId.MATIC]: "",
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
  [ChainId.HARDHAT]: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
  [ChainId.ROPSTEN]: "0x7264594dFB80a150f80b2988862605dDfda53727",
  [ChainId.MATIC]: "",
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
  [ChainId.HARDHAT]: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
  [ChainId.ROPSTEN]: "0x79B92D075d72d639D46D30CE15e6DdDE50ad5890",
  [ChainId.MATIC]: "",
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
  [ChainId.HARDHAT]: "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
  [ChainId.ROPSTEN]: "0xAc2931cFA6ff57Aaf64B43DFdc5190ca3c341640",
  [ChainId.MATIC]: "",
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

export const BTC_POOL_TOKENS = [DAI] //[TBTC, WBTC, RENBTC, SBTC]

const WETH_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  [ChainId.HARDHAT]: "0x3Aa5ebB10DC797CAC828524e59A333d0A371443c",
  [ChainId.ROPSTEN]: "0x0B68F3b6c7fc0b6dD4D9a2399C4AE35be060ba42",
  [ChainId.MATIC]: "",
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
  [ChainId.HARDHAT]: "0x59b670e9fA9D0A427751Af201D676719a970857b",
  [ChainId.ROPSTEN]: "0xd46Ea72ABf55699b17eAF529c6533e5c13F5E687",
  [ChainId.MATIC]: "",
}
export const VETH2 = new Token(
  VETH2_CONTRACT_ADDRESSES,
  18,
  "VETH2",
  "ethereum",
  "vETH2",
  veth2Logo,
)

export const VETH2_POOL_TOKENS = [DAI]

const ALETH_CONTRACT_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0x0100546F2cD4C9D97f798fFC9755E47865FF7Ee6",
  [ChainId.HARDHAT]: "0x09635F643e140090A9A8Dcd712eD6285858ceBef",
  [ChainId.ROPSTEN]: "0xaA91d3f2C53BDBEdd45FaB0308d0b51315Dc32E7",
  [ChainId.MATIC]: "",
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
  [ChainId.HARDHAT]: "0x67d269191c92Caf3cD7723F116c85e6E9bf55933",
  [ChainId.ROPSTEN]: "0x82BD6d2A185ed1C48e01830853fEf7f4D02fF1cC",
  [ChainId.MATIC]: "",
}
export const SETH = new Token(
  SETH_CONTRACT_ADDRESSES,
  18,
  "sETH",
  "seth",
  "Synth sETH",
  sethLogo,
)

export const ALETH_POOL_TOKENS = [DAI] //[WETH, ALETH, SETH]

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
    emoj: "🌘",
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
