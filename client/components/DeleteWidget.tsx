import React from 'react'
import { deleteWidget } from '../apiClient.ts'

interface DeleteWidgetProps {
  id: number
  onRefresh: () => void
}

const DeleteWidget: React.FC<DeleteWidgetProps> = ({ id, onRefresh }) => {
  const handleDelete = () => {
    deleteWidget(id)
      .then(() => {
        onRefresh()
      })
      .catch((err) => {
        console.error('Delete widget error:', err)
      })
  }

  return <button onClick={handleDelete}>Delete</button>
}

export default DeleteWidget
