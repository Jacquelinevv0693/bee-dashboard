function getProcessEnv(key: string): string | undefined | false {
  return typeof process === 'object' && process.env[key]
}

class Config {
  public readonly BEE_API_HOST: string
  public readonly BEE_DEBUG_API_HOST: string
  public readonly BLOCKCHAIN_EXPLORER_URL: string
  public readonly BEE_DOCS_HOST: string
  public readonly BEE_DISCORD_HOST: string
  public readonly GITHUB_REPO_URL: string

  constructor() {
    this.BEE_API_HOST =
      sessionStorage.getItem('api_host') || getProcessEnv('REACT_APP_BEE_HOST') || 'http://localhost:1633'
    this.BEE_DEBUG_API_HOST =
      sessionStorage.getItem('debug_api_host') || getProcessEnv('REACT_APP_BEE_DEBUG_HOST') || 'http://localhost:1635'
    this.BLOCKCHAIN_EXPLORER_URL =
      getProcessEnv('REACT_APP_BLOCKCHAIN_EXPLORER_URL') || 'https://blockscout.com/xdai/mainnet'
    this.BEE_DOCS_HOST = getProcessEnv('REACT_APP_BEE_DOCS_HOST') || 'https://docs.ethswarm.org/docs/'
    this.BEE_DISCORD_HOST = getProcessEnv('REACT_APP_BEE_DISCORD_HOST') || 'https://discord.gg/eKr9XPv7'
    this.GITHUB_REPO_URL =
      getProcessEnv('REACT_APP_BEE_GITHUB_REPO_URL') || 'https://api.github.com/repos/ethersphere/bee'
  }
}

export const config = new Config()

export default config
