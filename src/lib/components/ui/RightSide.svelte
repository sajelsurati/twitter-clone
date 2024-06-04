<script lang="ts">
	import SearchBar from "./SearchBar.svelte";
    import Card from "./Card.svelte"
	import Button from "./button/button.svelte";
</script>

<div class = "px-5 flex-[0.6] hidden md:inline-block border py-2 space-y-4">
    <SearchBar/>
    <Card let:Title>
        <Title>
            subscribe to premium
        </Title>
        <p slot = "content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo eius molestias voluptates blanditiis placeat, ad dolores doloribus sed facilis, modi odio dolor beatae excepturi eveniet rem? Sit ducimus saepe ut?</p>

        <Button slot = "action">
            Subscribe
        </Button>
    </Card>

    <Card let:Title>
        <Title>
            trends for you
        </Title>
        <div slot = "content">
            {#each {length: 20} as _}
            <div class = "space-y-1 cursor-pointer rounded py-2 hover:bg-grey-800">
                <div class = "flex items-center gap-1 test-xs text-gray-500 capitalize">
                    <p>music</p>
                    <p>trending</p>
                </div>
                <p class = "font-bold text-sm capitalize">alan casey</p>
                <p class = "text-xs text-gray-500">255.5k</p>
            </div>
            {/each}
        </div>
    </Card>
</div>