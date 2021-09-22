import { Button as AntButton } from "antd";

const Button = (props) => {
  return <AntButton {...props}>{props.children}</AntButton>;
};

export default Button;
