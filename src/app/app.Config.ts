import { enableProdMode, importProvidersFrom } from '@angular/core';
import { ApplicationConfig } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withHashLocation } from '@angular/router';
import { environment } from '../environments/environment';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FirebaseV7Module } from './firebase-v7/firebase-v7.module';

export const appConfig: ApplicationConfig = {
    providers: [
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        importProvidersFrom(IonicModule.forRoot({})),
        provideRouter(
          [
            {
              path: 'home',
              loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
            },
            {
              path: '',
              redirectTo: 'home',
              pathMatch: 'full',
            },
          ]
        ),

        importProvidersFrom(
          FirebaseV7Module
         )
    ],
};
