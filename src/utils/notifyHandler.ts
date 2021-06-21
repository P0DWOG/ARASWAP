import { NOTIFY_OPTIONS } from "../constants"
import Notify from "bnc-notify"
import { getEtherscanLink } from "../utils/getEtherscanLink"

export const notify = Notify(NOTIFY_OPTIONS)

export function notifyHandler(
  hash: string,
  type: "Deposit" | "Withdraw" | "Swap" | "Token approval",
): void {
  const { emitter } = notify.hash(hash)

  emitter.on("txPool", (transaction) => {
    if (transaction.hash) {
      return {
        message: `${type} transaction is pending, view it <a href="${getEtherscanLink(
          transaction.hash,
          "tx",
        )}" rel="noopener noreferrer" target="_blank">on Etherscan</a>.`,
      }
    }
  })
  emitter.on("txSent", () => {
    return {
      message: `${type} transaction was sent to the network`,
    }
  })
  emitter.on("txConfirmed", () => {
    return {
      message: `${type} transaction is confirmed.`,
    }
  })
  emitter.on("txSpeedUp", (transaction) => {
    if (transaction.hash) {
      return {
        message: `${type} transaction is speeding up. View it <a href="${getEtherscanLink(
          transaction.hash,
          "tx",
        )}" rel="noopener noreferrer" target="_blank">on Etherscan</a>.`,
      }
    }
  })
  emitter.on("txCancel", () => {
    return {
      message: `${type} transaction is canceled.`,
    }
  })
  emitter.on("txFailed", (transaction) => {
    if (transaction.hash) {
      return {
        message: `${type} transaction is failed. View it <a href="${getEtherscanLink(
          transaction.hash,
          "tx",
        )}" rel="noopener noreferrer" target="_blank">on Etherscan</a>.`,
      }
    }
  })
}