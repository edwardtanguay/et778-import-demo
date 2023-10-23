import { getCustomerId } from './customer-tools.ts';
import * as customertools from './customer-tools.ts';
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Test Imports</h1>
<ol>
  <li>import { getCustomerId } from './customer-tools';
      <div>${getCustomerId()}</div>
  </li>
  <li>import * as customer-tools from './customer-tools';
      <div>${customertools.getCustomers().length} customers</div>
  </li>

</ol>
`