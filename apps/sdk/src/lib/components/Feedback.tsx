import { useWriteFeedback } from "@/lib/api/feedbacks";
import styled from "@emotion/styled";
import { Button, Input, Textarea } from "@onboard/ui";
import { useState } from "react";
import Airplaine from "../assets/airplane.svg";
import Left from "../assets/Left.svg";

const Feedback = ({ onClick }: { onClick: () => void }) => {
  const [feedback, setFeedback] = useState({ title: "", content: "" });
  const onChange = (e: any) => {
    const { name, value } = e.target;
    setFeedback({
      ...feedback,
      [name]: value,
    });
  };
  const { pathname } = window.location;

  const { mutate: PostWriteFeedback } = useWriteFeedback(onClick);

  return (
    <StyledWrapper>
      <StyledTitle>피드백</StyledTitle>
      <Input label="제목" name="title" value={feedback.title} onChange={onChange} />
      <Textarea
        label="내용"
        helpMessage="작성한 내용은 서비스 관리자에게 전달됩니디"
        height="115px"
        name="content"
        value={feedback.content}
        onChange={onChange}
      />
      <StyledFooter>
        <Button buttonColor="gray" onClick={onClick}>
          <img src={Left} alt="left" /> 가이드
        </Button>
        <Button
          buttonColor="green"
          onClick={() => {
            PostWriteFeedback({ path: pathname, serviceId: 17, ...feedback });
          }}
        >
          <img src={Airplaine} alt="airplaine" /> 전송
        </Button>
      </StyledFooter>
    </StyledWrapper>
  );
};

export default Feedback;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 260px;
  height: 350px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #2222221a;
`;

const StyledTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
