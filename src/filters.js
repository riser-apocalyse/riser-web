import momentjs from 'moment'

export const moment = (date, format) => {
  format = format || 'DD-MM-YYYY'
  return momentjs(date).format(format)
}
