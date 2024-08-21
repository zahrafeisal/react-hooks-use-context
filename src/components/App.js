import React, { useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from "../context/user";
import { ThemeProvider, ThemeContext } from "../context/theme";

function App() {
  const theme = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <main className={theme}>
        <UserProvider>
          <Header />
          <Profile />
        </UserProvider>
      </main>
    </ThemeProvider>
  );
}

export default App;
