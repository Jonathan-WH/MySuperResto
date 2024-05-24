import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

import { routes } from './app.routes';
import { KitchenComponent } from './kitchen/kitchen.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { isAuthGuard } from './Guard/is-auth.guard';
import { dataResolver } from './Resolver/data.resolver';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { LoginPageComponent } from './login-page/login-page.component';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideServiceWorker } from '@angular/service-worker';



export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter([
            {
                path: 'home',
                // component: HomeComponent
                loadComponent: () => import('./home/home.component').then((modules) => modules.HomeComponent),
                resolve: {
                    database: dataResolver
                },
            },
            { path: 'kitchen', component: KitchenComponent},
            { path: 'login', component: LoginPageComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: '404', component: NotFoundPageComponent },
            { path: '**', redirectTo: '/404' }
        ]),
        provideIonicAngular({
            mode: 'ios'
        }),
        importProvidersFrom(provideFirebaseApp(() => initializeApp({
            "projectId": "angular-demo-fire",
            "appId": "1:1066759106894:web:4977640dc3167cf1de6e1f", "storageBucket": "angular-demo-fire.appspot.com",
            "apiKey": "AIzaSyAPotG3CJ8VJ4Ht-K1_F9lCo_DbCazYEHs", "authDomain": "angular-demo-fire.firebaseapp.com", "messagingSenderId": "1066759106894"
        }))),
        importProvidersFrom(provideFirestore(() => getFirestore())),
        importProvidersFrom(provideAuth(() => getAuth())),
        importProvidersFrom(provideStorage(() => getStorage())), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
        })
    ]

};
function proviteStorage(arg0: () => any): import("@angular/core").ImportProvidersSource {
    throw new Error('Function not implemented.');
}

