class Animal {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }
  hello() {
    console.log(`hi im ${this.name}`);
  }
}
export default Animal;
