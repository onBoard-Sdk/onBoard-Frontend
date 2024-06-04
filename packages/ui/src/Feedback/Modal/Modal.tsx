import * as _ from './style';
import { ModalProps } from './type';
import { useState } from 'react';
import { useForm } from '../../../hooks/useForm';
import Input from '../Input';
import Textarea from '../Textarea';
import { FeedbackImages } from '../../../assets/feedback';

export const Modal = function ({ serviceId, path }: ModalProps) {
    // 임시 데이터
    const data = [
        '뭐뭐하는법',
        '이거 하는 법',
        '시작하는 법',
        '악법',
        '뭐뭐하는법',
        '이거 하는 법',
        '시작하는 법',
        '악법',
        '뭐뭐하는법',
        '이거 하는 법',
        '시작하는 법',
        '악법',
    ];

    const { form, setForm, handleChange } = useForm({
        title: '',
        content: '',
    });
    const { title, content } = form;

    const [is, setIs] = useState(false);
    const [step, setStep] = useState(true);
    return (
        <_.StyledWrapper is={is}>
            {step ? (
                <>
                    <_.StyledList>
                        {data.map((v, i) => (
                            <_.StyledBlock key={i}>{v}</_.StyledBlock>
                        ))}
                    </_.StyledList>

                    <_.StyledFeedbackBtnWrapper
                        onClick={() => {
                            setStep(false);
                        }}
                    >
                        <img src={FeedbackImages.sendIcon} alt="" />
                        피드백
                    </_.StyledFeedbackBtnWrapper>
                </>
            ) : (
                <>
                    <_.StyledTitle>피드백</_.StyledTitle>
                    <_.StyledText>제목</_.StyledText>
                    <Input name="title" value={title} onChange={handleChange} placeholder="" width="" />

                    <_.StyledText>내용</_.StyledText>
                    <Textarea name="content" value={content} onChange={handleChange} placeholder="" width="" />

                    <_.StyledBtnsWrapper>
                        <_.StyledFeedbackBtnWrapper
                            onClick={() => {
                                setStep(true);
                            }}
                        >
                            <img src={FeedbackImages.beforeIcon} alt="" />
                            가이드
                        </_.StyledFeedbackBtnWrapper>
                        <_.StyledSendButton onClick={() => {}}>
                            <img src={FeedbackImages.sendIcon} alt="" />
                            전송
                        </_.StyledSendButton>
                    </_.StyledBtnsWrapper>
                </>
            )}
        </_.StyledWrapper>
    );
};