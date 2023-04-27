// Dependencies
import { h } from "preact";

// Types
import { TasksData } from "../../types";

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
  const renderList = (): JSX.Element[] => {
    return data.map((task, index) => {
      return (
        <li class={style.list__element} key={index}>
          <span class={style.element__name}>{task.name}</span>
          <div
            class={style.element__toggle}
            onClick={() => onToggleTaskList(index)}
          >
            {isListOpen(index) ? "Hide" : "Show"}
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
      <ul class={style.container__list}>
        {!isLoading && data && renderList()}
      </ul>
    </div>
  );
}
