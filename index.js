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
  const resultDinner = dinners[Math.floor(Math.random()*dinners.length)];
  console.log(resultDinner);
   
  const span = document.querySelector('#result__span')
  span.innerText = resultDinner.name
  
  const button = document.querySelector('button')
  button.innerText = "Nei, ikkje d..!"
}
