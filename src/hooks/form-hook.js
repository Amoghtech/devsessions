import {useReducer, useCallback} from "react";

const formreducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE": {
      let formisvalid = true;
      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue;
        }

        if (inputId === action.inputId) {
          formisvalid = formisvalid && action.isValid;
        } else {
          formisvalid = formisvalid && state.inputs[inputId].isValid;
        }
      }

      return {
        inputs: {
          ...state.inputs,
          [action.inputId]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
        isValid: formisvalid,
      };
    }
    case "SET_DATA": {
      return {
        inputs: action.inputs,
        isValid: action.formisvalid,
      };
    }
    default: {
      return state;
    }
  }
};

export const useForm = (initialinputs, initialformvalidity) => {
  const [formstate, dispatch] = useReducer(formreducer, {
    inputs: initialinputs,
    isValid: initialformvalidity,
  });

  const inputchangehandler = useCallback((id, value, isvalid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isvalid,
      inputId: id,
    });
  }, []);


  return [formstate, inputchangehandler];
};
