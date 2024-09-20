import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Main from "../Sites/Main";
import { ROUTES } from "../Constants/Constants";
import Book from "../Sites/Book";
import { ThemeProvider } from "@mui/material";
import { themeCustom } from "../theme";

const App = () => {
  return (
    <ThemeProvider theme={themeCustom}>
      <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/Main" />} />
        <Route path={ROUTES.Main} element={<Main />} />
        <Route path={ROUTES.Book} element={<Book />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    </ThemeProvider>

  );
}

export default App;
