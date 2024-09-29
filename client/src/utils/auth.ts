import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile():JwtPayload | null {
    // TODO: return the decoded token
    const token = this.getToken();
    if(token){
    return jwtDecode<JwtPayload>(token);
  }
  return null;
  }

  loggedIn():boolean {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    return typeof token === 'string' && !this.isTokenExpired(token);
  }
  
  isTokenExpired(token: string):boolean{
    // TODO: return a value that indicates if the token is expired
    try{
      console.log('Token before decoding:', token);
      const decoded = jwtDecode<JwtPayload>(token);
      const currentTime = Date.now()/1000;
      return !! decoded.exp && decoded.exp < currentTime;

    }catch(err){
      console.log('Error decoding token:',err);
      return true;
    }
  }

  getToken(): string|null {
    // TODO: return the token
    return localStorage.getItem('token');

  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    console.log('Token before storing in localStorage:', idToken);
    localStorage.setItem('token',idToken);
    // TODO: redirect to the home page
    window.location.assign('/');

  }

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
    localStorage.removeItem('token');
    window.location.assign('/login');
  }
}

export default new AuthService();
