import React from 'react'
import ReactDom from 'react-dom'
// import Button from './button'
import Icon from './icon'

const fn: React.MouseEventHandler = e => {
  console.log(e.currentTarget)
}

ReactDom.render(
  <div>
    {/*<Icon name="wechat"/>*/}
    {/*<Icon name="alipay"/>*/}
    {/*<Icon name="qq"/>*/}
    {/*<Icon name="github"/>*/}
    {/*<Icon name="twitter"/>*/}
    {/*<Icon name="ins"/>*/}
    <Icon name="apple" className="apple" onClick={fn}/>
    <Icon onClick={() => console.log('Android')} name="android"/>
  </div>,
  document.getElementById('root'),
)
