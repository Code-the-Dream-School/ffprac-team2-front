import './index.css';

import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from './util/theme.ts';
import { GlobalStateProvider } from '../src/context/GlobalStateContext ';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <GlobalStateProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </GlobalStateProvider>
        </ChakraProvider>
    </React.StrictMode>
);
