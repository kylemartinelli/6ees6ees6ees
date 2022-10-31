class RetiredForagerBee extends ForagerBee {
  constructor(age, job, canFly, color, forage) {
    super(age, job, canFly, color)
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey'

  }
  forage() {
    super.forage();
    return 'I am too old, let me play cards instead';
  }

  gamble(treasure) {
    this.treasureChest.push(treasure)
  }
};
