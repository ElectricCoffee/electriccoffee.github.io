let subtitle = document.getElementById("subtitle");
let titles = [
  'Will code for food!',
  'Will code for money!',
  'Original website, do not steal!',
  '(defun code-write-code () (code-write-code))',
  'In a love-hate relationship with JavaScript since 2011!',
  'Follow me @Electric_Coffee!',
  'Natural 20!',
  'Natural 1!',
  'Natural NaN!',
  'If you see this, the JS failed!',
  'If you see this, the JS loaded correctly!',
  'NaN days since last JS error!',
  "I have NaN problems, but JS ain't one!"
];

let randIndex = Math.floor(Math.random() * titles.length);

subtitle.innerHTML = titles[randIndex];