const dinners = [
  {name: 'Lasagne'},
  {name: 'Pastagrateng'},
  {name: 'Curry'},
  {name: 'Taco'},
  {name: 'Nachos'},
  {name: 'Risotto'},
  {name: 'One-pot pasta'},
  {name: 'Wok med nudler'},
  {name: 'Soppstuing med grønnsaker og ris'},
  {name: 'Soppstuing med pasta'},
  {name: 'Linsegryte'},
  {name: 'Thaiboller'},
  {name: 'Søtpotetsuppe'},
  {name: 'Linsegryte'},
  {name: 'Poké bowl'},
  {name: 'Pannekaker'},
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
