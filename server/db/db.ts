import connection from './connection.ts'

import { Widget, NewWidget } from '../../models/Widget.ts'

export function getWidgets(db = connection): Promise<Widget[]> {
  return db<Widget>('widgets').select()
}

export function addWidget(widget: Widget, db = connection): Promise<number> {
  return db('widgets').insert(widget)
}

export function deleteWidget(id: number, db = connection): Promise<void> {
  return db<Widget>('widgets').where({ id }).delete()
}
