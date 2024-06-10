import * as _ from "./style";
import { ButtonProps } from "./type";
import { FeedbackImages } from "../../assets/feedback/index"

export const Button = function ({onClick}: ButtonProps) {
	return (
	  <_.StyledWrapper onClick={onClick}>
		<_.StyledText>도움이 필요한가요?</_.StyledText>
		<img src={FeedbackImages.feedbackIcon} alt="" />
	  </_.StyledWrapper>
	);
  });
  