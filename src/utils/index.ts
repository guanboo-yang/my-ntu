import { useMyTheme } from '../hooks'

const { mode } = useMyTheme()

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

const linkColorMap = new Map<string, { light: string; dark: string }>([
  ['Ceiba', { light: '#82c400', dark: '' }],
  ['Cool', { light: '#003366', dark: '' }],
  ['Excel', { light: '#188038', dark: '' }],
  ['Gather Town', { light: '#00a0e9', dark: '' }],
  ['Github', { light: '', dark: '' }],
  ['Gradescope', { light: '#1ca0a0', dark: '' }],
  ['Judge', { light: '', dark: '' }],
  ['Mail', { light: '', dark: '' }],
  ['Meet', { light: '#1a73e8', dark: '' }],
  ['Slido', { light: '#39ac37', dark: '' }],
  ['Video', { light: '#ff3200', dark: '' }],
  ['Webex', { light: '#00bbed', dark: '' }],
  ['Website', { light: '#6a1b9a', dark: '' }],
  ['YouTube', { light: '#ff3200', dark: '' }]
])

export const linkToColor = (link: string) => {
  return mode.value === 'dark'
    ? linkColorMap.get(link)?.dark || '#fff'
    : linkColorMap.get(link)?.light || '#000'
}

const courseColorMap = new Map<string, string>()

export const getCourseColor = (name: string) => {
  if (!courseColorMap.has(name))
    courseColorMap.set(
      name,
      `hsla(${Math.random() * 360}, ${40 + 50 * Math.random()}%, 50%, 20%)`
    )
  return courseColorMap.get(name)
}
