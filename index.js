// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function main(params) {
  const splitedParams = params.split('');
  const splitedHash = splitedParams.map((v) => {
    if (v === '(') return 'p-o';
    else if (v === ')') return 'p-c';
    else if (v === '{') return 'b-o';
    else if (v === '}') return 'b-c';
    else if (v === '[') return 's-o';
    else if (v === ']') return 's-c';
  });
  let level = [];
  for (const item of splitedHash) {
    if (level.length === 0) level.push(item);
    if (
      level.at(-1) &&
      level.at(-1).split('-')[0] === item.split('-')[0] &&
      level.at(-1).split('-')[1] === 'o' &&
      item.split('-')[1] === 'c'
    ) {
      level.pop();
    }
    // console.log(level);
  }
  if (level.length === 0) {
    console.log(params + ' is balnced');
  } else {
    console.log(params + ' is not balnced');
  }
}

main('{()}[]');
main('{(})[]');
main('{()[]}');
main('{})([]');
