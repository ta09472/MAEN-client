import axios from "axios";
// actiontype
const UPLOAD_POST = "UPLOAD_POST";

// action

export const uploadPost = (input) => {
  axios.post("http://localhost:8080/api/hello/", {});
  return {
    type: UPLOAD_POST,
    payload: {
      id: "",
      description: "",
      user_id: "",
      caption: "",
      video: "",
      views: 0,
    },
  };
};

const initialState = {
  id: "",
  description: "",
  user_id: "",
  caption: "",
  video: "",
  views: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_POST:
      return {
        ...state,
        id: action.id,
        description: action.payload.description,
        user_id: action.payload.user_id,
        caption: action.payload.caption,
        video: action.paylaod.video,
        views: action.payload.views,
      };
    default:
      return state;
  }
}
