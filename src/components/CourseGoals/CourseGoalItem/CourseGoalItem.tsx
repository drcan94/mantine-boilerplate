import React from "react";
import { GoalItem } from "./styles";
import { useMantineTheme } from "@mantine/core";

const CourseGoalItem: React.FC<any> = (props) => {
  // const [deleteText, setDeleteText] = useState('');
  const theme = useMantineTheme();
  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <GoalItem theme={theme} onClick={deleteHandler}>
      {props.children}
    </GoalItem>
  );
};

export default CourseGoalItem;
