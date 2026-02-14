import { useState } from 'react';
import quizQuestions from '../data/quizQuestions.json';

function DailyQuiz() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Get current day of month (1-31)
  const currentDay = new Date().getDate();

  // Get question for current day (1-30)
  const todaysQuestion = currentDay <= 30 ? quizQuestions[currentDay - 1] : null;

  const handleAnswerSelect = (index) => {
    if (!isSubmitted) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setIsSubmitted(true);
    }
  };

  // If no question available for today (day 31+)
  if (!todaysQuestion) {
    return (
      <div className="max-w-2xl mx-auto p-6 mt-8">
        <div className="bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">
            No Question Available
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            There is no quiz question available for today. Check back on day 1-30 of the month!
          </p>
        </div>
      </div>
    );
  }

  const isCorrect = selectedAnswer === todaysQuestion.correctAnswer;

  return (
    <div className="max-w-2xl mx-auto p-6 mt-8">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold px-3 py-1 rounded-full">
            Day {currentDay} Question
          </span>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
          {todaysQuestion.question}
        </h2>

        <div className="space-y-3 mb-6">
          {todaysQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={isSubmitted}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedAnswer === index
                  ? isSubmitted
                    ? index === todaysQuestion.correctAnswer
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                      : 'border-red-500 bg-red-50 dark:bg-red-900/30'
                    : 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                  : isSubmitted && index === todaysQuestion.correctAnswer
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                  : 'border-gray-300 dark:border-gray-600 hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              } ${isSubmitted ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <span className="font-medium text-gray-800 dark:text-gray-200">{String.fromCharCode(65 + index)}.</span> <span className="text-gray-800 dark:text-gray-200">{option}</span>
            </button>
          ))}
        </div>

        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
              selectedAnswer === null
                ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600'
            }`}
          >
            Submit Answer
          </button>
        ) : (
          <div
            className={`p-4 rounded-lg ${
              isCorrect ? 'bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600' : 'bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600'
            }`}
          >
            <p
              className={`font-bold text-lg ${
                isCorrect ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'
              }`}
            >
              {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
            </p>
            <p className={isCorrect ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}>
              {isCorrect
                ? 'Great job! You got it right.'
                : `The correct answer is: ${String.fromCharCode(65 + todaysQuestion.correctAnswer)}. ${
                    todaysQuestion.options[todaysQuestion.correctAnswer]
                  }`}
            </p>
            <p className="text-gray-600 mt-3 text-sm">
              🗓️ Come back tomorrow for a new challenge!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DailyQuiz;
