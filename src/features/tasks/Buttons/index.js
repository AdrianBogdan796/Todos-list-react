import { Button, ButtonContainer } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  toggleHideDone,
  selectHideDone,
  selectIsEveryTaskDone,
  setAllDone,
} from "../tasksSlice";

const Buttons = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const dispatch = useDispatch();
  return (
    <ButtonContainer>
      {tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </ButtonContainer>
  );
};

export default Buttons;
