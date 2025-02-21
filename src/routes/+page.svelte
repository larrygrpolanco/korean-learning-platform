<script>
  // Define our available courses
  const courses = [
    {
      id: 'korean',
      title: 'Korean',
      description: 'Learn Korean through comprehensive audio lessons and exercises'
    },
    {
      id: 'mandarin',
      title: 'Mandarin',
      description: 'Master Mandarin with structured lessons and practice materials'
    }
  ];
</script>

<main class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold mb-8">Language Learning Resources</h1>
  
  <div class="grid md:grid-cols-2 gap-6">
    {#each courses as course}
      <a 
        href="/{course.id}"
        class="block p-6 border rounded-lg hover:shadow-lg transition-shadow"
      >
        <h2 class="text-xl font-semibold mb-2">{course.title}</h2>
        <p class="text-gray-600">{course.description}</p>
      </a>
    {/each}
  </div>
</main>