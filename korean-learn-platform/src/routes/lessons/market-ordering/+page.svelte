<script>
	import Button from '$lib/components/ui/Button.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import Progress from '$lib/components/ui/Progress.svelte';

	// Server-loaded data
	let { data } = $props();
	const { lesson, vocabulary } = data;

	// Lesson state management
	let currentPhase = $state(0);
	let currentQuestion = $state(0);
	let score = $state(0);
	let userAnswers = $state([]);
	let showFeedback = $state(false);
	let lessonComplete = $state(false);

	// Generate questions for current phase
	const generateQuestions = (phaseId) => {
		const phase = lesson.phases[currentPhase];
		
		if (phaseId === 'colors') {
			return vocabulary.colors.map((color, index) => ({
				id: `color-${index}`,
				type: 'multiple-choice',
				question: `What is "${color.english}" in Korean?`,
				correct: color.korean,
				options: shuffleArray([
					color.korean,
					...vocabulary.colors.filter(c => c.korean !== color.korean)
						.slice(0, 3).map(c => c.korean)
				]),
				romanization: color.romanization,
				example: color.example
			}));
		} else if (phaseId === 'fish-names') {
			return vocabulary.fish.map((fish, index) => ({
				id: `fish-${index}`,
				type: 'multiple-choice',
				question: `What is "${fish.english}" in Korean?`,
				correct: fish.korean,
				options: shuffleArray([
					fish.korean,
					...vocabulary.fish.filter(f => f.korean !== fish.korean)
						.slice(0, 3).map(f => f.korean)
				]),
				romanization: fish.romanization,
				example: fish.example
			}));
		} else if (phaseId === 'ordering') {
			// Combine colors and fish for ordering practice
			const orderingQuestions = [];
			for (let i = 0; i < 3; i++) {
				const color = vocabulary.colors[i % vocabulary.colors.length];
				const fish = vocabulary.fish[i % vocabulary.fish.length];
				orderingQuestions.push({
					id: `order-${i}`,
					type: 'multiple-choice',
					question: `How do you say "Please give me ${color.english} ${fish.english}" in Korean?`,
					correct: `${color.korean} ${fish.korean} 주세요`,
					options: shuffleArray([
						`${color.korean} ${fish.korean} 주세요`,
						`${fish.korean} ${color.korean} 주세요`,
						`${color.korean} 주세요 ${fish.korean}`,
						`주세요 ${color.korean} ${fish.korean}`
					]),
					romanization: `${color.romanization} ${fish.romanization} ju-se-yo`,
					context: 'Ordering at the fish market'
				});
			}
			return orderingQuestions;
		}
		return [];
	};

	// Shuffle array utility
	const shuffleArray = (array) => {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	};

	// Current phase and questions
	const currentPhaseData = $derived(lesson.phases[currentPhase]);
	const questions = $derived(generateQuestions(currentPhaseData.id));
	const currentQuestionData = $derived(questions[currentQuestion]);

	// Progress calculation
	const totalQuestions = $derived(lesson.phases.reduce((sum, phase) => {
		if (phase.id === 'colors') return sum + 4;
		if (phase.id === 'fish-names') return sum + 4;
		if (phase.id === 'ordering') return sum + 3;
		return sum;
	}, 0));
	const questionsAnswered = $derived(userAnswers.length);
	const progressPercentage = $derived((questionsAnswered / totalQuestions) * 100);

	// Handle answer selection
	const handleAnswer = (selectedAnswer) => {
		const isCorrect = selectedAnswer === currentQuestionData.correct;
		
		userAnswers.push({
			questionId: currentQuestionData.id,
			question: currentQuestionData.question,
			userAnswer: selectedAnswer,
			correctAnswer: currentQuestionData.correct,
			isCorrect: isCorrect,
			phase: currentPhaseData.id
		});

		if (isCorrect) {
			score++;
		}

		showFeedback = true;
		
		// Auto-advance after showing feedback
		setTimeout(() => {
			showFeedback = false;
			nextQuestion();
		}, 2000);
	};

	// Navigate to next question or phase
	const nextQuestion = () => {
		if (currentQuestion < questions.length - 1) {
			currentQuestion++;
		} else if (currentPhase < lesson.phases.length - 1) {
			currentPhase++;
			currentQuestion = 0;
		} else {
			lessonComplete = true;
		}
	};

	// Restart lesson
	const restartLesson = () => {
		currentPhase = 0;
		currentQuestion = 0;
		score = 0;
		userAnswers = [];
		showFeedback = false;
		lessonComplete = false;
	};
</script>

