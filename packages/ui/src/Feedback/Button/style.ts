import * as _ from "./style";import styled from "@emotion/styled";
import { css, SerializedStyles } from "@emotion/react";

export const StyledWrapper = styled.div`
    display: inline-flex;
    padding: 8px 8px 8px 16px;
    align-items: center;
    gap: 8px;
    border-radius: 999px;
    border: 1px solid var(--Black-10, rgba(34, 34, 34, 0.1));
    cursor: pointer;
    background: #ffffff;
`

export const StyledText = styled.div`
  font-size: 16px;
  font-weight: 600;
`