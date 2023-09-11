import request from 'superagent'
import { NewWidget } from '../models/Widget'

const widgetUrl = '/api/v1/widgets/'

export function getWidgets(): Promise<any> {
  return request.get(widgetUrl).then((res) => res.body)
}

export function addWidget(widget: NewWidget): Promise<any> {
  return request
    .post(widgetUrl)
    .send(widget)
    .then((res) => res.body)
}
