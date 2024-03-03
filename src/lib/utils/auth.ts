import { browser } from '$app/environment';
const TOKEN = 'authToken';
const REFRESH_TOKEN = 'refreshToken';

interface AuthTokenData {
  token: string;
  refreshToken: string;
}

export function setAuthTokens(opts: AuthTokenData) {
  if (browser) {
    localStorage.setItem(TOKEN, opts.token);
    localStorage.setItem(REFRESH_TOKEN, opts.refreshToken);
  }
}

export function getAuthTokens(): AuthTokenData | undefined {
  if (browser) {
    const token = localStorage.getItem(TOKEN);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    if (token !== null && refreshToken !== null) {
      return {
        token,
        refreshToken
      };
    }
  }
}

export function clearAuthTokens() {
  if (browser) {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
  }
}
