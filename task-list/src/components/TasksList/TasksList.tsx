// Dependencies
import { h } from "preact";
import { useState } from "preact/hooks";

// Components
import { ProgressBar } from "../ProgressBar/ProgressBar";

// Types
import { Task, TasksData } from "../../types";

// Style
import style from "./TasksList.css";

type Props = {
  data: TasksData;
  isLoading: boolean;
  updateTasks: Function;
};

export function TasksList({
  data,
  isLoading,
  updateTasks,
}: Props): JSX.Element {
  const [shownTasks, setShownTasks] = useState<number[]>([]);

  // Handlers
  const onToggleTaskList = (listIndex: number): void => {
    let updatedShown = [...shownTasks];

    const isOpen = shownTasks.findIndex((val) => val === listIndex);
    if (isOpen !== -1) {
      updatedShown.splice(isOpen, 1);
    } else {
      updatedShown.push(listIndex);
    }

    setShownTasks(updatedShown);
  };

  const onToggleTaskCheck = (groupIndex: number, taskIndex: number) => {
    let updatedData = [...data];
    updatedData[groupIndex].tasks[taskIndex].checked =
      !data[groupIndex].tasks[taskIndex].checked;
    updateTasks(updatedData);
  };

  // Functionality
  const isListOpen = (listIndex: number): boolean => {
    const found = shownTasks.find((val) => val === listIndex);
    return found !== undefined;
  };

  // Renderization
  const renderTasks = (tasks: Task[], groupIndex: number): JSX.Element[] => {
    return tasks.map((task, index) => {
      return (
        <li class={style.tasksList__task} key={index}>
          <input
            type="checkbox"
            checked={task.checked}
            onChange={() => onToggleTaskCheck(groupIndex, index)}
          />
          <p>{task.description}</p>
        </li>
      );
    });
  };

  const renderGroups = (): JSX.Element[] => {
    return data.map((group, index) => {
      const isOpen = isListOpen(index);
      return (
        <li class={style.group__wrapper} key={index}>
          <div class={style.group}>
            <span class={style.group__name}>{group.name}</span>
            <div
              class={style.group__toggle}
              onClick={() => onToggleTaskList(index)}
            >
              {isOpen ? "Hide" : "Show"}
            </div>
          </div>
          <div
            style={{ maxHeight: isOpen ? 200 : 0 }}
            class={style.tasksList__wrapper}
          >
            <ul class={style.tasksList}>{renderTasks(group.tasks, index)}</ul>
          </div>
        </li>
      );
    });
  };

  return (
    <div class={style.container}>
      <div class={style.container__header}>
        <h3 class={style.header__title}>Lodgify Grouped Tasks</h3>
        {/* Progress bar */}
        <ProgressBar data={data} loading={isLoading} />
      </div>
      <ul class={style.container__group}>
        {!isLoading && data && renderGroups()}
      </ul>
    </div>
  );
}
