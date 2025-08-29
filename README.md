# Korean Language Learning Webapp

A modular, interactive Korean language learning platform built with SvelteKit. Each lesson combines structured learning with gamified practice in real-world scenarios.

## Project Vision

This webapp serves as both a functional learning tool and a development laboratory for testing different language learning approaches. Each lesson/game is self-contained and demonstrates a unique method of interactive language practice.

### Core Concepts

- **Scenario-based Learning**: Practice Korean in realistic contexts (markets, restaurants, etc.)
- **Progressive Complexity**: Start with simple phrases, build to complex interactions
- **AI-Enhanced Feedback**: LLM integration for personalized responses and image generation
- **Mobile-First**: Designed for accessibility across all devices
- **Modular Architecture**: Each lesson is an independent, portable experiment

## Technology Stack

- **Framework**: SvelteKit (full-stack)
- **Styling**: Tailwind CSS
- **AI Integration**: OpenRouter for LLMs, OpenAI for TTS/STT
- **Data**: JSON files → SQLite (when user progress needed)
- **Deployment**: Static files in `/static/` directory

## Project Structure

```
src/
├── routes/
│   ├── +layout.svelte           # Global layout
│   ├── +page.svelte             # Homepage with lesson links
│   ├── api/                     # Server-side API endpoints
│   │   ├── openrouter/+server.js
│   │   ├── speech/+server.js
│   │   └── images/+server.js
│   └── lessons/                 # Individual lesson packages
│       ├── market-ordering/
│       │   ├── +page.svelte     # Game UI
│       │   ├── +page.server.js  # Server logic
│       │   ├── lesson.json      # Content
│       │   └── vocabulary.json  # Word lists
│       └── restaurant-ordering/
│           └── ...
├── lib/
│   ├── components/              # Shared UI components
│   ├── server/                  # Server-only utilities
│   └── content/                 # Shared lesson content
└── static/                      # Images, audio, assets
```

## Lesson Package Structure

Each lesson is completely self-contained with:

- **Learning Objective**: Specific Korean skill being practiced
- **Vocabulary**: Words/phrases introduced in the lesson
- **Game Mechanics**: Interactive elements that make learning engaging
- **Progress Tracking**: Success metrics and completion criteria
- **Scaffolded Difficulty**: Gradual complexity increase within the lesson

### Example: Market Ordering Lesson

1. **Phase 1**: Simple color identification ("I want blue")
2. **Phase 2**: Fish names ("I want salmon") 
3. **Phase 3**: Complex orders ("I want 2 pounds of fresh salmon")
4. **Feedback**: AI-generated images of what user ordered

## Development Philosophy

### Modularity First
- Each lesson can be copied to a new project as a complete unit
- Shared components only created when 3+ lessons need them
- API endpoints organized by lesson/feature

### Experimentation Focus
- Each lesson tests different learning approaches
- Failed experiments preserved as learning examples
- Document what works/doesn't work for future lessons

### Progressive Enhancement
- Start with text + multiple choice
- Add speech features when ready
- Integrate AI capabilities gradually
- Always maintain fallback options

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation
```bash
npm create svelte@latest korean-learn-platform
cd korean-learn-platform
npm install
```

### Development
```bash
npm run dev
```

## AI Integration Roadmap

### Phase 1: Foundation
- [x] Basic SvelteKit structure
- [x] First lesson template
- [x] Mobile-responsive design

### Phase 2: Content
- [ ] 2-3 complete lesson packages
- [ ] JSON-based content system
- [ ] Lesson navigation

### Phase 3: AI Enhancement
- [ ] OpenRouter integration (server-side)
- [ ] Text-to-speech testing
- [ ] Speech-to-text evaluation
- [ ] AI image generation

### Phase 4: Optimization
- [ ] Performance optimization
- [ ] Advanced game mechanics
- [ ] Progress tracking (if needed)

## Lesson Ideas

### Implemented
- *None yet*

### Planned
- **Market Ordering**: Practice food vocabulary and quantities
- **Restaurant Dining**: Order meals and interact with staff
- **Shopping Clothes**: Describe preferences and sizes
- **Getting Directions**: Ask for and understand location help
- **Phone Conversations**: Handle common phone interactions

### Future Considerations
- Beginner/Intermediate/Advanced difficulty tags
- Skill focus tags (speaking, listening, reading)
- Topic tags (food, travel, business, casual)

## Contributing

This is a personal learning project, but the modular structure makes it easy to:

1. **Add New Lessons**: Follow the lesson package template
2. **Improve Existing Lessons**: Each is self-contained
3. **Test New Technologies**: Integration points are clearly defined
4. **Share Successful Patterns**: Document what works

## Notes for Future Development

- **Mobile Performance**: Test audio playback extensively on mobile devices
- **Korean TTS Quality**: Compare different providers for natural pronunciation
- **LLM Korean Understanding**: Test comprehension of Korean language learning context
- **User Experience**: Keep interactions simple and intuitive
- **Accessibility**: Ensure screen reader compatibility and clear visual hierarchy

---

*This project serves as both a functional Korean learning tool and a playground for exploring interactive language learning techniques. Each lesson is an experiment in making language practice more engaging and effective.*