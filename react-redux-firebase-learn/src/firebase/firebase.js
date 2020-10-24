import config from './config';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

app.initializeApp(config);

export const auth = app.auth();
export const firestore = app.firestore();
