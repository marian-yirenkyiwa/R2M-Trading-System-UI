export interface LoginAuth {
    email: string;
    password: string;
}

export interface LoginResponse{
    token: string;
}

export interface SignUpAuth{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface SignUpResponse{
    message: string;
}
