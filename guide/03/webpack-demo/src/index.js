import _ from 'lodash'
import printMe from './print'

function component() {
  let element = document.createElement('div')
  let btn = document.createElement('button')
  element.innerHTML = _.join(['hello', 'webpack'], '')

  btn.innerHTML = 'Click me an check the console'

  btn.onclick = printMe

  element.appendChild(btn)
  return element
}

document.body.appendChild(component())
