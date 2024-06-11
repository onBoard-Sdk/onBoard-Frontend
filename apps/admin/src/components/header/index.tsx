import styled from "@emotion/styled";
import { logoImage } from "@/assets";
import { Button } from "@onboard/ui";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const locate = useLocation();
  const navigate = useNavigate();
  if (locate.pathname === "/" || locate.pathname === "/signup") {
    return null;
  }
  return (
    <StyledWrapper>
      <Link to="/service">
        <StlyedLogo src={logoImage} alt="Logo" />
      </Link>
      <Button buttonColor="gray" onClick={() => navigate("/")}>
        로그아웃
      </Button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 70px;
  background-color: white;
  box-shadow:
    rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  z-index: 100;
`;

const StlyedLogo = styled.img`
  width: 160px;
`;
