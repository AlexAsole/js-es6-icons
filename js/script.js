/*Milestone 1:
- Definire un array di oggetti; ogni oggetto rappresenta un'icona, che è caratterizzata da:
 nome, prefisso, tipo e famiglia.
- Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte
 le icone con il proprio nome.*/

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
]

const appContainer = document.getElementById('container');

icons.forEach((item) => {
  const {name, prefix, family} = item;
  appContainer.innerHTML += `
  <div class="inner">
  <i class="${family} ${prefix}-${name}"></i>
  </div>
  `
});
