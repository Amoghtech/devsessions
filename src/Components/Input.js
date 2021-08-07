import "./Input.css";
import {useReducer, useEffect} from "react";
import {validate} from "../utils/validators";

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputstate, dispatch] = useReducer(reducer, {
    value: props.initialvalue||"",
    isValid:props.initialvalid||false,
    isTouched: false,
  });

  const {id, onInput} = props;
  const {value, isValid} = inputstate;
  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changehandler = (e) => {
    dispatch({
      val: e.target.value,
      type: "CHANGE",
      validators: props.validators,
    });
  };

  const touchandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const element =
    props.element === "input" ? (
      <input
        type={props.text}
        id={props.id}
        placeholdeer={props.placeholder}
        onChange={changehandler}
        onBlur={touchandler}
        value={inputstate.value}
      />
    ) : (
      <textarea
        value={inputstate.value}
        id={props.id}
        onBlur={touchandler}
        rows={props.rows || 3}
        onChange={changehandler}
      />
    );
  return (
    <div
      className={`form-control ${
        !inputstate.isValid && inputstate.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputstate.isValid && inputstate.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
