import { HeaderStyled , Nav, Logo, Image} from "./Styled/Header.styled";
import { Container } from "./Styled/Container.styled";
import { Button } from "./Styled/Button.styled";
import { Flex } from "./Styled/Flex.styled";

export default function Header()
{
    return(
        <HeaderStyled >
            <Container>
                <Nav>
                <Logo src='./images/logo.svg'  alt= "logo "/>
                <Button>Try it free</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>Build the Community your fans will Love</h1>
                        <p>Huddle reimagine the way we build communities, You have a voice, So does your audience 
                            Create Connections with your audience as you discuss with generic audiences.
                        </p>
                        <Button bg='#ff0099' color='#fff'>
                            Get started for free

                        </Button>
                    </div>
                    <Image src="./images/illustration-mockups.svg" alt='hello' />
                </Flex>

          
            </Container>
        </HeaderStyled>
    )
} 