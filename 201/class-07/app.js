'use strict';

let luke = {
}

// Constructor funsdtion syntax

// function ConstructorFunctionName (param1, param2) {
//   this.prop1 = param1;
//   this.prop2 = param2;
//   this.staticProp1 = 'ExString1';
//   this.method1 = function() {
//     console.log('do stuff');
//   };
// }

// ===================
// Student Constructor
// ===================

// let allStudents = [];

// function Student

function Student(firstName, lastName, preferredName, hometown) {
  this.course = '201d56';
  this.enrolled = true;
  this.instructors = 'Sam';
  this.firstName = firstName;
  this.lastName = lastName;
  this.preferredName = preferredName;
  this.hometown = hometown;
  this.codeNinja = true;
  this.introduction = function() {
    return `Hi, my name is ${this.firstName} ${this.lastName}, but you can call me ${this.preferredName}. I am from ${this.hometown}.`
  }
}

const lukeInstance = new Student('Luke', 'Chandler', 'Skywalker', 'Tatooine');

// Constructor = how many lines
// Each instance = line * 35