import { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    width?: string;
    iconClick?: () => void;
    autocomplete?: string;
}