const categories = [
  {name: 'Overkropp', id: 1},
  {name: 'Underkropp', id: 2},
]

const workouts = [
  {name: 'Tåhev', categoryId: 2},
  {name: 'Knebøy', categoryId: 2},
  {name: 'Bulgarsk utfall', categoryId: 2},
  {name: 'Ettbeins markløft', categoryId: 2},
  {name: 'Glute bridges', categoryId: 2},
  {name: 'Hamstring bridges', categoryId: 2},
  {name: 'Sideliggende benhev', categoryId: 2},
  {name: 'Lateral band walks', categoryId: 2},
  {name: 'Hamstring walks', categoryId: 2},
  {name: 'Sitback medius side plank', categoryId: 2},
  {name: 'Utfall', categoryId: 2},
  {name: 'Pushups', categoryId: 1},
  {name: 'Rygghev', categoryId: 1},
  {name: 'Situps', categoryId: 1},
  {name: 'Mountain climbers', categoryId: 1},
  {name: 'Biceps curls', categoryId: 1},
  {name: 'Planke', categoryId: 1},
  {name: 'Sidelengs planke', categoryId: 1},
  {name: 'Skulderpress', categoryId: 1},
  {name: 'Roing', categoryId: 1},
  {name: 'Triceps curl', categoryId: 1},
  {name: 'Deadbugs', categoryId: 1},
  {name: 'Toe touches', categoryId: 1},
];

function buildPage() {
  const optionsContainer = document.querySelector('#options');
  categories.forEach(category => {
    const div = document.createElement("div");
    const label = document.createElement("label");
    const inputId = category.name;
    label.htmlFor = inputId;
    const workoutsForCategory = workouts.filter(workout => workout.categoryId === category.id);
    label.innerText = `${category.name} (0-${workoutsForCategory.length}): `
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
	let workoutsForCategory = workouts.filter(workout => workout.categoryId === categoryInput.categoryId);
  	for (let i = 0; i<categoryInput.amount ; i++) {
		const selected = workoutsForCategory[Math.floor(Math.random() * workoutsForCategory.length)]
	  	resultExercises.push(selected);
		workoutsForCategory = workoutsForCategory.filter(workout => workout.name !== selected.name);
        console.log('hoho', selected.name)
        console.log('hei', workoutsForCategory)
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
