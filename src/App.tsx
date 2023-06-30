import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from './theme';
import { CssBaseline, Box, ThemeProvider } from '@mui/material';
import { routes as appRoutes } from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height="100vh" display="flex" flexDirection="column">
        <Router>
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  )
}

export default App;