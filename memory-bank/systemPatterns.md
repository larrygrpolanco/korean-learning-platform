# System Patterns - Korean Language Learning Webapp

## Architecture Overview

### SvelteKit Full-Stack Pattern
- **Frontend**: Svelte components with reactive state management
- **Backend**: SvelteKit server routes (`+page.server.js`, `/src/routes/api/`)
- **Data Flow**: Server-side data loading → client-side interactivity
- **API Integration**: Server routes handle external API calls (OpenRouter, OpenAI)

### Modular Lesson Architecture

#### Lesson Package Structure
Each lesson is completely self-contained:
```
src/routes/lessons/[lesson-name]/
├── +page.svelte          # UI components and client logic
├── +page.server.js       # Server-side data loading and API calls
├── lesson.json           # Lesson metadata and structure
├── vocabulary.json       # Korean words, phrases, pronunciations
└── game-logic.js         # Client-side game mechanics (optional)
```

#### Lesson Isolation Principles
- **No Cross-Dependencies**: Lessons don't import from each other
- **Shared Components Only**: Use `/src/lib/components/` for 3+ lesson reuse
- **Independent Content**: Each lesson's JSON files are self-contained
- **Portable Design**: Entire lesson folder can be copied to new project

### Data Management Patterns

#### JSON-First Content Strategy
```json
// lesson.json structure
{
  "id": "market-ordering",
  "title": "Fish Market Ordering",
  "description": "Learn to order fish at Noryangjin Market",
  "difficulty": "beginner",
  "estimatedTime": "10-15 minutes",
  "phases": [
    {
      "id": "colors",
      "title": "Color Vocabulary",
      "type": "vocabulary-practice"
    },
    {
      "id": "fish-names", 
      "title": "Fish Names",
      "type": "scenario-practice"
    }
  ]
}
```

```json
// vocabulary.json structure
{
  "colors": [
    {
      "korean": "파란색",
      "romanization": "pa-ran-saek",
      "english": "blue",
      "audioFile": "/audio/colors/blue.mp3"
    }
  ],
  "fish": [
    {
      "korean": "연어",
      "romanization": "yeon-eo", 
      "english": "salmon",
      "audioFile": "/audio/fish/salmon.mp3"
    }
  ]
}
```

#### Server-Side Data Loading
```javascript
// +page.server.js pattern
export async function load() {
  const lesson = await import('./lesson.json');
  const vocabulary = await import('./vocabulary.json');
  
  return {
    lesson: lesson.default,
    vocabulary: vocabulary.default
  };
}
```

### Component Architecture

#### Shared Component Hierarchy
```
src/lib/components/
├── ui/                   # Basic UI elements
│   ├── Button.svelte     # Primary/secondary button styles
│   ├── Card.svelte       # Content containers
│   └── Progress.svelte   # Progress indicators
├── lesson/               # Lesson-specific components
│   ├── LessonCard.svelte # Homepage lesson preview
│   ├── VocabCard.svelte  # Vocabulary practice card
│   └── ChoiceButton.svelte # Multiple choice options
└── layout/               # Layout components
    ├── Header.svelte     # Site navigation
    └── Footer.svelte     # Site footer
```

#### Component Design Principles
- **Single Responsibility**: Each component has one clear purpose
- **Prop-Driven**: Configuration through props, not internal state
- **Mobile-First**: Touch targets ≥ 44px, readable typography
- **Accessibility**: Proper ARIA labels, keyboard navigation

### State Management Patterns

#### Lesson State Pattern
```javascript
// Client-side lesson state management
let currentPhase = 0;
let score = 0;
let completedVocabulary = [];
let userAnswers = [];

// Reactive progress calculation
$: progress = (completedVocabulary.length / totalVocabulary.length) * 100;
$: canAdvance = completedVocabulary.length >= requiredForAdvancement;
```

#### No Global State
- Each lesson manages its own state independently
- No shared stores between lessons
- Progress tracking within lesson only (no persistence initially)

### API Integration Patterns

#### Server Route Organization
```
src/routes/api/
├── openrouter/
│   └── +server.js        # LLM API calls
├── speech/
│   ├── tts/+server.js    # Text-to-speech
│   └── stt/+server.js    # Speech-to-text
└── images/
    └── generate/+server.js # AI image generation
```

#### API Call Pattern
```javascript
// Server-side API integration
export async function POST({ request }) {
  const { text, language } = await request.json();
  
  // Server-side API call with error handling
  try {
    const response = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'tts-1',
        voice: 'alloy',
        input: text
      })
    });
    
    return new Response(response.body);
  } catch (error) {
    return new Response(JSON.stringify({ error: 'TTS failed' }), {
      status: 500
    });
  }
}
```

### Mobile-First Design Patterns

#### Responsive Layout Strategy
- **Base Design**: Mobile (320px+)
- **Breakpoints**: Tablet (768px+), Desktop (1024px+)
- **Touch Targets**: Minimum 44px × 44px
- **Typography**: 16px base, 1.5 line height

#### Touch Interaction Patterns
```svelte
<!-- Large, clear touch targets -->
<button 
  class="w-full min-h-[44px] p-4 text-lg font-medium rounded-lg
         bg-blue-500 text-white active:bg-blue-600
         transition-colors duration-150"
  on:click={handleChoice}
>
  {choice.korean} ({choice.english})
</button>
```

### Performance Patterns

#### Lazy Loading Strategy
- Lessons loaded on-demand via SvelteKit routing
- Audio files loaded when needed
- Images optimized and served from `/static/`

#### Bundle Optimization
- Each lesson is a separate route (automatic code splitting)
- Shared components bundled separately
- Minimal external dependencies

### Error Handling Patterns

#### Graceful Degradation
- Audio playback failures → show romanization
- API failures → fallback to static content
- Network issues → offline-capable lesson content

#### User Feedback
- Loading states for all async operations
- Clear error messages with recovery options
- Progress preservation during errors

### Testing Patterns

#### Component Testing Strategy
- Test lesson components in isolation
- Mock server data for consistent testing
- Test mobile viewport interactions

#### Integration Testing
- Test complete lesson flows
- Verify API integration points
- Test cross-device compatibility

### Future Architecture Considerations

#### Scalability Patterns
- Database migration path (JSON → SQLite)
- User authentication integration points
- Multi-language content support
- Offline capability preparation

#### AI Integration Expansion
- Modular AI service abstraction
- A/B testing framework for different AI approaches
- Performance monitoring for AI response times
- Fallback strategies for AI service failures
