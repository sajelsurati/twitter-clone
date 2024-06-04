<script>
	import { goto } from "$app/navigation";
	import Button from "$lib/components/ui/button/button.svelte";
	import { auth, db } from "$lib/firebase";
	import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
    import {doc, getDoc, setDoc} from 'firebase/firestore';
    const provider = new GoogleAuthProvider()
    const login = async() => {
        try {
            const {user} = await signInWithPopup(auth, provider);
            const idToken = await user.getIdToken();

            fetch('/login', {
                method: 'POST',
                body: JSON.stringify(idToken)
            });

            const userDocRef = doc(db, 'users', user.uid);
            const userDocSnap = await getDoc(userDocRef);
            if (!userDocSnap.exists()) {
                await setDoc(doc(db, 'users', user.uid), {
                    name: user.displayName,
                    email: user.email,
                    profilePic: user.photoURL
                },
                {
                    merge:true
                })
            }
            goto('/');
        }
        catch (error) {
            console.log("in login page",error);
        }
    }
</script>
<div class = "flex flex-col items-center justify-center h-screen w-screen border">
    <img src = "xLogo.svg" alt = "x logo">
    <Button on:click = {login}>login with Google</Button>
</div>