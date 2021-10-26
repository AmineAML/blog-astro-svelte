<script>
  export let title;

  export let image;

  export let imageSource;

  export let topics;

  export let publishedAt;

  export let author;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formatDate = (date) => {
    var d = new Date(date);

    const month = months[d.getMonth()];

    const day = d.getDate();

    const year = d.getFullYear();

    return `${month} ${day}, ${year}`;
  };
</script>

<section class="flex flex-col title">
  <h1 class="text-4xl mb-10 font-bold mx-auto" itemprop="name">{title}</h1>
  <figure class="flex flex-col">
    <img src={image.formats.medium.url} class="w-full" alt={`Thumbnail for ${title} blog post`} itemprop="image" />
    <figcaption class="font-medium">
      <div class="text-gray-500 text-center text-xs" itemprop="license">{imageSource}</div>
    </figcaption>
  </figure>
  <div class="flex space-x-2 flex-wrap" itemprop="keywords">
    {#each topics as { name }}
      <div class="badge badge-ghost mx-2 my-2">{name}</div>
    {/each}
  </div>
  <div class="flex space-x-1 text-sm">
    <p>Posted on</p>
    <p itemprop="datePublished">{formatDate(publishedAt)}</p>
    <p>by</p>
    <p itemprop="author">{author.name}</p>
  </div>
</section>
