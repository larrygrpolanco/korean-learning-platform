# Tech Context - Korean Language Learning Webapp

## Technology Stack

### Core Framework
- **SvelteKit 2.22.0**: Full-stack framework with server-side rendering
- **Svelte 5.0**: Component framework with reactive state management
- **Vite 7.0.4**: Build tool and development server
- **Node.js**: Runtime environment (18+ required)

### Styling & UI
- **Tailwind CSS 4.0**: Utility-first CSS framework
- **@tailwindcss/vite**: Vite integration for Tailwind
- **Mobile-First Design**: Responsive breakpoints (320px, 768px, 1024px)
- **Touch-Optimized**: 44px minimum touch targets

### Development Tools
- **ESLint 9.18.0**: Code linting with Svelte plugin
- **Prettier 3.4.2**: Code formatting with Svelte and Tailwind plugins
- **TypeScript**: Optional (jsconfig.json configured for JS with types)

### Planned AI Integrations
- **OpenRouter**: LLM API aggregation service
- **OpenAI TTS**: Text-to-speech for Korean pronunciation
- **OpenAI STT**: Speech-to-text for pronunciation practice
- **Image Generation**: AI-generated visual feedback

## Development Environment

### Project Structure
```
korean-learning-platform/
├── korean-learn-platform/          # SvelteKit project
│   ├── src/
│   │   ├── routes/                  # SvelteKit routes
│   │   ├── lib/                     # Shared components and utilities
│   │   ├── app.html                 # HTML template
│   │   └── app.css                  # Global styles (Tailwind import)
│   ├── static/                      # Static assets
│   ├── package.json                 # Dependencies and scripts
│   └── vite.config.js              # Vite configuration
├── memory-bank/                     # Documentation system
└── .clinerules/                     # Development guidelines
```

### Development Scripts
```json
{
  "dev": "vite dev",           # Development server
  "build": "vite build",       # Production build
  "preview": "vite preview",   # Preview production build
  "format": "prettier --write .", # Format code
  "lint": "prettier --check . && eslint ." # Lint code
}
```

### Configuration Files
- **svelte.config.js**: SvelteKit configuration with auto adapter
- **vite.config.js**: Vite build configuration
- **tailwind.config.js**: Tailwind CSS configuration (to be created)
- **eslint.config.js**: ESLint rules and Svelte integration
- **jsconfig.json**: JavaScript project configuration with path mapping

## Data Management

### Content Storage Strategy
- **Phase 1**: JSON files for lesson content and vocabulary
- **Phase 2**: SQLite database when user progress tracking needed
- **Static Assets**: Audio files, images in `/static/` directory
- **No External Database**: Keep deployment simple initially

### File Organization
```
src/routes/lessons/[lesson-name]/
├── lesson.json           # Lesson metadata and structure
├── vocabulary.json       # Korean vocabulary with pronunciations
├── +page.svelte         # Lesson UI components
└── +page.server.js      # Server-side data loading
```

### Content Structure Standards
```json
// lesson.json
{
  "id": "lesson-identifier",
  "title": "Human-readable title",
  "description": "Brief lesson description",
  "difficulty": "beginner|intermediate|advanced",
  "estimatedTime": "10-15 minutes",
  "tags": ["vocabulary", "speaking", "food"],
  "phases": [...]
}

// vocabulary.json
{
  "category": [
    {
      "korean": "한글",
      "romanization": "han-geul",
      "english": "Korean alphabet",
      "audioFile": "/audio/category/filename.mp3",
      "difficulty": 1
    }
  ]
}
```

## API Integration Architecture

### Server Route Organization
```
src/routes/api/
├── openrouter/
│   └── +server.js        # LLM completions
├── speech/
│   ├── tts/+server.js    # Text-to-speech
│   └── stt/+server.js    # Speech-to-text
└── images/
    └── generate/+server.js # AI image generation
```

### Environment Variables
```bash
# .env (not committed to git)
OPENROUTER_API_KEY=your_key_here
OPENAI_API_KEY=your_key_here
PUBLIC_APP_NAME=Korean Learning Platform
```

