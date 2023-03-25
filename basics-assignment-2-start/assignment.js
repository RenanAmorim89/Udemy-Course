const task3Element = document.getElementById('task-3');

function greet() {
  alert('hi There');
}
function greetUser(nameUser) {
  alert('Hi' + nameUser);
}

greetUser('Renan');

task3Element.addEventListener('click', greet);

function combine(str1, str2, str3) {
  const combinedText = ` ${str1}  ${str2}  ${str3}`;
  return combinedText;
}

const combinedText = combine('hi', 'there', '!');
alert(combinedText);
