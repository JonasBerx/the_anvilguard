import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";
import Navigation from "./components/navbar/Navigation";
import { ThemeProvider } from '@material-ui/core';
import {createTheme} from "@mui/material";

function App() {
  return (
          <BrowserRouter>
            <Navigation/>
            <div className="App">
              <AppRouter/>
            </div>
          </BrowserRouter>
  );
}

export default App;
