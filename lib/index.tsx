import React from 'react'
import ReactDom from 'react-dom'
// import Button from './button'
import Icon from './icon'

ReactDom.render(
  <div>
    <Icon name="wechat"/>
    <Icon name="alipay"/>
    <Icon name="qq"/>
    <Icon name="github"/>
    <Icon name="twitter"/>
    <Icon name="ins"/>
    <Icon name="apple"/>
    <Icon name="android"/>
  </div>,
  document.getElementById('root'),
)
