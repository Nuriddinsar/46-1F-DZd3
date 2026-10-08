

let users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" }
];

// function users1(a) {
//     return a.filter(item => item.id % 2 !== 0);
// }

function users1(a) {
  return a.reduce((acc, item) => {
    if (item.id % 2 !== 0) {
      acc.push(item);
    }
    return acc;
  }, []);
};

console.log(users1(users));


function users2(a) {
  return a.reduce((acc, item) => {
    if (item.name === "Маша") {
      acc.push({ ...item, age: 22 });
    }else {
      acc.push({...item, age: 18});
    }
    return acc;
  }, []);
};

console.log(users2(users));


