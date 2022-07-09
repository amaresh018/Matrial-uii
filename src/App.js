import Header from './Header';
import Container from '@material-ui/core/Container';
import './App.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Feature from './Feature';
function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <div className="App">

      <ThemeProvider theme={darkTheme}>
        <Container>
          <Header />
          <Feature/>
        </Container>

      </ThemeProvider>

    </div>
  );
}

export default App;
