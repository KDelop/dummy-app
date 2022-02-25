import { CSSProperties } from "@mui/styles";

export interface ITextareaProps {
  value?: string,
  placeholder?: string,
  disabled?: boolean,
  isFocused?: boolean,
  containerStyle?: CSSProperties,
  textStyle?: CSSProperties,
  onChange?: (checked) => boolean;
}
