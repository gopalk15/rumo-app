import { initializeApp } from 'firebase/app';
import {firebaseConfig} from "./credentials.ts";


export const app = initializeApp(firebaseConfig);
