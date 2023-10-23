import './style.css'
import { getCustomerId } from './customer-tools';
import * as customertools from './customer-tools';
import Header from './components/Header';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
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

</ol>
`