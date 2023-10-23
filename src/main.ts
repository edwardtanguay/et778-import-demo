import { getCustomerId } from './customer-tools';
import * as customertools from './customer-tools';
import Header from './components/Header';
import frameworks from './data/framework.json';
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<h1>Test Imports</h1>
<ol>
  <li>import { getCustomerId } from './customer-tools';
      <div class="example">${getCustomerId()}</div>
  </li>
  <li>import * as customer-tools from './customer-tools';
      <div class="example">${customertools.getCustomers().length} customers</div>
  </li>
  <li>import Header from './components/Header';
    <div class="example">${Header()}</div>
  </li>
  <li>import frameworks from './data/framework.json';
    <div class="example">
    ${frameworks.map(fw => {
  return /*html*/ `<div>${fw.name}</div>`
}).join('')}
    </div>
  </li>
  <li>import './style.css'
    <div class="example">(links a style sheet in HTML head)</div>
  </li>
  </ol>
    `