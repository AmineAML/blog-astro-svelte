<script>
  export let quote;

  export let quoteBy;
</script>

<section class="flex flex-col">
  <div class="flex mx-auto pt-10">Quote of the post</div>
  <div class="w-full mb-10">
    <div class="text-3xl text-left leading-tight h-3 text-gray-600">“</div>
    <blockquote class="text-sm text-gray-600 text-center px-5" itemprop="citation">{quote}</blockquote>
    <div class="text-3xl text-right leading-tight h-3 -mt-3 text-gray-600">
      ”
    </div>
  </div>
  <div class="w-full">
    <p class="text-md font-bold text-center text-gray-600">
      - {quoteBy}
    </p>
  </div>
</section>
