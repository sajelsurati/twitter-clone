import { db } from "$lib/firebase";
import { error, redirect } from "@sveltejs/kit";
import { doc, getDoc } from "firebase/firestore";

export const load = async ({locals}) => {
    const userId = locals.userID;
    if (!locals.userID) {
        console.log("here");
        throw redirect(303, '/login');
    }
    const getUser = async(uid:string) => {
        try {
            const docRef = doc(db,'users');
            const docSnap = await getDoc(docRef);
            return docSnap.data();
        } catch (e) {
            throw error(400, "an error occurred");
        }
    } 
    return {
        userId,
        user : getUser(locals.userID!)
    }
};