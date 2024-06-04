<script lang="ts">
	import { Bell } from 'lucide-svelte';
    import {EnvelopeClosed, Home, MagnifyingGlass, Pencil1, Reader} from 'radix-icons-svelte';
	import Button from './button/button.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
    const sidebarOptions = [
        {
            icon: Home,
            title: "home",
            href:  "/"
        },
        {
            icon: MagnifyingGlass,
            title: "explore",
            href:  "/"
        },
        {
            icon: Bell,
            title: "notification",
            href:  "/"
        },
        {
            icon: EnvelopeClosed,
            title: "messages",
            href:  "/"
        },
        {
            icon: Reader,
            title: "lists",
            href:  "/"
        },
        {
            icon: EnvelopeClosed,
            title: "communities",
            href:  "/"
        },
        {
            icon: EnvelopeClosed,
            title: "premium",
            href:  "/"
        },
        {
            icon: EnvelopeClosed,
            title: "logout",
            href:  "/login"
        }

    ]
</script>

<div class = "px-3 h-screen md:flex-[0.2] md:px-2 border flex justify-between flex-col sticky z-10 top-0 left-0">
    <div class = "mt-10">
        {#each sidebarOptions as {href,icon,title}}
        <a {href} class = "flex gap-[22px] p-3 w-fit rounded-full hover:bg-white/10">
            <svelte:component this={icon} class = "w-7 h-7"/>
        <p class = "text-lg capitalize hidden md:inline-block pr-5">{title}</p>
        </a>
        {/each}
    </div>
    <Button class = 'md:py-6 md:w-full'>
        <Pencil1 class = 'md:mr-2 h-4 w-4'/>
        <span class = "hidden md:inline">
            post
        </span>
    </Button>

    <div class = "flex gap-2 items-center justify-center">
        <Avatar.Root>
            <Avatar.Image src = "./xLogo.svg" alt = "user" />
            <Avatar.Fallback>US</Avatar.Fallback>
        </Avatar.Root>

        <div class = "hidden md:inline-block">
            <p class = "font-medium capitalize">sajel surati</p>
            <p class = "text-gray-800">sajelsurati@gmail.com</p>
        </div>
    </div>
</div>