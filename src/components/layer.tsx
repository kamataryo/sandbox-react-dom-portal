import React from 'react'
import ReactDOM from 'react-dom'

type Props = {
  count: number
}

const createNewHTMLElement = () => {
  const elem = document.createElement('div')
  elem.innerHTML = '<p style="color: darkgreen;">This is a <strong>HTML</strong> Layer.</p>'
  elem.setAttribute('style', 'padding: 1em; border: 1px dashed green;')
  return elem
}

export const Layer: React.FC<Props> = (props: Props) => {

  const container = React.useRef(null)
  const [innerElem, setInnerElem] = React.useState<HTMLElement>()
  const {count} = props

  const onClick = () => {
    const containerElem = container.current
    const isHTMLElement = (elem: any): elem is HTMLElement => elem && elem.appendChild
    if (isHTMLElement(containerElem)) {
      const childElem = createNewHTMLElement()
      containerElem.appendChild(childElem)
      setInnerElem(childElem)
    }
  }

  return <div ref={container} style={{padding: '1em', border: '1px solid blue'}}>
    <p style={{color: 'darkblue'}}>{`This is ${count}th `}<strong>{'React'}</strong>{' Layer.'}</p>
    {innerElem ?
      ReactDOM.createPortal(<Layer count={count + 1}></Layer>, innerElem) :
      <button onClick={onClick} disabled={!!container.current}>{'Nest me'}</button>
    }
  </div>
}

export default Layer
