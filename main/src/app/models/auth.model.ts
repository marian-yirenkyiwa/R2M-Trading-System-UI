export interface LoginAuth {
    email: string;
    password: string;
}

export interface LoginResponse{
    token: string;
}

export interface SignUpAuth{
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export interface SignUpResponse{
    message: string;
}