<svelte:head>
	<title>{lesson.title} - Korean Learning Platform</title>
	<meta name="description" content={lesson.description} />
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<!-- Header -->
	<header class="bg-white shadow-sm border-b border-gray-200">
		<div class="max-w-4xl mx-auto px-4 py-4">
			<div class="flex items-center justify-between">
				<div>
					<h1 class="text-2xl font-bold text-gray-900">{lesson.title}</h1>
					<p class="text-gray-600 text-sm">{lesson.scenario.setting}</p>
				</div>
				<Button 
					variant="outline" 
					size="small"
					onclick={() => window.location.href = '/'}
				>
					← Home
				</Button>
			</div>
		</div>
	</header>

	<!-- Main Content -->
	<main class="max-w-4xl mx-auto px-4 py-8">
		{#if !lessonComplete}
			<!-- Progress Bar -->
			<div class="mb-8">
				<Progress 
					value={questionsAnswered} 
					max={totalQuestions}
					variant="default"
					showLabel={true}
				/>
				<div class="mt-2 text-sm text-gray-600 text-center">
					Phase {currentPhase + 1} of {lesson.phases.length}: {currentPhaseData.title}
				</div>
			</div>

			<!-- Current Question -->
			{#if currentQuestionData}
				<Card variant="elevated" padding="large">
					<div class="space-y-6">
						<!-- Question -->
						<div class="text-center">
							<h2 class="text-xl font-semibold text-gray-900 mb-2">
								{currentQuestionData.question}
							</h2>
							{#if currentQuestionData.context}
								<p class="text-gray-600 text-sm">{currentQuestionData.context}</p>
							{/if}
						</div>

						<!-- Answer Options -->
						{#if !showFeedback}
							<div class="grid gap-3">
								{#each currentQuestionData.options as option}
									<Button
										variant="outline"
										size="large"
										fullWidth={true}
										onclick={() => handleAnswer(option)}
									>
										<div class="text-left">
											<div class="font-medium">{option}</div>
											{#if option === currentQuestionData.correct && currentQuestionData.romanization}
												<div class="text-sm text-gray-500 mt-1">
													{currentQuestionData.romanization}
												</div>
											{/if}
										</div>
									</Button>
								{/each}
							</div>
						{/if}

						<!-- Feedback -->
						{#if showFeedback}
							{@const lastAnswer = userAnswers[userAnswers.length - 1]}
							<div class="text-center space-y-4">
								{#if lastAnswer.isCorrect}
									<div class="text-green-600">
										<div class="text-2xl mb-2">✅</div>
										<div class="font-semibold">Correct!</div>
									</div>
								{:else}
									<div class="text-red-600">
										<div class="text-2xl mb-2">❌</div>
										<div class="font-semibold">Not quite right</div>
										<div class="text-sm mt-2">
											The correct answer is: <strong>{currentQuestionData.correct}</strong>
										</div>
									</div>
								{/if}
								
								{#if currentQuestionData.romanization}
									<div class="text-gray-600 text-sm">
										Pronunciation: {currentQuestionData.romanization}
									</div>
								{/if}
								
								{#if currentQuestionData.example}
									<div class="text-gray-600 text-sm italic">
										Example: {currentQuestionData.example}
									</div>
								{/if}
							</div>
						{/if}
					</div>
				</Card>
			{/if}
		{:else}
			<!-- Lesson Complete -->
			<Card variant="elevated" padding="large">
				<div class="text-center space-y-6">
					<div class="text-6xl">🎉</div>
					<h2 class="text-2xl font-bold text-gray-900">Lesson Complete!</h2>
					<div class="space-y-2">
						<p class="text-lg text-gray-700">
							You scored {score} out of {totalQuestions}
						</p>
						<p class="text-gray-600">
							{score >= lesson.completionCriteria.passingScore ? 
								'Excellent work! You\'re ready for the next lesson.' : 
								'Good effort! Consider reviewing and trying again.'}
						</p>
					</div>
					
					<div class="flex gap-4 justify-center">
						<Button variant="outline" onclick={restartLesson}>
							Try Again
						</Button>
						<Button variant="primary" onclick={() => window.location.href = '/'}>
							Back to Lessons
						</Button>
					</div>
				</div>
			</Card>
		{/if}

		<!-- Cultural Context -->
		<div class="mt-8">
			<Card variant="default" padding="medium">
				<div class="space-y-2">
					<h3 class="font-semibold text-gray-900">Cultural Note</h3>
					<p class="text-gray-700 text-sm">{lesson.scenario.culturalNote}</p>
				</div>
			</Card>
		</div>
	</main>
</div>
