export type Course = {
  id: number
  name: string
  info: string
  overview?: string
  professor?: string
  credits?: number
  score?: string
  visit?: boolean
}

export type CourseInfo = {
  ser_no: string
  cou_code: string
  cou_cname: string
  cou_ename: string
  dpt_abbr: string
  cou_teacno: string
  tea_cname: string
  cls_time: string
  credit: string
  day1: string
  day2: string
  day3: string
  day4: string
  day5: string
  day6: string
  clsrom_1: string
  clsrom_2: string
  clsrom_3: string
  clsrom_4: string
  clsrom_5: string
  clsrom_6: string
}

export type Semester = {
  year: number
  semester: number
  courses: Course[]
  credits: number
  rank?: number
  gpa?: number
}

export type Profile = {
  id?: string
  name?: string
  department?: string
  grade?: string
  sex?: string
  status?: string
  idNumber?: string
  birthday?: string
  english?: string
  address?: string
  identity?: string
}

export type College = {
  name: string
}

export type Department = {
  id: string
  college_id: string
  name_short: string | null
  name_full: string
  name_alt: string | null
}

export type Category = {
  code: string
  full_name: string
}
