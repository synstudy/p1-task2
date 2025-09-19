import { Animal } from './animal.js';

export class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }

    // Переопределение метода makeSound
    makeSound() {
        return `${this.name} говорит: Мяу-мяу!`;
    }

    // Специфический метод для кота
    climbTree() {
        return `${this.name} (цвет: ${this.color}) залезает на дерево!`;
    }

    // Переопределение метода getInfo
    getInfo() {
        return `${super.getInfo()}, Цвет: ${this.color}`;
    }
}