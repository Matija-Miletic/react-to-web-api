import React from 'react'
import { addWidget } from '../apiClient.ts'

interface AddWidgetProps {
  onRefresh: () => void
}

function AddWidget({ onRefresh }: AddWidgetProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const newWidget = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      price: parseFloat(
        (form.elements.namedItem('price') as HTMLInputElement).value
      ),
      mfg: (form.elements.namedItem('mfg') as HTMLInputElement).value,
      inStock: parseInt(
        (form.elements.namedItem('inStock') as HTMLInputElement).value,
        10
      ),
      rating: parseInt(
        (form.elements.namedItem('rating') as HTMLInputElement).value,
        10
      ),
    }
    addWidget(newWidget)
      .then(() => {
        onRefresh()
      })
      .catch((err) => {
        console.error('Add widget error:', err)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" step="0.01" required />
      </div>
      <div>
        <label htmlFor="mfg">Manufacturer:</label>
        <input type="text" id="mfg" name="mfg" required />
      </div>
      <div>
        <label htmlFor="inStock">In Stock:</label>
        <input type="number" id="inStock" name="inStock" required />
      </div>
      <div>
        <label htmlFor="rating">Rating:</label>
        <input type="number" id="rating" name="rating" required />
      </div>
      <button type="submit">Add Widget</button>
    </form>
  )
}

export default AddWidget
