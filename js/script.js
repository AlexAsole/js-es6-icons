/*Milestone 1:
- Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da:
nome, prefisso, tipo e famiglia.
- Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte
le icone con il proprio nome.*/

/* Milestone 2:
- Definire un array di colori e associare ad ogni tipo di icona un colore.
- Visualizzare le icone di colore diverso in base al tipo. */

/* Milestone 3:
- Aggiungere una select per filtrare le icone in base al tipo.
- Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato,
visualizzare le icone corrispondenti. */

const populate = (arr, app) => { // funzione che popola il container delle icone
  arr.forEach((item) => {
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
    app.innerHTML += `
    <div class="inner">
      <i class="${family} ${prefix}-${name}" style="color:${colorIcon}"></i>
      <div>${name}</div>
    </div>
    `
  });
};

const typeFilter = (arr, arr2) => { // funzione per filtrare un solo elemento per tipo, non so se si può fare con .filter()
arr.forEach((item) => {
  const {type} = item
  if (arr2.includes(type) === false) {
    arr2.push(type)
  }
});
};

const empty = (app) => { // funzione che svuota il container delle icone
  app.innerHTML = "";
}

const icons = [ // array di icone
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

const animals = icons.filter ((element) => element.type === 'animal'); // array di soli animali
const vegs = icons.filter ((element) =>  element.type === 'vegetable'); // array di soli vegetali
const users = icons.filter ((element) =>  element.type === 'user'); // array di soli utenti

const typing = [] // array di tipi
typeFilter(icons, typing);

const colors = ['yellow', 'red', 'blue']; // array di colori
const [forAnimals, forVegs, forUsers] = colors;

const appContainer = document.getElementById('container');
const appSelector = document.getElementsByClassName('icons-colors')[0];

const selected = $('.icons-colors');

typing.forEach((item) => { // popola il select
  appSelector.innerHTML += `
  <option value=${item}>${item}</option>
  `
});

populate(icons, appContainer);

selected.change(function() { // funzione per switchare il contenuto

  const value = $(this).val();

  switch (value) {

    case 'animal':
      empty(appContainer);
      populate(animals, appContainer);
      break;
    case 'vegetable':
      empty(appContainer);
      populate(vegs, appContainer);
      break;
    case 'user':
      empty(appContainer);
      populate(users, appContainer);
      break;
    default:
      empty(appContainer);
      populate(icons, appContainer);
      break;

  }
});
