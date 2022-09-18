type Link = {
	name: string
	url: string
}

export type Course = {
	id: number
	name: string
	info: string
	overview?: string
	professor?: string
	credits?: number
	score?: string
	links?: Link[]
	visit?: boolean
}

export type CourseInfo = Course & {
	time: number[]
	location: string
}

export type Semester = {
	year: number
	semester: number
	courses: Course[]
	credits: number
	rank?: number
	gpa?: number
}
