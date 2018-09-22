// In index.js, write a constructor function called BoardMember that sets the following properties: name, homeState, and training.
function BoardMember (name, homeState, training){
  // Add following methods to the class:
  this.name = name
  this.homeState = homeState
  this.training = training
// veto — returns No, I must disagree
  this.veto = () => 'No, I must disagree'
// approve — returns You can do that!
  this.approve = () => 'You can do that!'
// doCharity — returns I like to help people.
  this.doCharity = () => 'I like to help people.'
// releasePressStatement — returns You will see great things from Scuber.
  this.releasePressStatement = () => 'You will see great things from Scuber.'
// sayHi — returns "Hi, my name is <name>. I am from <homestate>, and I was trained in <training>.
  this.sayHi = () => `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
}