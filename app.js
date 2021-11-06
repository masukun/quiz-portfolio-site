var head = document.head;
var linkElement = document.createElement("link");

linkElement.type = "text/css";
linkElement.rel = "stylesheet";
linkElement.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css";

head.appendChild(linkElement);

const quiz = [
  {
    question:  '「原作の漫画が一番売れた」作品は？',
    answers:  [
      'ドラゴンボール',
      'ワンピース',
      'ナルト疾風伝',
      '名探偵コナン'
      ],
      correct: 'ドラゴンボール'
  }, {
    question: '一番放送回数が少なかったアニメは？',
    answers: [
      'フランダースの犬',
      '新世紀エヴァンゲリオン',
      'るろうに剣心',
      'スラムダンク'
      ],
      correct: '新世紀エヴァンゲリオン'
  }, {
    question: '次のうち、「一番、最高視聴率が高かった」番組は？',
    answers: [
      'クレヨンしんちゃん',
      'ドラゴンボールZ',
      '幽遊白書',
      '名探偵コナン'
      ],
      correct: 'クレヨンしんちゃん'
  }, {
    question: '最も長く1つのキャラクターを演じた声優は？',
    answers: [
      'ドラえもん・大山のぶ代',
      'ルパン・山田康雄',
      '磯野カツオ・高橋和枝',
      'さくら友蔵・青野武'
      ],
      correct: '磯野カツオ・高橋和枝'
  }, {
    question: '次のうち一番CDが売れた曲」は？',
    answers: [
      'めざせ！ポケモンマスター',
      'タッチ',
      '残酷な天使のテーゼ',
      'おどるポンポコリン'
      ],
      correct: 'おどるポンポコリン'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

//ボタンをクリックしたら正誤判定
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  } else{
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click',(e) =>{
    clickHandler(e);
  });
  handlerIndex++;
}
