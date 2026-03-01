interface Props {
  buttonName: String;
  color?: String;

  onClick: () => void;
}

const Button = ({ buttonName, onClick }: Props) => {
  return <button onClick={onClick}>{buttonName}</button>;
};

export default Button;
