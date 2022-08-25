type Role = 'CUSTOMER' | 'BARTENDER'

export interface User {
    id: number,
    username: string,
    password: string,
    role: Role
}

//utility types
export interface AuthToken {
    token: string
}