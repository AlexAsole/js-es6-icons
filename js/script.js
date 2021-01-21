/*Milestone 1:
- Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da:
nome, prefisso, tipo e famiglia.
- Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte
le icone con il proprio nome.*/

/* Milestone 2:
- Definire un array di colori e associare ad ogni tipo di icona un colore.
- Visualizzare le icone di colore diverso in base al tipo. */

const icons = [
  {name:'cat', prefix:'fa', type:'animal', family:'fas'},
  {name:'crow', prefix:'fa', type:'animal', family:'fas'},
  {name:'dog', prefix:'fa', type:'animal', family:'fas'},
  {name:'dove', prefix:'fa', type:'animal', family:'fas'},
  {name:'dragon', prefix:'fa', type:'animal', family:'fas'},
  {name:'horse', prefix:'fa', type:'animal', family:'fas'},
  {name:'hippo', prefix:'fa', type:'animal', family:'fas'},
  {name:'fish', prefix:'fa', type:'animal', family:'fas'},
  {name:'carrot', prefix:'fa', type:'vegetable', family:'fas'},
  {name:'apple-alt', prefix:'fa', type:'vegetable', family:'fas'},
  {name:'lemon', prefix:'fa', type:'vegetable', family:'fas'},
  {name:'pepper-hot', prefix:'fa', type:'vegetable', family:'fas'},
  {name:'user-astronaut', prefix:'fa', type:'user', family:'fas'},
  {name:'user-graduate', prefix:'fa', type:'user', family:'fas'},
  {name:'user-ninja', prefix:'fa', type:'user', family:'fas'},
  {name:'user-secret', prefix:'fa', type:'user', family:'fas'}
];

const colors = ['yellow', 'red', 'blue'];
const [forAnimals, forVegs, forUsers] = colors;

const appContainer = document.getElementById('container');

icons.forEach((item) => {
  const {name, prefix, family, type} = item;
  let colorIcon;
  if (type === 'animal') {
    colorIcon = forAnimals;
  }
  if (type === 'vegetable') {
    colorIcon = forVegs;
  }
  if (type === 'user') {
    colorIcon = forUsers;
  }
  appContainer.innerHTML += `
  <div class="inner">
  <i class="${family} ${prefix}-${name}" style="color:${colorIcon}"></i>
  </div>
  `
});
