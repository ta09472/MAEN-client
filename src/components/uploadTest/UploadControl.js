import Input from "./Input";
import TextArea from "./TextArea";
import Video from "./Video";
const UploadControl = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "video":
      return <Video type="file" {...rest} />;
    default:
      return null;
  }
};

export default UploadControl;
