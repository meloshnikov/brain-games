#!/usr/bin/env node
import askUser from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const answer = askUser('May I have your name? ');
console.log(`Hello, ${answer}!`);
