export type Task = {
	checked: boolean
	description: string
	value: number
}

export type TasksData = Array<{
	name: string
	tasks: Array<Task>
}>
