export const generateRandomColor = () =>
  `hsla(${Math.random() * 360}, ${40 + 50 * Math.random()}%, 50%, 25%)`

// 二2,3,4(資104) -> [{ time: 17, span: 3, location: '資104' }]
// 二6,7(共202)五6,7(共304) -> [{ time: 21, span: 2, location: '共202' }, { time: 66, span: 2, location: '共304' }]
// 二9,10,A,B,C,D(共202) -> [{ time: 24, span: 6, location: '共202' }]
export const parseInfo = (info: string) => {
  const re =
    /([一二三四五六日])((?:10|[1-9A-D])(?:,(?:10|[1-9]|[A-D]))*)\((.*?)\)/g
  const days = ['一', '二', '三', '四', '五', '六', '日']
  const ret: {
    time: number[]
    location: string
  }[] = []
  let match: RegExpExecArray | null
  while ((match = re.exec(info)) !== null) {
    const day = match[1]
    const time = match[2].split(',')
    const location = match[3]
    ret.push({
      time: time.map(t => {
        if ('ABCD'.includes(t))
          return days.indexOf(day) * 15 + parseInt(t, 16) + 1
        else return days.indexOf(day) * 15 + parseInt(t)
      }),
      location
    })
  }
  return ret
}
