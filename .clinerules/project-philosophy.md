# Korean Language Learning Webapp - Cline Rules

## Project Philosophy

This is a **modular Korean language learning platform** where each lesson and game is self-contained and can serve as an independent learning experiment. The project prioritizes:

- **Modularity**: Each lesson/game package is independent and portable
- **Simplicity**: Clean, minimal implementations over feature-rich complexity
- **Experimentation**: Each module is a playground for testing new language learning approaches
- **Mobile-first**: Everything must work seamlessly on mobile devices

## Architecture Principles

### Stack Requirements
- **Full-stack**: SvelteKit with server-side API routes (`+page.server.js`, `src/routes/api/`)
- **Database**: Start with JSON files, migrate to SQLite only when user progress tracking is needed
- **File Storage**: Static files in `/static/` directory, no external storage initially
- **AI Integration**: Server-side API calls to OpenRouter, OpenAI TTS/STT, image generation
- **No User Auth**: Keep it open and accessible during development phase

### Modular Structure
Each lesson/game must be completely self-contained:

```
src/routes/lessons/
├── market-ordering/           # Lesson package
│   ├── +page.svelte          # Game interface
│   ├── +page.server.js       # Server-side logic & API calls
│   ├── lesson.json           # Lesson content
│   ├── vocabulary.json       # Word lists
│   └── game-logic.js         # Client-side game logic
├── restaurant-ordering/       # Another lesson package
│   ├── +page.svelte
│   ├── +page.server.js
│   ├── lesson.json
│   └── ...
```

### API Organization
SvelteKit server routes should mirror the modular structure:
- `/src/routes/api/lessons/[lesson-name]/` for lesson-specific endpoints
- `/src/routes/api/speech/` for shared speech functionality  
- `/src/routes/api/images/` for AI image generation
- Each lesson can have custom API endpoints in `+page.server.js` without affecting others

## Development Guidelines

### File Organization Rules
1. **One concept per file**: Avoid giant components or utility files
2. **Co-location**: Keep related files (component, styles, logic) together
3. **Lesson isolation**: A lesson should be copyable to another project as a complete unit
4. **Shared components**: Only create shared components when 3+ lessons need the same functionality

### Code Quality Standards
- **Mobile-first responsive design**: Test every component on mobile viewport first
- **Minimal dependencies**: Question every new package - can this be done with vanilla JS/CSS?
- **Server-side AI calls**: Keep API keys and LLM logic in `+page.server.js` or `/src/routes/api/`
- **Clean separation**: Keep UI logic, game logic, and server calls in separate functions/files

### AI Integration Preparation
Structure code assuming these integrations will come later:
- **OpenRouter integration** for flexible LLM switching
- **Speech-to-text and text-to-speech** APIs
- **Image generation** based on user responses
- **Server-side API key management** (never client-side)

## Content Management

### Lesson Structure
Each lesson package should include:
- **Learning objective**: What Korean skill is being practiced
- **Vocabulary list**: Words/phrases introduced
- **Game mechanics**: How the learning is gamified
- **Progress tracking**: What constitutes completion/success
- **Difficulty scaffolding**: How complexity increases within the lesson

### File-based Content
- Use JSON for structured content (vocabulary, phrases, game data)
- Use Markdown for instructional text
- Keep content files small and focused
- Name files descriptively (`market-fish-names.json`, not `data.json`)

## Testing and Iteration

### Rapid Prototyping
- Build the simplest version first (text + multiple choice)
- Test core game mechanics before adding speech/AI features  
- Each lesson should work as a standalone proof-of-concept

### Technology Testing
Prioritize testing these integration points early:
- Korean TTS quality with different APIs
- Korean STT accuracy with learner pronunciation
- LLM understanding of Korean language learning context
- Mobile performance with audio playback

## Future-Proofing

### Tagging System Preparation
Structure lessons to easily add metadata:
```json
{
  "lesson": "market-ordering",
  "difficulty": "beginner",
  "skills": ["speaking", "vocabulary"],
  "topics": ["food", "shopping"],
  "duration": "10-15 minutes"
}
```

### Portfolio Growth
- Each lesson should demonstrate a different learning approach
- Document what worked/didn't work in each lesson's README
- Keep successful patterns as templates for new lessons
- Failed experiments should be preserved as learning examples

## Implementation Priorities

1. **Core Structure**: Set up SvelteKit with first simple lesson using server routes
2. **Mobile Optimization**: Ensure responsive design works perfectly
3. **Lesson Template**: Create reusable pattern with `+page.svelte` and `+page.server.js`
4. **Server-side AI Integration**: Implement OpenRouter/OpenAI calls in server routes
5. **Content Pipeline**: Establish workflow for creating lesson content

Remember: This is a learning laboratory. Each lesson/game is an experiment in language learning UX. Prioritize clean, documented experiments over comprehensive features.