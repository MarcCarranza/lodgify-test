// Dependencies
import { h } from "preact";

// Types
import { Task, TasksData } from "../../types";

// Style
import style from "./TasksList.css";
import { useState } from "preact/hooks";

type Props = {
  data: TasksData;
  isLoading: boolean;
};

export function TasksList({ data, isLoading }: Props): JSX.Element {
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

  // Functionality
  const isListOpen = (listIndex): boolean => {
    const found = shownTasks.find((val) => val === listIndex);
    return found !== undefined;
  };

  // Renderization
  const renderTasks = (tasks: Task[]): JSX.Element[] => {
    return tasks.map((task) => {
      return (
        <li class={style.tasksList__task}>
          <input type="checkbox" checked={task.checked} />
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
          {/* TODO: This in pure CSS? */}
          <div
            style={{ maxHeight: isOpen ? 200 : 0 }}
            class={style.tasksList__wrapper}
          >
            <ul class={style.tasksList}>{renderTasks(group.tasks)}</ul>
          </div>
        </li>
      );
    });
  };

  return (
    <div class={style.container}>
      <div class={style.container__header}>
        <h3>Test</h3>
        {/* Progress bar */}
        <div>
          {/* Percentage */}
          <div></div>
          {/* Progress */}
          <div />
        </div>
      </div>
      <ul class={style.container__group}>
        {!isLoading && data && renderGroups()}
      </ul>
    </div>
  );
}
