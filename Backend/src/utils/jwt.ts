import jwt from "jsonwebtoken";

const secret: string = process.env.JWT_SECRET || "secret";

// Function to generate a token
export const generateToken = (payload: any) => {
    return jwt.sign(payload, secret, { expiresIn: "1h" });
};

// Function to generate a refresh token
export const generateRefreshToken = (payload: any) => {
    return jwt.sign(payload, secret, { expiresIn: "1d" });
};

// Function to check if the token is valid
export const checkToken = (token: string) => {
    try {
        const decoded = jwt.verify(token, secret);
        if (decoded) {
            return true;
        }
    } catch (error) {
        return false;
    }
};

// Function to get the payload from the token
export const getPayload = (token: string) => {
    const decoded = jwt.verify(token, secret);
    if (decoded) {
        return JSON.parse(JSON.stringify(decoded));
    }
};

// Function to decode the token and get the payload without verifying if the token is valid
export const decodeToken = (token: string) => {
    return jwt.decode(token);
};

// Function to check if the token is expired
export const isTokenExpired = (payload: string) => {
    const user_payload = Object(payload);
    const now = Date.now().valueOf() / 1000 ;
    if (payload) {
        if (user_payload.exp < now) {
            return true;
        } else {
            return false;
        }
    }
}
