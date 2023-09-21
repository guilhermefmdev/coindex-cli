const axios = require('axios')
const colors = require('colors')

class CryptoAPI {
    constructor(apiKey) {
        this.apiKey = apiKey
        this.baseUrl = `https://rest.coinapi.io/v1/assets/apikey-${apiKey}`
    }

    async getPriceData(coinOpt) {

        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        })

        try {
            const res = await axios.get(`${this.baseUrl}?filter_asset_id=${coinOpt}`)

            let output = ''
            res.data.forEach(coin => {
                output += `Coin: ${coin.asset_id.yellow} (${coin.name}) | Price:` + ` ${formatter.format(coin.price_usd)}\n`.green
            })

            return output
        } catch (err) {
            handleAPIError(err)
        }

    }
}

function handleAPIError(err) {
    if (err.response.status === 401) {
        throw new Error('Your API key is invalid -- Go to https://coinapi.io/')
    } else if (err.response.status === 404) {
        throw new Error('Your API is not responding')
    } else {
        throw new Error('Something gone wrong')
    }
}

module.exports = CryptoAPI