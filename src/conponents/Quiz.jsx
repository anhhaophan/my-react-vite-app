import { useState } from "react";

const quizData = [
  {
    question: "Đội nào đã vô địch World Cup 2018?",
    options: ["Pháp", "Croatia", "Brazil", "Đức"],
    answer: "Pháp",
  },
  {
    question: "Ngôn ngữ lập trình nào được sử dụng phổ biến nhất cho phát triển web?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: "JavaScript",
  },
  {
    question: "HTML là viết tắt của gì?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Marking Language",
    ],
    answer: "Hyper Text Markup Language",
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(quizData.length).fill(null)
  );

  const currentQuestion = quizData[currentQuestionIndex];
  const selectedOption = userAnswers[currentQuestionIndex];

  const handleSelectOption = (option) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = option;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const isCorrect =
    selectedOption && selectedOption === currentQuestion.answer;

  return (
    <div>
      <h2>Câu {currentQuestionIndex + 1}</h2>
      <p className="question">{currentQuestion.question}</p>

      {currentQuestion.options.map((option) => (
        <button
          key={option}
          className={`option ${
            selectedOption === option ? "selected" : ""
          }`}
          onClick={() => handleSelectOption(option)}
        >
          {option}
        </button>
      ))}

      {selectedOption && (
        isCorrect ? (
          <p className="correct-message">
            ✅ Chính xác! Đáp án là {currentQuestion.answer}.
          </p>
        ) : (
          <p className="incorrect-message">
            ❌ Sai rồi! Đáp án đúng là {currentQuestion.answer}.
          </p>
        )
      )}

      <p>Câu trả lời của bạn là: {selectedOption || "Chưa chọn"}</p>

      <div className="nav-buttons">
        <button onClick={handlePrev} disabled={currentQuestionIndex === 0}>
          Quay lại
        </button>
        <button
          onClick={handleNext}
          disabled={currentQuestionIndex === quizData.length - 1}
        >
          Tiếp theo
        </button>
      </div>
    </div>
  );
};

export default Quiz;
