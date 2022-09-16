import fetch from 'node-fetch'

/**
 * A Class that is responsible for fetching data from api.
 */
export class Fetcher {
  /**
   * The url to fetch data from.
   *
   * @param {string} url - the url to fetch.
   */
  async fetchData (url) {
    const response = await fetch(url)
    const data = await response.json()
    if (response.status !== 200) {
      throw new Error('Something went wrong trying to fetch the API')
    }
    return data
  }
}
