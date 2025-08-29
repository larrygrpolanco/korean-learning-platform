# Active Context - Korean Language Learning Webapp

## Current Work Focus

### Primary Objective
Building the foundational structure for a modular Korean language learning webapp with the first lesson: Market Ordering at Noryangjin Fish Market.

### Immediate Tasks
1. **Complete Memory Bank Setup** - Documenting project architecture and requirements
2. **Create Project Structure** - Set up the modular lesson architecture
3. **Build Homepage** - Simple lesson navigation interface
4. **Implement First Lesson** - Market Ordering with color and fish vocabulary
5. **Create Shared Components** - Basic UI components for reuse across lessons

## Recent Progress

### Completed
- ✅ **Project Analysis**: Examined existing SvelteKit setup with Tailwind CSS
- ✅ **Memory Bank Creation**: Created comprehensive documentation structure
  - `projectbrief.md` - Core requirements and mission
  - `productContext.md` - User experience goals and content strategy
  - `systemPatterns.md` - Architecture patterns and component design
  - `techContext.md` - Technology stack and development environment

### Current Status
- **SvelteKit Project**: Basic structure exists with Tailwind CSS configured
- **Documentation**: Comprehensive memory bank established
- **Next Phase**: Ready to implement the actual lesson structure and components

## Active Decisions and Considerations

### Architecture Decisions Made
1. **Modular Lesson Structure**: Each lesson is completely self-contained in its own route
2. **JSON-First Content**: Vocabulary and lesson data stored in JSON files
3. **Server-Side AI Integration**: API calls handled in server routes only
4. **Mobile-First Design**: Touch-optimized interface with 44px minimum targets
5. **No Authentication**: Keep platform open and accessible initially

### Design Patterns Established
- **Component Hierarchy**: UI components → Lesson components → Layout components
- **State Management**: Lesson-specific state, no global stores
- **Content Structure**: Standardized JSON schemas for lessons and vocabulary
- **API Organization**: Structured server routes for future AI integration

### Key Technical Choices
- **Tailwind CSS 4.0**: Utility-first styling with mobile-first approach
- **Svelte 5.0**: Latest reactive framework features
- **File-Based Routing**: SvelteKit's automatic route generation
- **Static Asset Strategy**: Audio and images served from `/static/` directory

## Next Steps

### Immediate Implementation Plan

#### 1. Project Structure Setup
- Create API route placeholders (`/src/routes/api/`)
- Set up shared component directories (`/src/lib/components/`)
- Create lesson directory structure (`/src/routes/lessons/`)

#### 2. Shared Components
- **Button.svelte**: Primary/secondary button styles
- **Card.svelte**: Content container component
- **LessonCard.svelte**: Homepage lesson preview cards
- **Progress.svelte**: Progress indicator component

#### 3. Homepage Implementation
- Replace default SvelteKit homepage
- Create lesson grid layout
- Add navigation to first lesson
- Implement mobile-responsive design

#### 4. Market Ordering Lesson
- Create lesson package structure
- Implement vocabulary JSON files (colors and fish)
- Build lesson UI with multiple choice interactions
- Add basic progress tracking within lesson

#### 5. Content Creation
- **Color Vocabulary**: 파란색 (blue), 빨간색 (red), 초록색 (green), 노란색 (yellow)
- **Fish Vocabulary**: 연어 (salmon), 참치 (tuna), 광어 (flounder), 고등어 (mackerel)
- **Lesson Phases**: Color practice → Fish practice → Combined ordering

## Important Patterns and Preferences

### Code Organization
- **One Concept Per File**: Avoid large, multi-purpose files
- **Co-location**: Keep related files together in lesson packages
- **Descriptive Naming**: Clear, specific file and component names
- **Minimal Dependencies**: Question every new package addition

### UI/UX Principles
- **Mobile-First**: Design for touch interactions first
- **Clear Hierarchy**: Obvious information structure
- **Immediate Feedback**: Visual responses to user actions
- **Progressive Disclosure**: Reveal complexity gradually

### Content Standards
- **Cultural Authenticity**: Realistic Korean social contexts
- **Practical Vocabulary**: Words learners will actually use
- **Clear Pronunciation**: Romanization for all Korean text
- **Contextual Learning**: Every phrase has clear real-world application

## Learnings and Project Insights

### Key Realizations
1. **Modularity is Critical**: Each lesson must be truly independent for experimentation
2. **Mobile Performance Matters**: Korean learners often study on phones during commutes
3. **Audio is Essential**: Pronunciation is crucial for Korean language learning
4. **Simple Beats Complex**: Start with basic interactions, add sophistication later

### Technical Insights
- **SvelteKit Server Routes**: Perfect for AI API integration without exposing keys
- **Tailwind CSS 4.0**: New version provides excellent mobile-first utilities
- **JSON Content Strategy**: Flexible enough for experimentation, structured enough for consistency
- **Component Isolation**: Shared components should only be created when 3+ lessons need them

### Content Strategy Insights
- **Scenario-Based Learning**: More engaging than abstract vocabulary drills
- **Progressive Complexity**: Build confidence with simple successes first
- **Cultural Context**: Korean social norms should be embedded naturally
- **Immediate Application**: Users should understand when/where to use each phrase

## Development Environment Notes

### Current Setup
- **Working Directory**: `/Users/larrygrpolanco/Documents/GitHub/korean-learning-platform`
- **Project Location**: `korean-learn-platform/` subdirectory
- **Memory Bank**: Root-level documentation system
- **Git Repository**: Initialized with proper .gitignore

### Development Workflow
1. **Memory Bank First**: Document before implementing
2. **Mobile Testing**: Test every component on mobile viewport
3. **Incremental Building**: One lesson component at a time
4. **Documentation Updates**: Keep memory bank current with changes

## Risk Considerations

### Technical Risks
- **Mobile Performance**: Audio playback and touch responsiveness
- **AI Integration Complexity**: Server-side API management
- **Content Scalability**: JSON file management as lessons grow
- **Cross-Device Compatibility**: Ensuring consistent experience

### Mitigation Strategies
- **Progressive Enhancement**: Start simple, add complexity gradually
- **Fallback Options**: Graceful degradation when features fail
- **Performance Monitoring**: Regular mobile device testing
- **Modular Architecture**: Isolate failures to individual lessons

## Success Metrics for Current Phase

### Technical Success
- [ ] Homepage loads and displays lesson grid
- [ ] Market Ordering lesson is fully functional
- [ ] Mobile responsiveness works on 320px+ screens
- [ ] All components follow established patterns

### User Experience Success
- [ ] Users can navigate from homepage to lesson in < 30 seconds
- [ ] Lesson interactions feel responsive and intuitive
- [ ] Korean vocabulary is clearly presented with pronunciation
- [ ] Progress through lesson phases feels natural

### Code Quality Success
- [ ] Components are reusable and well-documented
- [ ] Lesson structure can be easily replicated for new lessons
- [ ] Code follows established patterns and conventions
- [ ] Memory bank documentation stays current with implementation
