// Dependencies
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

// Components
import { TasksList } from "../../components/TasksList/TasksList";

// Types
import { TasksData } from "../../types";

// Style
import style from "./style.css";

const Home = () => {
  const [tasksData, setTasksData] = useState<TasksData>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [hasError, setError] = useState<boolean>(false);

  useEffect(() => {
    getTasksList();
  }, []);

  const getTasksList = async () => {
    setLoading(true);
    fetch(
      "https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress"
    )
      .then((res) => {
        if (!res.ok) {
          console.log("Error on getTasksList then");
          setError(true);
        }

        throw Error;
        return res.json();
      })
      .then((parsedRes) => {
        setTasksData(parsedRes);
      })
      .catch((err) => {
        console.log("Error on getTasksList catch", err);
        setError(true);
      });
    setLoading(false);
  };

  return (
    <div class={style.home}>
      <TasksList
        data={tasksData}
        isLoading={isLoading}
        updateTasks={setTasksData}
        error={hasError}
      />
    </div>
  );
};

export default Home;
