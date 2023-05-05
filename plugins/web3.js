import Web3 from 'web3'

export default (ctx, inject) => {
  if(!process.client) return // don't run on serverside
  inject( // Inject the $web3 instance into the context object in Nuxt
    'web3',
    window.ethereum ? new Web3(window.ethereum) : null
  )
}
