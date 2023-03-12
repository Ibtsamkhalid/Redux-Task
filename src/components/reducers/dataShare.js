const initialState = {
  name: "",
  email: "",
  age: "",
  website: "",
  introduction: "",
};
const theData = (state = initialState, action) => {
  switch (action.type) {
    case "FORMDATA":
      console.log("form action dispatched");
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        age: action.payload.age,
        website: action.payload.website,
        introduction: action.payload.introduction,
      };
    default:
      return state;
  }
};

export default theData;
