const Configstore = require('configstore')
const pkg = require('../package.json')
class KeyManager {
    constructor() {
        this.conf = new Configstore(pkg.name)
    }

    setKey(key) {
        this.conf.set('apiKey', key)
        return key
    }

    removeKey() {
        const key = this.conf.get('apiKey')
        if (!key) {
            throw new Error('No API Key Found -- Get a key at https://coinapi.io/')
        }

        this.conf.delete('apiKey')
        return
    }

    getKey() {
        const key = this.conf.get('apiKey')

        if (!key) {
            throw new Error('No API Key Found -- Get a key at https://coinapi.io/')
        }
        return key
    }
}

module.exports = KeyManager