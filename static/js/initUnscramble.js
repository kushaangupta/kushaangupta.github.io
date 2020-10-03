email = "gkushaan@rediffmail.com";
pos = Array.from(Array(email.length), (_, i) => i + 1);
emailCharacters = email.split("");
pairedEmailCharactersPos = pos.map((index) => [
  index,
  emailCharacters[index - 1],
]);
shuffle(pairedEmailCharactersPos);
shuffledPos = pairedEmailCharactersPos.map((e) => e[0]);
shuffledCharacters = pairedEmailCharactersPos.map((e) => e[1]);
shuffledEmail = shuffledCharacters.join("");

emailElement = document.getElementById("email");
emailElement.prepend(document.createTextNode(shuffledEmail));

const displayInfo = (best) => (emailElement.innerHTML = best);

const popmax = 200;
const mutationRate = 0.01;
let population = [];
let interval;
let idx = 0;
let worldRecord = 0.0;

const gaStep = () => {
  let matingPool = []; // ArrayList which we will use for our "mating pool"

  for (let i = 0; i < population.length; i++) {
    let nnnn = Math.floor(population[i].fitness * 100); // Arbitrary multiplier, we can also use monte carlo method
    for (let j = 0; j < nnnn; j++) {
      // and pick two random numbers
      matingPool.push(population[i]);
    }
  }

  for (let i = 0; i < population.length; i++) {
    let a = _randn(matingPool.length);
    let b = _randn(matingPool.length);
    let partnerA = matingPool[a];
    let partnerB = matingPool[b];
    let child = partnerA.crossover(partnerB);
    child.mutate(mutationRate);
    population[i] = child;
    population[i].calcFitness(email);
  }

  population.forEach((sample, itr) => {
    if (sample.fitness > worldRecord)
      [idx, worldRecord] = [itr, sample.fitness];
  });

  best = population[idx].getPhrase;

  if (worldRecord === 1) clearInterval(interval);

  displayInfo(best);
};

const initAnimatedGA = () => {
  // Create a population with a target phrase, mutation rate, & population max
  for (let itr = 0; itr < popmax; itr++) population.push(new DNA(email.length));

  population.forEach((sample) => sample.calcFitness(email));

  interval = setInterval(gaStep, 0);
};


emailScramble = new ScrambledString(
  document.getElementById("email"),
  "emailScramble",
  shuffledEmail,
  shuffledPos
);
