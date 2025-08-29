# Korean Language Learning Webapp - Project Brief

## Project Overview

A modular, interactive Korean language learning platform built with SvelteKit that serves as both a functional learning tool and a development laboratory for testing different language learning approaches.

## Core Mission

Create a mobile-first Korean language learning webapp where each lesson/game is completely self-contained and demonstrates unique interactive language practice methods in real-world scenarios.

## Key Requirements

### Technical Stack
- **Framework**: SvelteKit (full-stack with server routes)
- **Styling**: Tailwind CSS v4 (minimal, mobile-first)
- **AI Integration**: OpenRouter for LLMs, OpenAI for TTS/STT (server-side only)
- **Data Storage**: JSON files initially, SQLite when user progress tracking needed
- **File Storage**: Static files in `/static/` directory
- **Authentication**: None initially - keep open and accessible

### Architecture Principles
- **Modularity**: Each lesson is completely self-contained and portable
- **Simplicity**: Clean, minimal implementations over feature-rich complexity
- **Experimentation**: Each module tests different language learning approaches
- **Mobile-First**: Everything must work seamlessly on mobile devices
- **Progressive Enhancement**: Start simple, add complexity gradually

### Content Structure
- **Scenario-based Learning**: Practice Korean in realistic contexts
- **Progressive Complexity**: Simple phrases → complex interactions
- **Gamified Practice**: Interactive elements that make learning engaging
- **Structured Vocabulary**: JSON-based word lists and lesson content

## Success Criteria

### Phase 1 (Foundation)
- [ ] SvelteKit project with proper structure
- [ ] Homepage with lesson navigation
- [ ] First working lesson (Market Ordering)
- [ ] Mobile-responsive design
- [ ] Clean, minimal UI that's easy to iterate

### Phase 2 (Content)
- [ ] 2-3 complete lesson packages
- [ ] JSON-based content management system
- [ ] Shared UI components (Button, Card, etc.)
- [ ] API structure for future AI integration

### Phase 3 (AI Enhancement)
- [ ] Server-side OpenRouter integration
- [ ] Text-to-speech testing and implementation
- [ ] Speech-to-text evaluation
- [ ] AI image generation based on user responses

## First Lesson Specification

**Market Ordering at Noryangjin Fish Market**
- **Phase 1**: Color vocabulary (파란색, 빨간색) with "I want blue" patterns
- **Phase 2**: Fish names (연어, 참치, 광어) with ordering practice
- **Game Mechanics**: Multiple choice selection, Korean pronunciation
- **Progress Tracking**: Completion of vocabulary sections within lesson
- **Mobile Interface**: Touch-friendly buttons, clear typography

## Non-Goals (Initially)
- User authentication or accounts
- Complex progress tracking across sessions
- Advanced animations or complex UI
- External API dependencies beyond AI services
- Database setup (start with JSON files)

## Future Vision
- Portfolio of diverse learning approaches
- Each lesson demonstrates different UX patterns
- Failed experiments preserved as learning examples
- Successful patterns become templates for new lessons
- Tagging system for difficulty, skills, topics
