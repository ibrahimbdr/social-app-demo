import { InjectionToken, NgModule } from '@angular/core';

import {
  FirebaseApp,
  initializeApp,
  provideFirebaseApp,
} from '@angular/fire/app';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import {
  provideFirestore,
  getFirestore,
  connectFirestoreEmulator,
  initializeFirestore,
} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

export interface IFirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  locationId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

export const FIREBASE_CONFIG = new InjectionToken<IFirebaseConfig>(
  'FIREBASE_CONFIG',
  {
    providedIn: 'any',
    factory: () => {
      throw new Error(`Provide FIREBASE_CONFIG`);
    },
  }
);
export const USE_EMULATORS = new InjectionToken<boolean>('USE_EMULATORS', {
  providedIn: 'any',
  factory: () => {
    throw new Error(`Provide USE_EMULATORS`);
  },
});

@NgModule({
  declarations: [],
  imports: [
    provideFirebaseApp((injector) => {
      const config = injector.get(FIREBASE_CONFIG);
      console.log('🔔 provideFirebaseApp');
      return initializeApp(environment.firebase);
    }),
    provideAuth((injector) => {
      console.log('🔔 provideAuth');
      const app = injector.get(FirebaseApp);
      const auth = getAuth(app);
      if (injector.get(USE_EMULATORS)) {
        console.log('🔔 using auth emulator...');
        connectAuthEmulator(auth, 'http://localhost:9099');
      }
      return auth;
    }),
    provideFirestore((injector) => {
      console.log('🔔 provideFirestore');
      let firestore;
      if (injector.get(USE_EMULATORS)) {
        console.log(
          `🔔 using firestore emulator...${
            injector.get(FIREBASE_CONFIG).projectId
          }`
        );
        // bug: experimentalAutoDetectLongPolling not picked up via `getFirestore`
        const app = injector.get(FirebaseApp);
        firestore = initializeFirestore(app, {
          experimentalAutoDetectLongPolling: true,
        });
        connectFirestoreEmulator(firestore, 'localhost', 8080);
      } else {
        firestore = getFirestore();
      }
      return firestore;
    }),
  ],
})
export class FirebaseV7Module {}
