import { Container } from "./Components/Styled/Container.styled";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import Content from "./Content";
import Footer from "./Components/Footer";
import Card from './Components/Card';

function App() {
  const theme={
    colors:{
      header:"#ebfbff",
      body:"#fff",
      footer:"003333"

   
    },
    mobile: '768px',

  }
  return (
    <ThemeProvider theme={theme}>
    <>
     <Header/>
    <Container>
       {Content.map((item,index)=>
      <Card key={index} item={item} />
       
       )}

    </Container>
    <Footer/>
    </>
    </ThemeProvider>
    
   
  );
}

export default App;
