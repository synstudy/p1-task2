import { Animal } from './animals/animal.js';
import { Dog } from './animals/dog.js';
import { Cat } from './animals/cat.js';

class App {
    static run() {
        console.log("=== ДЕМОНСТРАЦИЯ РАБОТЫ КЛАССОВ ===\n");

        // Создаем объекты разных классов
        const genericAnimal = new Animal("Неизвестное животное", 3);
        const dog = new Dog("Бобик", 5, "Овчарка");
        const cat = new Cat("Мурзик", 2, "рыжий");

        // Массив для демонстрации полиморфизма
        const animals = [genericAnimal, dog, cat];

        // Демонстрация методов базового класса
        console.log("1. МЕТОДЫ БАЗОВОГО КЛАССА:");
        animals.forEach(animal => {
            console.log(`- ${animal.getInfo()}`);
            console.log(`- ${animal.move()}`);
        });

        console.log("\n2. ПЕРЕОПРЕДЕЛЕННЫЕ МЕТОДЫ:");
        animals.forEach(animal => {
            console.log(`- ${animal.makeSound()}`);
        });

        console.log("\n3. СПЕЦИФИЧЕСКИЕ МЕТОДЫ ПРОИЗВОДНЫХ КЛАССОВ:");
        // Демонстрация методов, специфичных для производных классов
        console.log(`- ${dog.fetch()}`);
        console.log(`- ${cat.climbTree()}`);

        console.log("\n4. ПРОВЕРКА ТИПОВ И НАСЛЕДОВАНИЯ:");
        console.log(`- dog instanceof Dog: ${dog instanceof Dog}`);
        console.log(`- dog instanceof Animal: ${dog instanceof Animal}`);
        console.log(`- cat instanceof Cat: ${cat instanceof Cat}`);
        console.log(`- cat instanceof Animal: ${cat instanceof Animal}`);

        console.log("\n5. ДОПОЛНИТЕЛЬНАЯ ДЕМОНСТРАЦИЯ ПОЛИМОРФИЗМА:");
        this.demoPolymorphism(animals);
    }

    static demoPolymorphism(animals) {
        console.log("Обработка животных через единый интерфейс:");
        animals.forEach((animal, index) => {
            console.log(`${index + 1}. ${animal.makeSound()}`);
        });
    }
}

App.run();