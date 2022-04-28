const dinners = [
  {name: 'Lasagne'},
  {name: 'Pastagrateng'},
  {name: 'Curry'},
  {name: 'Taco'},
  {name: 'Nachos'}
];

function generateDinner() {
  const oldSpan = document.querySelector('span');
  if (oldSpan) {
    oldSpan.remove();
  }
  const resultDinner = dinners[Math.floor(Math.random()*dinners.length)];
  console.log(resultDinner);
   
  const span = document.createElement('span')
  span.innerText = resultDinner.name
    
  document.querySelector("#result").appendChild(span);
}
