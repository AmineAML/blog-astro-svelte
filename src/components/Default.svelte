<script>
	import PostPreview from './PostPreview.svelte'
	// import Search from "./Search.svelte"

    export let data;
    export let dataArt;
    export let dataArtAsCopy;

    function filter(topic) {
        if (topic == 'all') {
            dataArt = dataArtAsCopy;
        } else {
            dataArt = dataArtAsCopy.filter(article => article.topics.some(artTopic => artTopic.name == topic));
        }
    }
</script>

<div class="flex flex-col">
    <h1 class="text-4xl my-10 font-extrabold mx-auto title">Amine Amellouk's Blog</h1>
    
    <p class="mx-auto article">
        Software Developer with a passion for the Back-End engineering and the DevOps.
    </p>
    
    <div class="flex space-x-2 mx-auto">
        <a href="https://www.amineamellouk.com" aria-label="portfolio">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
            </svg>
        </a>
        <a href="https://linkedin.com/in/amine-amellouk" aria-label="linkedin">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 5 1036 990"
                class="h-5 w-5"
                stroke="currentColor"
            >
                <path
                    d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"
                />
            </svg>
        </a>
        <a href="mailto:amine.amellouk@outlook.com" aria-label="email">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
            </svg>
        </a>
    </div>

    <div class="flex justify-center flex-wrap article">
        <div>
            <div class="flex" style="color: #FEF9E6;">
                {#each data as { name }}
                    {#if name == 'all'}
                        {#if dataArt.length != dataArtAsCopy.length}
                            <button class="badge mx-2 my-2" on:click={filter(name)}>{name}</button>
                        {/if}
                    {:else}
                        <button class="badge mx-2 my-2" on:click={filter(name)}>{name}</button>
                    {/if}
                {/each}
            </div>
        </div>
    </div>

    <div class="divider" />

    <!-- <Search /> -->

    {#each [...dataArt].reverse() as article}
        <PostPreview title={article.title} topics={article.topics} publishedAt={article.published_at} author={article.author} description={article.description} slug={article.slug} image={article.image}/>
    {/each}
</div>