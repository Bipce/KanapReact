import { useState } from "react";

const useForm = (initialState) => {
  const [state, setState] = useState(initialState);

  const changeHandler = (e) => {
    setState((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  return [state, changeHandler];
};

export default useForm;
