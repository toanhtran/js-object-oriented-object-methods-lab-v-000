function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
  this.veto = function() {
    console.log(`Hello everybody is ${this.name}!`);
  }
  this.sayHi = function() {
    console.log(`Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trainined in ${this.training}.`)
  }
}
