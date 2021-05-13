import config from './config';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database'

app.initializeApp(config)
export const auth = app.auth();
export const db = app.database();
export const fs = app.firestore();

export default app