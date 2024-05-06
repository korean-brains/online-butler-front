export interface SignupRequest {
  username: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}
