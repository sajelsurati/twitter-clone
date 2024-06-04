import { FB_CLIENT_EMAIL, FB_PRIVATE_KEY, FB_PROJECT_ID } from '$env/static/private';
import pkg from 'firebase-admin';
import {getAuth} from 'firebase-admin/auth';
pkg.initializeApp(
    {credential:pkg.credential.cert({
        projectId:FB_PROJECT_ID,
        clientEmail:FB_CLIENT_EMAIL,
        privateKey:FB_PRIVATE_KEY
    })

});


export const adminAuth = getAuth();