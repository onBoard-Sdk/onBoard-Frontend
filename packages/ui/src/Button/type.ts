export type ButtonProps = {
  buttonColor: ButtonColorType;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonColorType = "green" | "gray" | "white";
