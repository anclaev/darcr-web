import { signIn } from '@/utils/sign-in'

import {
  StyledHome,
  StyledContainer,
  StyledWelcome,
  StyledWelcomeSignin,
  StyledLogo,
} from './styles'

import TelegramLoginButton from 'telegram-login-button'

// import { ReactComponent as TelegramIcon } from '@assets/svg/telegram.svg'

const Home: React.FC = () => {
  return (
    <StyledHome>
      <StyledContainer>
        <StyledLogo />
        <div>
          <StyledWelcomeSignin>
            <StyledWelcome>Welcome</StyledWelcome>
            {/* <StyledSigninButton>
              <TelegramIcon />
              Sign in with Telegram
            </StyledSigninButton> */}
            <TelegramLoginButton
              botName="DarcrBot"
              dataOnauth={(data) => signIn(data)}
            />
          </StyledWelcomeSignin>
        </div>
      </StyledContainer>
    </StyledHome>
  )
}

export default Home
