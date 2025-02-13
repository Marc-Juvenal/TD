import { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
	const [taskData, setTaskData] = useState({
		task: "",
		status: "todo",
		tags: [],
	});

	const checkTag = (tag) => {
		return taskData.tags.some((item) => item === tag);
	};

	const selectTag = (tag) => {
		if (taskData.tags.some((item) => item === tag)) {
			const filterTags = taskData.tags.filter((item) => item !== tag);
			setTaskData((prev) => {
				return { ...prev, tags: filterTags };
			});
		} else {
			setTaskData((prev) => {
				return { ...prev, tags: [...prev.tags, tag] };
			});
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setTaskData((prev) => {
			return { ...prev, [name]: value };
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(taskData);
		setTasks((prev) => {
			return [...prev, taskData];
		});
		setTaskData({
			task: "",
			status: "todo",
			tags: [],
		});
	};

	return (
		<header className="app_header">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="task"
					value={taskData.task}
					className="task_input"
					placeholder="Enter your task"
					onChange={handleChange}
				/>

				<div className="task_form_bottom_line">
					<div>
						<Tag
							tagName="HTML"
							selectTag={selectTag}
							selected={checkTag("HTML")}
						/>
						<Tag
							tagName="CSS"
							selectTag={selectTag}
							selected={checkTag("CSS")}
						/>
						<Tag
							tagName="JavaScript"
							selectTag={selectTag}
							selected={checkTag("JavaScript")}
						/>
						<Tag
							tagName="React"
							selectTag={selectTag}
							selected={checkTag("React")}
						/>
						<Tag
							tagName="Express"
							selectTag={selectTag}
							selected={checkTag("Express")}
						/>
						<Tag
							tagName="NodeJs"
							selectTag={selectTag}
							selected={checkTag("NodeJs")}
						/>
						<Tag
							tagName="MonorepoJs"
							selectTag={selectTag}
							selected={checkTag("MonorepoJs")}
						/>
						<Tag
							tagName="Github"
							selectTag={selectTag}
							selected={checkTag("Github")}
						/>
						<Tag
							tagName="ViteJs"
							selectTag={selectTag}
							selected={checkTag("ViteJs")}
						/>
					</div>

					<div className="container">
						<select
							name="status"
							value={taskData.status}
							className="task_status"
							onChange={handleChange}
						>
							<option value="todo">To do</option>
							<option value="doing">Doing</option>
							<option value="done">Done</option>
						</select>
						<button type="submit" className="task_submit">
							+ Add
						</button>
					</div>
				</div>
			</form>
		</header>
	);
};

export default TaskForm;
