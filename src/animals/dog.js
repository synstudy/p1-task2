import { Animal } from './animal.js';

export class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    // Переопределение метода makeSound
    makeSound() {
        return `${this.name} говорит: Гав-гав!`;
    }

    // Специфический метод для собаки
    fetch() {
        return `${this.name} (порода: ${this.breed}) приносит палку!`;
    }

    // Переопределение метода getInfo с добавлением информации о породе
    getInfo() {
        return `${super.getInfo()}, Порода: ${this.breed}`;
    }
}