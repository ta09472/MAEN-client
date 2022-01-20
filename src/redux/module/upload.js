import axios from "axios";
// actiontype
const UPLOAD_POST = "UPLOAD_POST";

// action

export const uploadPost = (values) => {
  axios.post("http://localhost:8080/api/v1/posts/", {
    id: values.id,
    description: values.description,
    user_id: values.user_id,
    tags: values.tags,
    file: values.file,
  });
  return {
    type: UPLOAD_POST,
    payload: {
      id: values.id,
      description: values.description,
      user_id: values.user_id,
      tags: values.tags,
      file: values.file,
    },
  };
};

//reducer
const initialState = {
  id: 1,
  user_id: "beomsu",
  tags: "",
  description: "",
  file: null,
};

export default function reducer(state = initialState, action) {
  console.log("upload", state);
  console.log("upload", action);
  switch (action.type) {
    case UPLOAD_POST:
      return {
        ...state,
        id: action.id,
        description: action.payload.description,
        user_id: action.payload.user_id,
        tags: action.payload.tags,
        file: action.paylaod.file,
      };

    default:
      return state;
  }
}
