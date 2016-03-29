/* @flow */

import ReactDOM from 'react-dom'
import {createElement} from 'react'
import AppComponent from 'regexp-input-demo/AppComponent'

const node: Element = document.getElementById('app');


ReactDOM.render(createElement(AppComponent, {}), node)
