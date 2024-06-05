<script lang="ts">
    import * as Avatar from '$lib/components/ui/avatar';
    import {ChatBubble, Heart} from "radix-icons-svelte";
    export let avatar: string;
    export let tweet: string;
    export let email: string;
    export let name: string;
    export let id: string;
    export let img: string;
    export let likes: string[];
</script>

<a href = "/post/{id}" class = "flex gap-2 border-t p-3">
    <Avatar.Root>
        <Avatar.Image src = {avatar} alt = "user" />
        <Avatar.Fallback>US</Avatar.Fallback>
    </Avatar.Root>

    <div class = "w-full">
        <div class = "flex items-center text-xs test-gray-500 gap-1">
            <h3 class = "capitalize text-sm font-semibold text-white">{name}</h3>
            <p>@{email}</p>
            . <p>22h</p>
        </div>
        <p class = "text-sm mb-2">{tweet}</p>
        {#if img}
            <img src={img} alt = "" class = "rounded-sm mt-2 object-contain w-full" />
        {/if}
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
</a>