import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class IsAuthService {

  constructor(private _auth: Auth) {}

  async isAuth(): Promise<boolean> {
    // Vérifier si l'utilisateur est connecté avec Google
    const user = this._auth.currentUser;
    console.log(this._auth.currentUser);
    
    // Retourner true si l'utilisateur est connecté, sinon retourner false
    return user !== null;
  }
}
