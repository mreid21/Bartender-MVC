export interface DecodedToken {
  username: string
}

export interface AuthUser extends DecodedToken {
  token: string,
}