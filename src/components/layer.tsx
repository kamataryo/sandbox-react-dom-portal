import React from 'react'
import ReactDOM from 'react-dom'

type Props = {
  count: number
}

export const Layer: React.FC<Props> = (props: Props) => {

  const containerElem = React.useRef(null)
  const [elem, setElem] = React.useState<HTMLElement>()
  const {count} = props

  const onClick = () => {
    const childElem = document.createElement('div')
    childElem.innerHTML = '<p style="color: darkgreen;">This is a <strong>HTML</strong> Layer.</p>'
    childElem.setAttribute('style', 'padding: 1em; border: 1px dashed green;')
    setElem(childElem)
    // @ts-ignore
    containerElem.current && (containerElem.current as HTMLElement).appendChild(childElem)
  }

  return <div ref={containerElem} style={{padding: '1em', border: '1px solid blue'}}>
    <p style={{color: 'darkblue'}}>{`This is ${count}th `}<strong>{'React'}</strong>{' Layer.'}</p>
    {elem ?
      ReactDOM.createPortal(<Layer count={count + 1}></Layer>, elem) :
      <button onClick={onClick} disabled={!!containerElem.current}>{'Nest me'}</button>
    }
  </div>
}

export default Layer
