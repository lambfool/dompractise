const paragraph = document.querySelector('p');
paragraph.innerHTML = paragraph.innerText
   .split(' ')
   .map(word => word.length > 8 ? `<span style="background-color: yellow">${word}</span>` : word)
   .join(' ');



paragraph.innerHTML = paragraph.innerHTML
  .split(/\.[^\.|]/)
  .join('.</p><p>')+ '</p>'

const link = document.createElement('a');
link.href= 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html';
link.innerText = 'Link to text';

document.body.appendChild(link);

const wordCount = paragraph.innerText.split(' ').length;
const wordCountElem = document.createElement('div');
wordCountElem.innerText = `${wordCount} words`;
document.body.insertBefore(wordCountElem, paragraph);
