import { h } from 'preact';
import style from './style.css';
import { useEffect, useState } from 'preact/hooks';

type Task = {
	checked: boolean
	description: string
	value: number
}

type TasksData = Array<{
	name: string
	tasks: Array<Task>
}>

const Home = () => {
	const [tasksData, setTasksData] = useState<TasksData>([])

	useEffect(() => {
		getTasksList()
	}, [])

	useEffect(() => {
		console.log(tasksData)
	}, [tasksData])

	const getTasksList = async () => {
		fetch('https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress')
			.then(res => {
				if (!res.ok) {
					console.log('Error on getTasksList then')
				}
				return res.json()
			})
			.then(parsedRes => {
				setTasksData(parsedRes)
			})
			.catch(err => {
				console.log('Error on getTasksList catch', err)
			})
	}

	return (
		<div class={style.home}>
			<div className="container">
				<div className="container__header">
					
				</div>
				<div className="container__list">
					
				</div>
			</div>
		</div>
	);
};

export default Home;
