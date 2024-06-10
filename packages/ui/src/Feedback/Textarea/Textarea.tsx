import { TextareaProps } from "./type";
import styled from "@emotion/styled";

export default function Textarea({
    name,
    value,
    onChange,
    onKeyDown,
    placeholder,
    autocomplete = 'off',
}: TextareaProps) {
    return (
        <>
            <InputWrapper
                name={name}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                placeholder={placeholder}
                autoComplete={autocomplete}
            ></InputWrapper>
        </>
    );
}

const InputWrapper = styled.textarea`
    display: flex;
    padding: 12px;
    align-items: flex-start;
    gap: 4px;
    flex: 1 0 0;
    align-self: stretch;

    border-radius: 8px;
    border: 1px solid var(--Black-10, rgba(34, 34, 34, 0.1));
    background: var(--Black-3, rgba(34, 34, 34, 0.03));
`;
