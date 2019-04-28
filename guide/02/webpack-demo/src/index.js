import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
function component() {
  let component = document.createElement('div')
  component.innerHTML = _.join(['hello', 'webpack'], '')
  component.classList.add('hello')

  let myIcon = new Image()
  myIcon.src = Icon
  component.appendChild(myIcon)
  return component
}
document.body.appendChild(component())
