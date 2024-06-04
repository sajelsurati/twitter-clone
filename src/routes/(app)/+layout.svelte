<script lang='ts'>
	import Sidebar from '$lib/components/ui/Sidebar.svelte';
    import RightSide from '$lib/components/ui/RightSide.svelte';
</script>

<div class = "flex border mx-auto w-full max-w-6xl">
    <Sidebar/>
    <main class = "min-h-screen flex-1">
        <slot/>
    </main>
    <RightSide/>
</div>
