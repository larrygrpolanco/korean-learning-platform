<!-- src/lib/components/Header.svelte -->
<script>
  import { page } from '$app/stores';
  
  // Get current path segments
  $: pathSegments = $page.url.pathname.split('/').filter(Boolean);
  $: [currentCourse, currentModule, currentUnit] = pathSegments;
</script>

<nav class="border-b px-4 py-3">
  <div class="container mx-auto flex items-center">
    <!-- Home button -->
    <a href="/" class="text-blue-600 hover:text-blue-800">Home</a>

    <!-- Breadcrumbs -->
    {#if pathSegments.length > 0}
      <div class="ml-4 flex items-center">
        {#if currentCourse}
          <span class="mx-2 text-gray-500">/</span>
          <a href="/{currentCourse}" class="text-blue-600 hover:text-blue-800 capitalize">
            {currentCourse}
          </a>
        {/if}
        {#if currentModule}
          <span class="mx-2 text-gray-500">/</span>
          <a href="/{currentCourse}/{currentModule}" class="text-blue-600 hover:text-blue-800">
            {currentModule}
          </a>
        {/if}
        {#if currentUnit}
          <span class="mx-2 text-gray-500">/</span>
          <span class="text-gray-600">{currentUnit}</span>
        {/if}
      </div>
    {/if}
  </div>
</nav>