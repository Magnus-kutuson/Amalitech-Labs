
function Superhero(name, secretIdentity, powers, weakness) {
    this.name = name;
    this.secretIdentity = secretIdentity;
    this.powers = powers;
    this.weakness = weakness;
  }
  
  Superhero.prototype.usePower = function(powerName) {
    console.log(`${this.name} is using ${powerName}!`);
  };
  
  Superhero.prototype.revealIdentity = function() {
    console.log(`The secret identity of ${this.name} is ${this.secretIdentity}.`);
  };
  
  Superhero.prototype.battle = function(opponent) {
    const thisHeroPower = this.powers.length;
    const opponentPower = opponent.powers.length;
    
    if (thisHeroPower > opponentPower) {
      return `${this.name} wins the battle against ${opponent.name}!`;
    } else if (thisHeroPower < opponentPower) {
      return `${opponent.name} wins the battle against ${this.name}!`;
    } else {
      return `${this.name} and ${opponent.name} are equally matched!`;
    }
  };
  

  const heroes = [
    new Superhero("Spider-Man", "Peter Parker", ["Web shooting", "Wall-crawling", "Spider-sense"], "Lack of self-confidence"),
    new Superhero("Iron Man", "Tony Stark", ["Powered suit", "Genius intellect"], "Alcoholism"),
    new Superhero("Batman", "Bruce Wayne", ["Martial arts", "Detective skills"], "No superpowers"),
    new Superhero("Hulk", "Bruce Banner", ["Super strength", "Durability"], "Anger management issues"),
    new Superhero("Superman", "Clark Kent", ["Super strength", "Flight", "Laser vision"], "Kryptonite"),
    new Superhero("Captain America", "Steve Rogers", ["Super strength", "Shield mastery"], "Lack of advanced combat skills")
  ];
  

  const hero1Select = document.getElementById('hero1');
  const hero2Select = document.getElementById('hero2');
  
  heroes.forEach(hero => {
    const option1 = document.createElement('option');
    option1.value = hero.name;
    option1.textContent = hero.name;
    hero1Select.appendChild(option1);
  
    const option2 = document.createElement('option');
    option2.value = hero.name;
    option2.textContent = hero.name;
    hero2Select.appendChild(option2);
  });
  

  document.getElementById('battleBtn').addEventListener('click', () => {
    const hero1Name = hero1Select.value;
    const hero2Name = hero2Select.value;
  

    const hero1 = heroes.find(hero => hero.name === hero1Name);
    const hero2 = heroes.find(hero => hero.name === hero2Name);
  
  
    const result = hero1.battle(hero2);
  
    document.getElementById('result').textContent = result;
  });
  