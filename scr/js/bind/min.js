const obj = {
  name: 'woow-wu',
  age: 20,
};
function fn(name, age) {
  return {
    name: name || this.name,
    age: age || this.age,
  }
}
Function.prototype._call = function(context) {
  context = context ? context : window;
  context.fn = this;
  const res = context.fn(...[...arguments].slice(1));
  delete context.fn;
  return res;
}
const result = fn._call(obj, 'wang', 30);
console.log(result)