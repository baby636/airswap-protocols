const Peer = artifacts.require('Peer')
const PeerFactory = artifacts.require('PeerFactory')
const Swap = artifacts.require('@airswap/swap/contracts/Swap.sol')
const Types = artifacts.require('@airswap/types/contracts/Types.sol')

const EMPTY_ADDRESS = '0x0000000000000000000000000000000000000000'

module.exports = deployer => {
  deployer.deploy(Types)
  deployer.link(Types, Swap)
  deployer
    .deploy(Swap)
    .then(() => Swap.deployed())
    .then(() => deployer.deploy(Peer, Swap.address, EMPTY_ADDRESS))
  deployer.deploy(PeerFactory)
}