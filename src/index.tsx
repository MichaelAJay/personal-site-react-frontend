import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';

const colors = {
  primaryBackground: '#fcf6e6',
  redTest: '#ff0000',
  primary: '#31474f',
  primaryText: '#a2b4a9',
  buttonText: '#a2b4a9'
}

const theme = {
  token: {
    colorPrimary: colors.primary,
    colorText: colors.primaryText,
    colorBgContainer: colors.primaryBackground
    // colorBgContainer changes the background color of the nav bar
  },
  components: {
    Layout: {
      // header
      headerBg: colors.primaryBackground,
      headerPadding: '20px 50px 20px',
      // body
      bodyBg: colors.primaryBackground // This handles the layout's content section background color
    },
    Button: {
      defaultBg: colors.primary,
      defaultColor: colors.buttonText
    }
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
