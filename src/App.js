import { Box, Container, CssBaseline } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { ptBR } from "@material-ui/core/locale";
import Dashboard from "./dashboard/Dashboard";

const theme = createTheme({}, ptBR);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box marginTop={"50px"}>
          <Dashboard />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
