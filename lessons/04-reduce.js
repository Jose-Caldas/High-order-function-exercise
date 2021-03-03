const familyMembers = require("../data/family"); // module-import syntax
//REDUCE

//[X] - Montar uma Frase com todos os nomes dos membros ex: Jose, Janei, Patrick e Jeniffer
const membersNamePhrase = familyMembers.reduce(
  (index, { name }) => `${index} ${name}`,
  "" + "Fazem parte da mesma familia:"
);

//[X] - Somar a idade de todos os membros da familia
const membersAgeSum = familyMembers.reduce((acc, { age }) => acc + age, 0);

// // //[] - Somar a quantos membros sao do sexo feminino e masculino

const genderMaleFemaleSum = familyMembers.reduce((acc, { gender }) => {
  acc[gender] = acc[gender] + 1 || 1;

  return acc;
}, {});

console.log(membersNamePhrase);
console.log(membersAgeSum);

console.log(genderMaleFemaleSum);
