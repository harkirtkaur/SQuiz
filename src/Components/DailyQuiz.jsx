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

  const handleReset = () => {
    setSelectedAnswer(null);
    setIsSubmitted(false);
  };

  // If no question available for today (day 31+)
  if (!todaysQuestion) {
    return (
      <div className="max-w-2xl mx-auto p-6 mt-8">
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            No Question Available
          </h2>
          <p className="text-gray-600">
            There is no quiz question available for today. Check back on day 1-30 of the month!
          </p>
        </div>
      </div>
    );
  }

  const isCorrect = selectedAnswer === todaysQuestion.correctAnswer;

  return (
    <div className="max-w-2xl mx-auto p-6 mt-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="mb-4">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
            Day {currentDay} Question
          </span>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
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
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                    : 'border-blue-500 bg-blue-50'
                  : isSubmitted && index === todaysQuestion.correctAnswer
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
              } ${isSubmitted ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
            </button>
          ))}
        </div>

        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
              selectedAnswer === null
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Submit Answer
          </button>
        ) : (
          <div>
            <div
              className={`p-4 rounded-lg mb-4 ${
                isCorrect ? 'bg-green-100 border border-green-400' : 'bg-red-100 border border-red-400'
              }`}
            >
              <p
                className={`font-bold text-lg ${
                  isCorrect ? 'text-green-800' : 'text-red-800'
                }`}
              >
                {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
              </p>
              <p className={isCorrect ? 'text-green-700' : 'text-red-700'}>
                {isCorrect
                  ? 'Great job! You got it right.'
                  : `The correct answer is: ${String.fromCharCode(65 + todaysQuestion.correctAnswer)}. ${
                      todaysQuestion.options[todaysQuestion.correctAnswer]
                    }`}
              </p>
            </div>
            <button
              onClick={handleReset}
              className="w-full py-3 px-6 rounded-lg font-semibold bg-gray-600 text-white hover:bg-gray-700 transition-all"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DailyQuiz;
