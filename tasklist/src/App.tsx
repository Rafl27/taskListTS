import * as Component from './App.styles'
import { useState } from 'react'
import { Item } from './types/Item'
import { ListItem } from './components/ListItem/index'
import { AddArea } from './components/AddArea/Index'
import './App.css'

function App() {
  const [list, setList] = useState<Item[]>([
    //Default Item
    { id: 1, name: 'Wash Dog', done: false },
    { id: 2, name: 'Buy Cake', done: true },
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  return (
    <>
      <Component.Container>
        <Component.Area>
          <Component.Header>TS Task List</Component.Header>
          <AddArea onEnter={handleAddTask}/>
          {list.map((item, index) => {
            return <ListItem key={index} item={item} />
          })}
        </Component.Area>
      </Component.Container>
    </>
  )
}

export default App
