// import styles from '../src/styles/app'
import * as Styles from '../src/styles/app'
import Footer from './components/footer';
import Logo from './components/logo';
import PokemonContainer from './components/pokemonContainer';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/settings/theme';
import { useChangeTheme } from './hooks/useChangeTheme';
import Modal from './components/modal';
import useModal from './hooks/useModal';
import Button from './components/button';

function App() {
   const [theme, toggleTheme] = useChangeTheme()
   const {isOpen, toggle} = useModal()

  function handleChangeTheme() {
    toggleTheme()
  }
  
  return (
    <div className="App">
      <ThemeProvider theme={theme ==='dark' ? darkTheme : lightTheme}>
        <Styles.Container>
          <Modal isOpen={isOpen} toggle={toggle} >
            <h1>Olá, este é um Sobre Mim</h1>
          </Modal>
          <Logo />
          <main>
            <PokemonContainer />
          </main>
          <Footer changeTheme={() => handleChangeTheme()} buttonName='Mude o tema'/>
          <Button onClick={() => {toggle()}} maxWidth={100} title={'Sobre'}></Button>
        </Styles.Container>
      </ThemeProvider>
      
      </div>
  );
}

export default App;