### API Call Patterns
- **Server-Side Only**: All external API calls happen in server routes
- **Error Handling**: Graceful degradation with fallback content
- **Rate Limiting**: Implement basic rate limiting for API calls
- **Caching**: Cache responses when appropriate

## Mobile Optimization

### Responsive Design Strategy
- **Base**: Mobile-first (320px minimum width)
- **Tablet**: 768px+ (larger touch targets, more content per screen)
- **Desktop**: 1024px+ (multi-column layouts, keyboard shortcuts)

### Performance Targets
- **First Contentful Paint**: < 1.5 seconds on 3G
- **Largest Contentful Paint**: < 2.5 seconds on 3G
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Touch Interaction Standards
- **Minimum Touch Target**: 44px × 44px
- **Touch Feedback**: Visual feedback within 100ms
- **Gesture Support**: Swipe navigation where appropriate
- **Accessibility**: Screen reader compatible

## Build and Deployment

### Build Configuration
- **Adapter**: @sveltejs/adapter-auto (detects deployment platform)
- **Static Generation**: Pre-render static pages where possible
- **Code Splitting**: Automatic route-based splitting
- **Asset Optimization**: Vite handles CSS/JS minification

### Deployment Strategy
- **Static Hosting**: Vercel, Netlify, or similar
- **Server Routes**: Serverless functions for API endpoints
- **Asset CDN**: Static files served from CDN
- **Environment**: Production environment variables

## Development Workflow

### Code Quality
- **Formatting**: Prettier with Svelte and Tailwind plugins
- **Linting**: ESLint with Svelte-specific rules
- **Type Safety**: JSDoc comments for type hints
- **Component Testing**: Vitest for unit tests (to be added)

### Git Workflow
- **Main Branch**: Production-ready code
- **Feature Branches**: Individual lesson development
- **Commit Messages**: Conventional commits format
- **Documentation**: Update memory bank with significant changes

### Testing Strategy
- **Manual Testing**: Mobile device testing for each lesson
- **Component Testing**: Isolated component behavior
- **Integration Testing**: Complete lesson flows
- **Performance Testing**: Mobile performance monitoring

## Security Considerations

### API Security
- **Server-Side Keys**: All API keys stored server-side only
- **Rate Limiting**: Prevent API abuse
- **Input Validation**: Sanitize user inputs
- **CORS**: Proper cross-origin resource sharing

### Content Security
- **Static Assets**: Serve from trusted CDN
- **User Input**: Sanitize any user-generated content
- **Audio Files**: Validate file types and sizes
- **XSS Prevention**: Proper content escaping

## Future Technical Considerations

### Scalability Planning
- **Database Migration**: JSON → SQLite → PostgreSQL path
- **Caching Layer**: Redis for session and content caching
- **CDN Integration**: Global asset distribution
- **Monitoring**: Application performance monitoring

### AI Integration Expansion
- **Model Switching**: Easy switching between AI providers
- **Prompt Engineering**: Systematic prompt optimization
- **Response Caching**: Cache AI responses for common queries
- **Fallback Strategies**: Graceful degradation when AI unavailable

### Internationalization
- **Multi-Language Support**: Framework for additional languages
- **RTL Support**: Right-to-left language compatibility
- **Locale-Specific Content**: Cultural adaptation capabilities
- **Audio Localization**: Native speaker recordings

## Development Dependencies

### Current Package Versions
```json
{
  "@sveltejs/kit": "^2.22.0",
  "@sveltejs/vite-plugin-svelte": "^6.0.0",
  "svelte": "^5.0.0",
  "tailwindcss": "^4.0.0",
  "vite": "^7.0.4",
  "eslint": "^9.18.0",
  "prettier": "^3.4.2"
}
```

### Planned Additions
- **@testing-library/svelte**: Component testing
- **vitest**: Unit testing framework
- **playwright**: End-to-end testing
- **@sveltejs/adapter-vercel**: Vercel deployment
