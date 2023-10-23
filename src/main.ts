import { getCustomerId } from './customer-tools';
import * as customertools from './customer-tools';
import Header from './components/Header';
import frameworks from './data/framework.json';
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<h1>Test Imports</h1>
<ol>
  <li>import { getCustomerId } from './customer-tools';
      <div>${getCustomerId()}</div>
  </li>
  <li>import * as customer-tools from './customer-tools';
      <div>${customertools.getCustomers().length} customers</div>
  </li>
  <li>import Header from './components/Header';
    ${Header()}
  </li>
  <li>import frameworks from './data/framework.json';
    <div>
    ${frameworks.map(fw => {
  return `<div>${fw.name}</div>`
}).join('')}
    </div>
  </li>
  <li>import './style.css'
    <div>(see above)</div>
  </li>
  </ol>
    `