import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class LoginPageComponent  implements OnInit {

  constructor(
    private readonly _auth: Auth,
    private readonly router: Router
  ) { }

  ngOnInit() {}

 async signinWithGoogle() {
  const provider = new GoogleAuthProvider();
  const credential = await signInWithPopup(this._auth, provider);
  if(credential.user.uid)
    console.log(credential)
  this.router.navigateByUrl('/kitchen');
}

}