// Dependencies
import { h } from "preact";
import { useEffect } from "preact/hooks";

// Style
import style from "./ProgressBar.css";
import { TasksData } from "../../types";

type Props = {
  data: TasksData;
  loading: boolean;
};

export function ProgressBar({ data, loading }: Props): JSX.Element {
  const getCompletedPercentage = (): string => {
    let totalValue = 0;
    let completedValue = 0;
    for (let groupI = 0; groupI < data.length; groupI++) {
      for (let taskI = 0; taskI < data[groupI].tasks.length; taskI++) {
        totalValue += data[groupI].tasks[taskI].value;

        if (data[groupI].tasks[taskI].checked) {
          completedValue += data[groupI].tasks[taskI].value;
        }
      }
    }

    const normalizedValue = ((completedValue * 100) / totalValue).toFixed(0);
    return `${normalizedValue}%`;
  };

  return (
    <div class={style.progress}>
      {/* Progress */}
      <div
        class={style.progress__current}
        style={{ width: getCompletedPercentage() }}
      />
      {/* Text */}
      <div
        class={style.progress__percentage}
        style={{ left: `calc(${getCompletedPercentage()} - 40px)` }}
      >
        {getCompletedPercentage()}
      </div>
    </div>
  );
}
