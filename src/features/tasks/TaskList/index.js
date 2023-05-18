import { List, Item, Content, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  toggleTaskDone,
  remove,
  selectHideDone,
} from "../tasksSlice";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>{task.content}</Content>
          <Button remove onClick={() => dispatch(remove(task.id))}>
            &#128465;
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;