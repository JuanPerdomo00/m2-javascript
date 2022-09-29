var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }

  // for (let i = 0; i < startEl.children.length; i++) {
  //   resultSet = [
  //     ...resultSet,
  //     ...traverseDomAndCollectElements(matchFunc, startEl.children.item(i)),
  //   ];
  // }

  for (const childElement of startEl.children) {
    resultSet = [
      ...resultSet,
      ...traverseDomAndCollectElements(matchFunc, childElement),
    ];
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector[0] === "#") {
    return "id";
  } else {
    if (selector[0] === ".") {
      return "class";
    } else {
      let string = selector;
      let pasarArrString = string.split("");
      let preguntar = pasarArrString.filter((e) => {
        if (e === ".") {
          return e;
        }
      });

      if (preguntar[0] === ".") {
        return "tag.class";
      } else {
        return "tag";
      }
    }
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = (el) => {
      return `#${el.id}` === selector;
    };
  } else if (selectorType === "class") {
    matchFunction = (el) => {
      return el.classList.contains(selector.substring(1));
    };
  } else if (selectorType === "tag.class") {
    matchFunction = (el) => {
      const [tag, className] = selector.split(".");
      return (
        el.tagName.toLowerCase() === tag.toLowerCase() &&
        el.classList.contains(className)
      );
    };
  } else if (selectorType === "tag") {
    matchFunction = (el) => {
      return el.tagName.toLowerCase() === selector.toLowerCase();
    };
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

/*
solucion de otra persona

var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];
​
  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
​
  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }
​
  for (const ele of startEl.children) {
    resultSet = [...resultSet, ...traverseDomAndCollectElements(matchFunc, ele)];
  }
​
  return resultSet;
};
​
// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag
var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (function (selector) {
    for (let i = 0; i < selector.length; i++) {
      if (selector[i] == ">" && i > 0) return true;
    }
    return false;
  }(selector)) return "s>";
  else if (selector.charAt(0) == '#') return "id";
  else if (selector.charAt(0) == '.') return "class";
  else if (function (selector) {
    for (let i = 0; i < selector.length; i++) {
      if (selector[i] == "." && i > 0) return true;
    }
    return false;
  }(selector)) return "tag.class";
  else if (selector.split(" ").length == 2) return "ss";
  
  return "tag"
};
​
// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.​
var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = function (ele) {
      if (ele === null || ele === undefined) return false;
      return ele.id === selector.substring(1)
    }
  } else if (selectorType === "class") {
    matchFunction = function (ele) {
      if (ele === null || ele === undefined) return false;
      for (const item of ele.classList) {
        if (item === selector.substring(1)) return true;
      }
      return false;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = function (ele) {
      if (ele === null || ele === undefined) return false;
      let [tag, class_name] = selector.split(".");
      for (const classes of ele.classList) {
        if (classes === class_name && tag.toLowerCase() === ele.tagName.toLowerCase()) return true;
      }

      return false;
    }
  } else if (selectorType === "tag") {
    matchFunction = function (ele) {
      if (ele == null || ele == undefined) return false;
      return ele.tagName.toLowerCase() == selector.toLowerCase();
    }
  } else if (selectorType === "s>") {
    matchFunction = function (ele) {
      let [parent, child] = selector.split(" > ");
      return ele.parentElement.tagName.toLowerCase() == parent.toLowerCase() && ele.tagName.toLowerCase() == child.toLowerCase();
    }
  } else if (selectorType === "ss") {
    matchFunction = function (ele) {
      let [parent, child] = selector.split(" ");
      if (ele.parentElement.parentElement != null) return (ele.parentElement.tagName.toLowerCase() == parent.toLowerCase() || ele.parentElement.parentElement.tagName.toLowerCase() == parent.toLowerCase()) && ele.tagName.toLowerCase() == child.toLowerCase();
    }
  }

  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

*/
