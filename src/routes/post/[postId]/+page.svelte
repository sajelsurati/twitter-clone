<script lang="ts">
	import { ArrowBottomLeft } from "radix-icons-svelte";
    import * as Avatar from '$lib/components/ui/avatar';
    import Button from '$lib/components/ui/button/button.svelte';
    import {Heart, ChatBubble} from "radix-icons-svelte";
    import TweetCard from "$lib/components/ui/TweetCard.svelte"
</script>
<header class = "p-4 flex items-center gap-3">
    <ArrowBottomLeft/>
    <h1 class = "capitalize font-semibold text-lg">
        post
    </h1>
</header>

<div>
    <div class = "px-4">
        <div class = "flex justify-between">
            <div class = "flex gap-2">
                <Avatar.Root>
                    <Avatar.Image src = "./xLogo.svg" alt = "user" />
                    <Avatar.Fallback>US</Avatar.Fallback>
                </Avatar.Root>
                <div>
                    <p class = "capitalize font-semibold">sajel surati</p>
                    <p class = "text-sm text-gray-800">@sajelsurati</p>
                </div>
            </div>
            <Button variant = "secondary">
                follow
            </Button>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea aspernatur quia non sit dolore eius harum iusto, adipisci dignissimos expedita voluptatum maiores quos beatae eveniet laudantium pariatur inventore! Suscipit, iure.</p>
        <img src = "/xLogo.svg" alt = "">
        <div class = "flex justify-between text-sm mt-2">
            <button class = "flex transition-all group items-center gap-2 text-gray-600">
                <div class = "p-1 group-hover:bg-blue-500/20 rounded-full">
                    <Heart class = "group-hover:text-blue-500"/>
                </div>
                <span class = "group-hover:text-blue-500">5</span>
            </button>
            <button class = "flex transition-all group items-center gap-2 text-gray-600">
                <div class = "p-1 group-hover:bg-blue-500/20 rounded-full">
                    <ChatBubble class = "group-hover:text-blue-500"/>
                </div>
                <span class = "group-hover:text-blue-500">5</span>
            </button>
            <button class = "flex transition-all group items-center gap-2 text-gray-600">
                <div class = "p-1 group-hover:bg-blue-500/20 rounded-full">
                    <ChatBubble class = "group-hover:text-blue-500"/>
                </div>
                <span class = "group-hover:text-blue-500">5</span>
            </button>
            <button class = "flex transition-all group items-center gap-2 text-gray-600">
                <div class = "p-1 group-hover:bg-blue-500/20 rounded-full">
                    <Heart class = "group-hover:text-blue-500"/>
                </div>
                <span class = "group-hover:text-blue-500">5</span>
            </button>
        </div>
    </div>
    <div class = "flex gap-2 px-4 py-3">
        <Avatar.Root>
            <Avatar.Image src = "./xLogo.svg" alt = "user" />
            <Avatar.Fallback>US</Avatar.Fallback>
        </Avatar.Root>
        <input type = "text" placeholder= "Post your reply" class = "bg-transparent flex-1">
        <Button>comment</Button>
    </div>
    <div>
        <TweetCard/>
    </div>
</div>