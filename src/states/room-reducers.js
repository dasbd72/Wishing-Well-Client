const initialState = {
};

export const room = (state = initialState, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};

const initialFormState = {
};

export default (state = initialFormState, action) => {
  switch (actions.type) {
    case FORM_SUBMIT:
  }
  // if (action.type === "FORM_SUBMIT") {
  //   const { email, password } = action.payload;
  //   const values = {
  //     email,
  //     password
  //   };
  //   const errors = setErrors(email, password); // validate fields
  //   return {
  //     loginForm: {
  //       values,
  //       errors
  //     }
  //   };
  // }
  return state;
};
