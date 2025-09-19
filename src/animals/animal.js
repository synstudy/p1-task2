export class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Метод для получения информации о животном
    getInfo() {
        return `Имя: ${this.name}, Возраст: ${this.age} лет`;
    }

    // Метод для издания звука (будет переопределен в производных классах)
    makeSound() {
        return "Животное издает звук";
    }

    // Метод для движения
    move() {
        return `${this.name} двигается`;
    }
}