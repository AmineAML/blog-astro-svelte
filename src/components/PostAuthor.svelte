<script>
  export let author;
</script>

<section class="card lg:card-side bordered flex px-2" style="background-color: #bec298;" itemscope itemtype="https://schema.org/Person">
  <figure class="flex">
    <div class="avatar m-auto">
      <div class="mb-8 rounded-full w-24 h-24">
        <img src={author.picture.formats.small.url} alt={`Photo of ${author.name}`} itemprop="image" />
      </div>
    </div>
  </figure>
  <div class="card-body space-y-2">
    <h1 class="flex uppercase text-gray-600">About the author</h1>
    <h2 class="text-cyan-600 text-lg">
      <span itemprop="name">{author.name}</span>
    </h2>
    <p>{author.about}</p>
    <div class="card-actions">
      <a href={author.website} aria-label="portfolio" itemprop="url">
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
      <a href={author.linkedin} aria-label="linkedin" itemprop="sameAs">
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
      <a href={"mailto:" + author.email} aria-label="email" itemprop="email">
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
  </div>
</section>
