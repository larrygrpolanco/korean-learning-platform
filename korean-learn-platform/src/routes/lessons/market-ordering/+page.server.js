// Server-side data loading for Market Ordering lesson
import lessonData from './lesson.json';
import vocabularyData from './vocabulary.json';

export async function load() {
	// Load lesson content and vocabulary data
	// In the future, this could include user progress, AI-generated content, etc.
	
	return {
		lesson: lessonData,
		vocabulary: vocabularyData,
		// Placeholder for future server-side features
		userProgress: null,
		aiEnabled: false
	};
}

// Future: Handle lesson-specific API calls
export const actions = {
	// Placeholder for lesson completion tracking
	complete: async ({ request }) => {
		const data = await request.formData();
		const score = data.get('score');
		const timeSpent = data.get('timeSpent');
		
		// TODO: Save progress to database
		console.log('Lesson completed:', { score, timeSpent });
		
		return {
			success: true,
			score: parseInt(score),
			timeSpent: parseInt(timeSpent)
		};
	},
	
	// Placeholder for AI feedback requests
	getFeedback: async ({ request }) => {
		const data = await request.formData();
		const userAnswer = data.get('answer');
		const correctAnswer = data.get('correct');
		
		// TODO: Call AI API for personalized feedback
		console.log('Feedback requested:', { userAnswer, correctAnswer });
		
		return {
			feedback: 'Great job! Keep practicing.',
			suggestions: ['Try focusing on pronunciation', 'Practice this phrase more']
		};
	}
};
