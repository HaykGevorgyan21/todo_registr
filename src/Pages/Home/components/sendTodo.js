import REQUESTS from "../../../API/requests";
import get_todo_list from "./getTodo";
const send_todo = (todo, setTodoList, setDodo) => {
  const body = {
    description: todo,
  };

  const colback = (data) => {
    setDodo("");
    get_todo_list(setTodoList);
  };
  const errorColback = (error) => {};
  REQUESTS.ADD_TODO(
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body,
    colback,
    errorColback
  );
};

export default send_todo;
