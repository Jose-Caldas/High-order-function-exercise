const familyMembers = require("../data/family"); // module-import syntax
const countries = require("../data/countries");

//MAP

//[X] - Adicionar Sobrenome a cada membro da familia

const lastName = "Caldas";
const addLastName = familyMembers.map(({ name }) => `${name} ${lastName}`);

//[X] - Deixar o nome de cada membro em caixa alta ex: JOSE

const nameToUpercase = familyMembers.map(({ name }) => name.toUpperCase());

//[X] - Somar 1 ano na idade de cada membro da familia

const agePlusOne = familyMembers.map(({ age }) => age + 1);

console.log(addLastName);
console.log(nameToUpercase);
console.log(agePlusOne);
