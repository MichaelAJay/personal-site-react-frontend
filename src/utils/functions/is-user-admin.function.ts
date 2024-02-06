// import { jwtDecode } from 'jwt-decode';

export function isUserAdmin(): boolean {
  const token = sessionStorage.getItem('at');
  if (!token) {
    console.log('no token in session storage');

    /** @TODO THIS SHOULD BE FALSE */
    return false;
  }
  return false;

  // try {
  //     // const claims = jwtDecode(token);
  //     return false;
  // } catch (err) {
  //     console.error('Token validation error:', err);
  //     return false;
  // }
}
