// nombre de las actions
module.exports.names = {
  ADD: "add",
  REDUCE: "reduce",
  ADDN: "add-n",
};
/* 
DESTRUCTURO EL NOMBRE DE LAS ACTIONS A USAR
this vale el objeto global actual!!
*/
const { ADD, REDUCE, ADDN } = this.names;

module.exports.add = function () {
  return { type: ADD };
};

module.exports.reduce = function () {
  return { type: REDUCE };
};

module.exports.addN = function (n) {
  return { type: ADDN, payload: n };
};
