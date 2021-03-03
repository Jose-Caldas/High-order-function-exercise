const familyMembers = require("../data/family"); // module-import syntax

//FIND

//[X] - Encontrar um membro com idade igual a 19
const findMemberAge19 = familyMembers.find(({ age }) => age === 19);

//[X] - Encontrar um membro que o nome termine com a letra i
const findMember = familyMembers.find(({ name }) => name.lastIndexOf("i") + 1);

console.log(findMemberAge19);
console.log(findMember);
