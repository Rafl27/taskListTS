import * as Component from './styles'
import { useState, KeyboardEvent } from 'react'

type Props = {
  onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState('')

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.code === 'Enter' && inputText != '') {
      onEnter(inputText)
    }
  }

  return (
    <Component.Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Add a task"
        onChange={(event) => {
          setInputText(event.target.value)
        }}
        onKeyUp={handleKeyUp}
      />
    </Component.Container>
  )
}
