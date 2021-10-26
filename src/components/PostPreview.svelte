<script>
    	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	const formatDate = (date) => {
		var d = new Date(date);

		const month = months[d.getMonth()];

		const day = d.getDate();

		const year = d.getFullYear();

		return `${month} ${day}, ${year}`;
	};

    export let title

    export let topics

    export let publishedAt

    export let author

    export let description

    export let slug

    export let image
</script>

<div class="card bordered shadow-2xl mb-20">
    <div class="flex space-x-2 flex-wrap article">
        {#each topics as { name }}
            <div class="badge badge-ghost mx-2 my-2 cursor-default">{name}</div>
        {/each}
    </div>
    <figure class="flex">
        <img src={image.formats.medium.url} alt="blog post" class="w-full h-full" />
    </figure>
    <div class="card-body">
        <div class="flex space-x-1 article text-xs">
            <p>Posted on</p>
            <p>{formatDate(publishedAt)}</p>
            <p>by</p>
            <p>{author.name}</p>
        </div>
        <h2 class="card-title title my-2 text-xl">{title}</h2>
        <p class="flex card-body">{description}</p>
        <div class="card-actions">
            <a href={`/posts/${slug}`} class="text-gray-500">read more</a>
        </div>
    </div>
</div>