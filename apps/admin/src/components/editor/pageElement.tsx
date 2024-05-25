import styled from "@emotion/styled";

interface pageElementType{
  index: number;
  description: string;
  selected?: boolean;
}

export default function PageElement({index, description, selected=false, ...props}:pageElementType){
  return(
    <Container selected={selected} {...props}>
      <Digit selected={selected}>{index}</Digit>
      {description}
    </Container>
  )
}

const Container = styled.button<{selected: boolean}>`
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 8px;

  background: #FFFFFF;
  color: ${({selected})=> selected ? "#222222" : "#22222280"};
  border: ${({selected})=> selected ? '2px #40DE6C' : '1px #2222221A'} solid;
  border-radius: 8px;
  cursor: pointer;

  font-size: 16px;
`

const Digit = styled.div<{selected: boolean}>`
  padding: 4px 8px;

  background: ${({selected})=> selected ? "#222222" : "#22222280"};
  color: #FFFFFF;
  border-radius: 999px;

  font-size: 12px;
  font-weight: 700;
`