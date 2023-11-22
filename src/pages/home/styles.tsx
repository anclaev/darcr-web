import styled from '@emotion/styled'

import { ReactComponent as LogoVertical } from '@assets/svg/logo-vertical.svg'

export const StyledLogo = styled(LogoVertical)`
  width: 100px;
`

export const StyledHome = styled.main`
  position: relative;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  min-height: 100vh;
`
export const StyledContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  transform: translateY(-50%);

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

export const StyledWelcomeSignin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledWelcome = styled.span`
  font-size: 36px;
  font-weight: 200;
  letter-spacing: 19.2px;
  margin-bottom: 15px;
  user-select: none;
  margin-left: 30px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`
export const StyledSigninButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  cursor: pointer;
  border: none;
  color: #fff;
  font-weight: 200;

  & > svg {
    margin-right: 20px;
    margin-bottom: 4px;
  }

  & > svg path {
    transition: 0.3s;
  }

  &:hover > svg path {
    fill: #28a7e8;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    letter-spacing: 2px;
  }
`
