import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import NoMatchPage from "./pages/NoMatchPage";
import JobPage from "./pages/JobPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

function App() {
  let location = useLocation();
  let state = location.state;
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
    typography: {
      fontFamily: "'Work Sans', sans-serif",
      fontWeight: 800,
      components: {
        MuiPaper: {
          styleOverrides: {
            root: {
              border: "100px solid red",
            },
          },
        },
      },
    },
  });

  //-----Authentication fncs

  function RequireAuth({ children }) {
    let auth = useAuth();
    if (!auth.user) {
      console.log("RequireAuth location", location);
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/form" state={{ from: location }} replace />;
    }
    return children;
  }
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes location={state?.backgroundLocation || location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<HomePage />} />
          <Route path="job/:id" element={<HomePage />} />
          <Route path="*" element={<NoMatchPage />} />
        </Routes>
        <Routes>
          <Route path="/form" element={<FormPage />} />
          <Route
            path="/job/:id"
            element={
              <RequireAuth>
                <JobPage />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
