<script>
  import AudioPlayer from '$lib/components/AudioPlayer.svelte';
  export let data;

  // This would come from your JSON data
  // Example of how a unit's content could be structured
  const unitContent = {
    title: 'Basic Greetings',
    sections: [
      {
        type: 'comprehension',
        title: 'Listening Practice',
        description: 'Listen to the following dialogue and practice the pronunciation.',
        audioSrc: '/audio/korean/module-1/unit-1/dialogue-1.mp3',
        images: [
          {
            src: '/images/textbook/unit-1-page-1.jpg',
            alt: 'Textbook page showing basic greetings'
          }
        ]
      },
      {
        type: 'practice',
        title: 'Speaking Practice',
        description: 'Repeat after the audio to practice your pronunciation.',
        audioSrc: '/audio/korean/module-1/unit-1/practice-1.mp3'
      }
    ]
  };
</script>

<main class="container mx-auto px-4 py-8">
  <!-- Navigation breadcrumb -->
  <div class="text-sm mb-4">
    <a href="/" class="text-blue-600 hover:underline">Home</a>
    <span class="mx-2">›</span>
    <a href="/{data.course}" class="text-blue-600 hover:underline">
      {data.course.charAt(0).toUpperCase() + data.course.slice(1)}
    </a>
    <span class="mx-2">›</span>
    <a href="/{data.course}/{data.module}" class="text-blue-600 hover:underline">
      {data.module}
    </a>
    <span class="mx-2">›</span>
    <span>{data.unit}</span>
  </div>

  <h1 class="text-3xl font-bold mb-8">{unitContent.title}</h1>

  <div class="space-y-12">
    {#each unitContent.sections as section}
      <section class="border rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4">{section.title}</h2>
        <p class="text-gray-600 mb-6">{section.description}</p>

        <!-- Audio player component we created earlier -->
        <AudioPlayer 
          src={section.audioSrc} 
          title={`${section.type.charAt(0).toUpperCase() + section.type.slice(1)} Audio`}
        />

        <!-- Display images if they exist -->
        {#if section.images}
          <div class="mt-6 space-y-4">
            {#each section.images as image}
              <img 
                src={image.src} 
                alt={image.alt}
                class="max-w-full rounded-lg shadow-lg"
              />
            {/each}
          </div>
        {/if}
      </section>
    {/each}
  </div>
</main>