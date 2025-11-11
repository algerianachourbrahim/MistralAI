// Import stylesheets
import './style.css';


const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const enum Shape {
  Circle,

  Square
}

console.log(Shape['1']);