export interface Authentication {
  isAuthenticated: boolean;
  id: number;
  accessToken: string;
  refreshToken: string;
}

export interface AuthenticationContextType {
  authentication: Authentication;
  setAuthentication: (authentication: Authentication) => void;
  clearAuthentication: () => void;
}
