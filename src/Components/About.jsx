function About() {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-8">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">About SQuiz</h1>
        
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">What is SQuiz?</h2>
            <p className="leading-relaxed">
              SQuiz is a daily quiz application designed to challenge your knowledge and help you learn something new every day. 
              Each day of the month features a unique question covering various topics including programming, algorithms, data structures, 
              and general computer science concepts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">How It Works</h2>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>A new question is presented each day based on the date (day 1-30 of the month)</li>
              <li>Select your answer from multiple choice options</li>
              <li>Submit your answer to see if you got it right</li>
              <li>Learn from the correct answer if you make a mistake</li>
              <li>Come back the next day for a fresh challenge</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">Why Daily Quizzes?</h2>
            <p className="leading-relaxed">
              Consistent daily learning is one of the most effective ways to retain information and build knowledge over time. 
              By dedicating just a few minutes each day to answer a question, you can steadily improve your skills and 
              understanding of important concepts in computer science and programming.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">Features</h2>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>30 unique questions covering various technical topics</li>
              <li>Clean and intuitive user interface</li>
              <li>Instant feedback on your answers</li>
              <li>Mobile-responsive design for learning on the go</li>
              <li>No registration required - just visit and play</li>
            </ul>
          </section>

          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg">
            <p className="text-blue-800 dark:text-blue-300 font-medium">
              🎯 Ready to test your knowledge? Head to the Home page and tackle today's challenge!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
