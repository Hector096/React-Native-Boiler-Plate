export type Credential = {
id: string,
password?: string
}

export type Register = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
    }