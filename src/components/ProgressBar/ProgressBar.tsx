// Dependencies
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

// Style
import style from "./ProgressBar.css";
import { TasksData } from "../../types";

type Props = {
  data: TasksData;
  loading: boolean;
  error: boolean;
};

export function ProgressBar({ data, loading, error }: Props): JSX.Element {
  //   State
  const [percentage, setPercentage] = useState<number>(0);

  // Effects
  useEffect(() => {
    if (data.length) {
      const currentPcg = getCompletedPercentage();
      setPercentage(currentPcg);
    }
  }, [data]);

  // Functionality
  const getCompletedPercentage = (): number => {
    if (data.length < 0) {
      return 0;
    }
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
    return parseInt(normalizedValue);
  };

  //   Helper
  const getTextStyle = (): { left: string; color: string } => {
    const rest = percentage < 10 ? percentage * 4 : 45;

    return {
      left: `calc(${percentage}% - ${rest}px)`,
      color: percentage < 5 ? "black" : "white",
    };
  };

  return (
    <div class={style.progress}>
      {/* Progress */}
      <div
        class={style.progress__current}
        style={{ width: `${percentage}%` }}
      />
      {/* Text */}
      {!error && (
        <div class={style.progress__percentage} style={getTextStyle()}>
          {percentage}%
        </div>
      )}
    </div>
  );
}
