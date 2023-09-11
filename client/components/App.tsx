import { useState, useEffect } from 'react'
import * as Models from '../../models/Widget.ts'
import { getWidgets } from '../apiClient.ts'
import AddWidget from './AddWidget.tsx'

function App() {
  const [widgets, setWidgets] = useState([] as Models.Widget[])

  const refreshWidgets = () => {
    getWidgets()
      .then((data) => {
        setWidgets(data)
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    refreshWidgets()
  }, [])

  return (
    <div>
      <h1>Widgets for the win!</h1>
      <AddWidget onRefresh={refreshWidgets} />
      {widgets.map((widget) => (
        <div key={widget.id}>
          <h2>{widget.name}</h2>
          <p>Price: {widget.price}</p>
          <p>Manufacturer: {widget.mfg}</p>
          <p>In Stock: {widget.inStock}</p>
        </div>
      ))}
    </div>
  )
}

export default App
