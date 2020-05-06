/*JS Object*/
export function jsObject1() {
  let person1 = {
    height: 180,
    name: 'Ace',
    age: 30
  };
  let person2 = {
    name: 'Tom',
    age: 50
  };
  /*后面的覆盖前面的*/
  let newPerson = Object.assign({}, person1, person2);
}

export function jsObject2() {
  let person1 = {
    name: 'Ace',
    age: 30
  };
  /*正确用法*/
  let newPerson = Object.assign({}, person1);
  /*引用指向一样*/
  let person2 = person1;
  person2.name = "ccccccc";
  console.log(person1);
  console.log(person2);
  console.log(newPerson);
}