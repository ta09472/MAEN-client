import axios from "axios";
// actiontypes

export const FETCH_DATA = "FETCH_DATA";
export const UPLOAD_DATA = "UPLOAD_DATA";

// action

export const fetchData = () => async (dispatch) => {
  const response = await axios.get("http://localhost:8080/api/hello/all");
  dispatch({ type: FETCH_DATA, payload: response.data });
};

export const uploadData = (input) => {
  axios.post("http://localhost:8080/api/hello/", {
    name: input,
  });

  return {
    type: UPLOAD_DATA,
    payload: input,
  };
};

// initialState

const initialState = {
  posts: [],
  input: "",
};

//reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        posts: action.payload,
      };
    case UPLOAD_DATA:
      return {
        ...state,
        input: action.payload,
      };

    default:
      return state;
  }
}
