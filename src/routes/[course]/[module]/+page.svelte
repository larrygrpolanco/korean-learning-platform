<script>
  export let data;

  // This would eventually come from your JSON data file
  // Each unit represents a lesson with its materials
  const units = [
    {
      id: 'unit-1',
      title: 'Introduction and Greetings',
      sections: [
        'Basic Greetings',
        'Formal vs Informal Speech',
        'Practice Dialogues'
      ]
    },
    {
      id: 'unit-2',
      title: 'Numbers and Counting',
      sections: [
        'Cardinal Numbers',
        'Counting Objects',
        'Practice Exercises'
      ]
    }
  ];
</script>

<main class="container mx-auto px-4 py-8">
  <!-- Navigation breadcrumb helps users know where they are -->
  <div class="text-sm mb-4">
    <a href="/" class="text-blue-600 hover:underline">Home</a>
    <span class="mx-2">›</span>
    <a href="/{data.course}" class="text-blue-600 hover:underline">
      {data.course.charAt(0).toUpperCase() + data.course.slice(1)}
    </a>
    <span class="mx-2">›</span>
    <span>{data.module}</span>
  </div>

  <h1 class="text-3xl font-bold mb-8">
    Module: {data.module}
  </h1>

  <div class="space-y-6">
    {#each units as unit}
      <div class="border rounded-lg p-6 hover:shadow-lg transition-shadow">
        <h2 class="text-xl font-semibold mb-4">{unit.title}</h2>
        
        <ul class="space-y-2 mb-4">
          {#each unit.sections as section}
            <li class="text-gray-600">• {section}</li>
          {/each}
        </ul>

        <a 
          href="/{data.course}/{data.module}/{unit.id}"
          class="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Start Unit
        </a>
      </div>
    {/each}
  </div>
</main>