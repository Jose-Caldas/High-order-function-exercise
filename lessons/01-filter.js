const familyMembers = require("../data/family"); // module-import syntax

//FILTER

//[X] - Filtrar apenas as pessoas do sexo feminino

const familyMembersFemale = familyMembers.filter(
  ({ gender }) => gender === "female"
);

//[X] - Filtrar apenas as pessoas maiores que 19 anos

const familyMembersAgesLargerThan19 = familyMembers.filter(
  ({ age }) => age > 19
);

//[X] - Filtrar apenas as pessoas com mais de 6 letras no nome

const familyMembersNamesThan6Letters = familyMembers.filter(
  ({ name }) => name.length > 6
);

console.log(familyMembersFemale);
console.log(familyMembersAgesLargerThan19);
console.log(familyMembersNamesThan6Letters);
