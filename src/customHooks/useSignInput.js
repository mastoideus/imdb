import { useState } from "react";

const validateField = (value, fieldName) => {
  let isValid;
  if (fieldName === "email") {
    isValid =
      value.includes("@") && value.slice(value.indexOf("@")).length >= 3;
  } else if (fieldName === "password") {
    const regexNoNum = /[0-9]/;
    isValid = value.length >= 8 && !regexNoNum.test(value);
  } else {
    isValid = true;
  }

  return isValid;
};

export const useSignInput = (fieldName) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValid = value.length > 0 && validateField(value, fieldName);
  const isInvalid = !isValid && isTouched;

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const blurHandler = () => {
    setIsTouched(true);
  };
  const resetInputValues = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    isInvalid,
    isValid,
    inputChangeHandler,
    blurHandler,
    reset: resetInputValues,
  };
};
