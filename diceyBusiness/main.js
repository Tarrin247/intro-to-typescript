"use strict";
var container = document.getElementById('die-container');
var arr = [];
var Die = /** @class */ (function () {
    function Die() {
        this.div = document.createElement('div');
        this.value = Math.floor(Math.random() * 6) + 1;
        this.div.textContent = this.value.toString();
        this.div.classList.add('dice');
        container.appendChild(this.div);
        this.roll();
        arr.push(this);
    }
    Die.prototype.roll = function () {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.div.textContent = this.value.toString();
    };
    return Die;
}());
var genDieBtn = document.getElementById('roll-it');
genDieBtn.addEventListener('click', function () {
    new Die;
});
var rerollBtn = document.getElementById('reroll-it');
rerollBtn.addEventListener('click', function () {
    arr.forEach(function (dice) {
        dice.roll();
    });
});

