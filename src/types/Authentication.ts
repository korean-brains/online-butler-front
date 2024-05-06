export interface Authentication {
  id: number;
  accessToken: string;
  refreshToken: string;
}

export interface AuthenticationContextType {
  authentication: Authentication | null;
  setAuthentication: (authentication: Authentication) => void;
}
