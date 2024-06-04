import { InputProps } from "./type";
import styled from "@emotion/styled";

export default function Input({ name, value, onChange, onKeyDown, placeholder, autocomplete = 'off' }: InputProps) {
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

const InputWrapper = styled.input`
    display: flex;
    height: 43px;
    padding: 12px 16px;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid var(--Black-10, rgba(34, 34, 34, 0.1));
    background: var(--Black-3, rgba(34, 34, 34, 0.03));
`;
