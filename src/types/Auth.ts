export interface SignupRequest {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface ReIssueTokenRequest {
  refreshToken: string;
}

export interface ReIssueTokenResponse {
  accessToken: string;
  refreshToken: string;
}
