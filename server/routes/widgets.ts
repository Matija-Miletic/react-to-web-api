import express from 'express'
import { getWidgets, addWidget } from '../db/db.ts'
import { deleteWidget } from '../db/db.ts'

const router = express.Router()

router.get('/', (req, res) => {
  getWidgets()
    .then((widgets) => {
      res.json(widgets)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  addWidget(req.body)
    .then((id) => {
      res.json({ id })
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  deleteWidget(id)
    .then(() => {
      res.status(204).end()
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

export default router
