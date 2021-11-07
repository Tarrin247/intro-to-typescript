let container = document.getElementById('die-container');
let arr = [];
class Die {
  constructor() {
    this.div = document.createElement('div');
    this.value = Math.floor(Math.random() * 6) + 1;
    this.div.textContent = this.value;
    this.div.classList.add('dice');
    container.appendChild(this.div);
    this.roll();
    arr.push(this);
  }
  roll() {
    this.value = Math.floor(Math.random() * 6) + 1;
    this.div.textContent = this.value;
  }
  
}

let genDieBtn = document.getElementById('roll-it');
genDieBtn.addEventListener('click', function () {
  new Die
});

let rerollBtn = document.getElementById('reroll-it');
rerollBtn.addEventListener('click', function(){
  arr.forEach(dice => {
    dice.roll()
  })
})



// //math.random - gen rand # from 0 - .99999. math.floor
// function randomVal(min, max) {
//   return Math.floor(Math.random()) * (max - min) + min;
// }