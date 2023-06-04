import { ethers } from 'ethers'
import { config as loadEnv } from 'dotenv'
import { promises } from 'fs'
const fsPromises = promises
loadEnv()

const PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY
const UPDATED_CONTRACT_ADDRESS = '0x39B45E1147f0A19F9D2979a1CBa2e8660fB34408'
const my_address = '0x6f9e2777D267FAe69b0C5A24a402D14DA1fBcaA1'
const summer_address = '0xb2d1BAa5fD0Ba77a6060D2D494a82EC025dA82EF'
const UPDATED_ABI_FILE_PATH = './ABI/POM.json'

const provider = ethers.getDefaultProvider(`https://rpc.chiado.gnosis.gateway.fm`)
const signer = new ethers.Wallet(PRIVATE_KEY || '', provider)

async function getAbi() {
  const data = await fsPromises.readFile(UPDATED_ABI_FILE_PATH, 'utf8')
  const abi = JSON.parse(data)['abi']
  //console.log(abi);
  return abi
}

const abi = await getAbi()
const my_contract = new ethers.Contract(UPDATED_CONTRACT_ADDRESS, abi, signer)

// mints POM to the chosen address
export async function mintToken(userAddress, _id) {
  let id = 0 // _id
  const mint_tx = await my_contract.mint(userAddress, id, 1, '0x0102') // second argumnent is id
  return mint_tx
}

// changes URI for tokens' metadata folder
export async function setURI(userAddress) {
  const newURI = await my_contract.setURI('ipfs://Qmdtyqjx5ha9dBda6ZE5dc2N4vB8oAZYrLhGQj5jAah2RF/')
  //console.log(uri);
  return newURI.hash
}

// returns the number of POMs minted for each id (friends of single user)
export async function totalSupply(id) {
  const supply = await my_contract.totalSupply(id)
  return supply
}

// returns the number of existing POMs (counter of Users' profiles)
export async function tokenCounter() {
  const tokenCounter = await my_contract.tokenCounter()
  return tokenCounter
}

// const mint = await mintToken(my_address)
// console.log(mint)
