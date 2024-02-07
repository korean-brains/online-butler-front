export interface Authentication {
  id: number;
}

export interface AuthenticationContextType {
  authentication: Authentication | null;
  setAuthentication: (authentication: Authentication) => void;
}
