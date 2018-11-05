/**
 * Created by codingnuts on 2018/10/22.
 */

class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    b:string = "hello"
    bark() {
        console.log('Woof! Woof!');
    }
    getB(): string {
        return this.b
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

console.info(dog.getB())