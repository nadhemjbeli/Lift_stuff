// let yummyThings = ['pizza', 'gelato', 'sushi', 'cheeseburger'];
// let greatThings = ['swimming', 'sunsets', ...yummyThings, 'New Orleans'];
// let copyOfGreatThings = [...greatThings];
// copyOfGreatThings.push('summer');
// console.log(greatThings);
// console.log(copyOfGreatThings);

let foods = new Map();
foods.set('italian', 'gelato');
foods.set('mexican', 'tortas');
foods.set('canadian', 'poutine');

let southernUsStates = ['Tennessee', 'Kentucky', 'Texas'];
foods.set(southernUsStates, 'hot chicken');

console.log(
    foods.get('italian'),
    foods.get(southernUsStates)
);