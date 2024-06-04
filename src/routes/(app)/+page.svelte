<script lang="ts">
    import * as Avatar from '$lib/components/ui/avatar';
    import Header from "$lib/components/ui/Header.svelte"
    import {Image} from "radix-icons-svelte";
    import Button from "$lib/components/ui/button/button.svelte"
	import TweetCard from '$lib/components/ui/TweetCard.svelte';
</script>

<Header/>

<div class = "px-4 py-2 flex gap-2">
    <Avatar.Root>
        <Avatar.Image src = "./xLogo.svg" alt = "user" />
        <Avatar.Fallback>US</Avatar.Fallback>
    </Avatar.Root>
    <div class = "w-full border">
        <input placeholder = "what is happening?!" type="text" class = "bg-transparent text-lg w-full px-2 outline-none h-10">
        <div class = "flex border-t py-3 justify-between items-center">
            <div class = "flex gap-2 items-center">
                <input type = "file" hidden id = "img" accept = "image/png, image/jpeg, image/gif, image/webp">
                <label for = "img">
                    <Image class = "text-primary cursor-pointer"/>
                </label>
            </div>
            <Button>
                post
            </Button>
        </div>
    </div>
</div>
<TweetCard/>