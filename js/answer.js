let jsonFiles = {
  answers: 'json/quiz_book_answers.json'
};

document.getElementById('answer_btn').addEventListener('click', () => {
  const result_answers = document.getElementById('answerOutput');

  fetch(jsonFiles.answers)
      .then(response => response.json())
      .then(answerOption => {
          // Access the 'answers' array in the JSON and select a random answer
          const randomAnswer = answerOption.answers[Math.floor(Math.random() * answerOption.answers.length)];
          result_answers.textContent = randomAnswer;
          document.getElementById('answer-card').classList.remove('hidden');
          document.getElementById('answer-card').classList.add('show');
          document.getElementById('important-thing').classList.remove('hidden');
          document.getElementById('important-thing').classList.add('show');
      })
      .catch(error => {
          console.log('加载答案失败:', error);
          result_answers.textContent = "加载答案失败！";
      });
});

  