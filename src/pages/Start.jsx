import { Link } from 'react-router-dom';

export default function Start() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-lg p-8">
        <h1 className="text-3xl font-bold text-center  mb-6">Quiz Questions</h1>
        {/* <h1 className="text-3xl font-bold text-center  mb-6">Quiz Completed!</h1> */}
        <div className="flex justify-center">
          <Link
            to="/quiz"
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200"
          >
            Start Quiz
          </Link>
        </div>
        <br />
        {/* <p className="text-center mb-8">
          Previous Score: 1/7
        </p> */}
      </div>
    </div>
  );
}
