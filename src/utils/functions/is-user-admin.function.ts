import { jwtDecode } from "jwt-decode";
import { isTokenFresh } from "./is-token-fresh.function";

export function isUserAdmin(): boolean {
  try {
    const token = sessionStorage.getItem('at');
    if (!token) {
      return false;
    }
  
    const claims = jwtDecode(token);
  
    if (!validateClaims(claims)) {
      return false 
    }

    return isTokenFresh(claims) && claims.IsAdmin;
  } catch (err) {
      console.error('Token validation error:', err);
      return false;
  }
}

type RelevantClaims = {
  exp: number;
  IsAdmin: boolean;
}

function validateClaims(claims: any): claims is RelevantClaims {
  return typeof claims.exp === 'number' && typeof claims.IsAdmin === 'boolean'
}