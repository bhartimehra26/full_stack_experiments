import React from "react";
import "./App.css";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getTitle() {
    return `${this.name} (Person)`;
  }

  getMessage() {
    return `Hello, my name is ${this.name}.`;
  }

  getExtraInfo() {
    return null; 
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  getTitle() {
    return `${this.name} (Student)`;
  }

  getMessage() {
    return `Hello, my name is ${this.name} and I'm studying ${this.major}.`;
  }

  getExtraInfo() {
    return `Major: ${this.major}`;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  getTitle() {
    return `Dr. ${this.name} (Teacher)`;
  }

  getMessage() {
    return `Hello, my name is Dr. ${this.name} and I teach ${this.subject}.`;
  }

  getExtraInfo() {
    return `Teaching: ${this.subject}`;
  }
}

function App() {
  const people = [
    new Person("Jack Wilson", 34),
    new Student("Michael Baldwin", 20, "Physics"),
    new Teacher("Emma Rooney", 47, "Mathematics"),
  ];

  return (
    <div className="container">
      <h1>Person Class Hierarchy</h1>
      <div className="cards">
        {people.map((p, index) => (
          <div key={index} className="card">
            <h2>{p.getTitle()}</h2>
            <p>Age: {p.age}</p>
            <p className="message">{p.getMessage()}</p>
            {p.getExtraInfo() && <p>{p.getExtraInfo()}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
