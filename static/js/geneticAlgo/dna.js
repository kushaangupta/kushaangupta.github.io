const _randn = (emax, min = 0) => Math.floor(Math.random() * (emax - min) + min);

const _newChar = () => {
  let c = _randn(123, 63);

  if (c === 63) c = 32;
  if (c === 91) c = 46; // .

  return String.fromCharCode(c);
};

class DNA {
  constructor(num) {
    // The genetic sequence
    this.genes = [];
    this.fitness = 0;
    for (let i = 0; i < num; i++) {
      this.genes[i] = _newChar(); // Pick from range of chars
    }
  }

  // Converts character array to a String
  get getPhrase() {
    return this.genes.join("");
  }

  // Fitness function (returns floating point % of "correct" characters)
  calcFitness(target) {
    let score = 0;
    for (let i = 0; i < this.genes.length; i++) {
      if (this.genes[i] == target.charAt(i)) {
        score++;
      }
    }
    this.fitness = score / target.length;
  }

  // Crossover
  crossover(partner) {
    // A new child
    let child = new DNA(this.genes.length);

    let midpoint = _randn(this.genes.length); // Pick a midpoint

    // Half from one, half from the other
    for (let i = 0; i < this.genes.length; i++) {
      if (i > midpoint) child.genes[i] = this.genes[i];
      else child.genes[i] = partner.genes[i];
    }
    return child;
  }

  // Based on a mutation probability, picks a new random character
  mutate(mutationRate) {
    for (let i = 0; i < this.genes.length; i++) {
      if (Math.random(1) < mutationRate) {
        this.genes[i] = _newChar();
      }
    }
  }
}
