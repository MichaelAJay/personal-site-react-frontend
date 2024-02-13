export function isTokenFresh(claims: { exp?: number }) {
    return !!(claims.exp && claims.exp > Math.floor(Date.now() / 1000));
}