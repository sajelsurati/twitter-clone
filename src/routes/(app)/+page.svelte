<script lang="ts">
    import * as Avatar from '$lib/components/ui/avatar';
    import Header from "$lib/components/ui/Header.svelte"
    import {Image} from "radix-icons-svelte";
    import Button from "$lib/components/ui/button/button.svelte"
	import TweetCard from '$lib/components/ui/TweetCard.svelte';
    import {db, storage} from '$lib/firebase';
    import {addDoc, collection} from 'firebase/firestore';
    import {getDownloadURL, ref, uploadBytes } from 'firebase/storage';
    import { invalidate } from '$app/navigation';

    let tweet = '';
    let loading:boolean;
    let imgFile;
    export let data;
</script>

<Header/>

<div class = "px-4 py-2 flex gap-2">
    <Avatar.Root>
        <Avatar.Image src = "./xLogo.svg" alt = "user" />
        <Avatar.Fallback>US</Avatar.Fallback>
    </Avatar.Root>
    <div class = "w-full border">
        <input placeholder = "what is happening?!" type="text" class = "bg-transparent text-lg w-full px-2 outline-none h-10" bind:value = {tweet} />
        <div class = "flex border-t py-3 justify-between items-center">
            <div class = "flex gap-2 items-center">
                <input type = "file" hidden id = "img" accept = "image/png, image/jpeg, image/gif, image/webp">
                <label for = "img">
                    <Image class = "text-primary cursor-pointer"/>
                </label>
            </div>
            <Button on:click={async() => {
                loading = true;
                let url = '';
                if (imgFile) {
                    const storageRef = ref(storage,'posts/userId/${imgFile.name}')
                    const result = uploadBytes(storageRef,imgFile);
                    let url = await getDownloadURL(result.ref);
                }
                await addDoc(collection(db, 'posts'), {
                    tweet,
                    userId:data.userId,
                    img:url,
                    ...data.user,
                    likes:[]
                })
                loading = false;
                tweet = '';
                invalidate('posts');
            }}
            disabled={tweet?.length < 5 || loading}>
            {#if loading}
                loading ...
            {:else}
                Post
            {/if}
            </Button>
        </div>
    </div>
</div>
{#if data.posts.length > 0}
    {#each data.posts as post}
        <TweetCard/>
    {/each}
{:else}
no data
{/if}
<TweetCard/>