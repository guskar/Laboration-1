import fetch from 'node-fetch'

export class Fetcher {
  constructor () {
  }

  /**
   *
   */
  async fetchData (url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
  }
}
