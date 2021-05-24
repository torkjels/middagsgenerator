const categories = [
  {name: 'Overkropp', id: 1},
  {name: 'Ben', id: 2},
]

const workouts = [
  {name: 'Tåhev', categoryId: 2},
  {name: 'Knebøy', categoryId: 2},
  {name: 'Bulgarsk utfall', categoryId: 2},
  {name: 'Pushups', categoryId: 1},
];

function buildPage() {
  const optionsContainer = document.querySelector('#options');
  categories.forEach(category => {
    const div = document.createElement("div");
    const label = document.createElement("label");
    const inputId = category.name;
    label.htmlFor = inputId;
    label.innerText = `${category.name}: `
    const input = document.createElement("input");
    input.id = inputId;
    input.type= "number";
    div.appendChild(label)
    div.appendChild(input)
    optionsContainer.appendChild(div);
  })
}

buildPage();

function generateWorkout() {
	const ol = document.querySelector('ol');
  if (ol) {
    ol.remove();
  }
  const inputs = document.querySelectorAll('input');
  const exercisesPerCategory = {}
  inputs.forEach((input) => {
  	const categoryName = input.getAttribute('id');
  	exercisesPerCategory[categoryName] = {
		  amount: input.value,
		  categoryName,
      categoryId: categories.find(category => category.name === categoryName).id,
	  }
  })
  console.log(exercisesPerCategory)

  const resultExercises = [];
  Object.values(exercisesPerCategory).forEach(categoryInput => {
	  for (let i = 0; i<categoryInput.amount ; i++) {
		  const workoutsForCategory = workouts.filter(workout => workout.categoryId === categoryInput.categoryId);
      resultExercises.push(workoutsForCategory[Math.floor(Math.random() * workoutsForCategory.length)]);
	  }
  })
  console.log(resultExercises);
	const result = document.createElement('ol');
    shuffleArray(resultExercises)
    resultExercises.forEach(resultExercise => {
    const el = document.createElement('li')
    el.innerText = resultExercise.name
		result.appendChild(el)
  })
    
	document.body.appendChild(result);
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
