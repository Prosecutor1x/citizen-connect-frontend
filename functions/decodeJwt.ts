import jwt from 'jsonwebtoken';

export const decodeJWT = (jwtToken:string) => {
    try {
        const decodedToken = jwt.decode(jwtToken);

        return decodedToken?.sub

    } catch (error: any) {
        console.error('Error decoding JWT token:', error.message);
    }
}