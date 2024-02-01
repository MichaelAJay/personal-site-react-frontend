import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';

export const colorAliases = {
  treeDarkGreen: '#31474f',
  lightGreen: '#a2b4a9',
  darkGreen: '#32454c',
  sandBrown: '#a8a58c',
  darkSand: '#aba58e',
  rockBrown: '#6e7170',
  mountainLight: '#fffbed',
  olivegreen: '#806e19',
  lightredsand: '#e09367',
  lightoceanblue: '#46675f',
  lightoceanbluelite: '#46675f70'
}

const colors = {
  primaryBackground: colorAliases.mountainLight,
  secondaryBackground: colorAliases.lightGreen,
  redTest: '#ff0000',
  blueTest: '#0000ff',
  primary: '#31474f', // was used for button fill
  primaryText: colorAliases.lightGreen,
  buttonText: colorAliases.lightGreen,
  contentBorder: colorAliases.rockBrown,
  transparent: '#00000000',
  buttonFill: colorAliases.lightoceanblue,
}

const theme = {
  token: {
    colorPrimary: colors.primary,
    colorText: colorAliases.darkGreen,
    colorBgContainer: colors.primaryBackground
    // colorBgContainer changes the background color of the nav bar
  },
  components: {
    Layout: {
      // header
      headerBg: colors.secondaryBackground,
      headerPadding: '10px 0',
      // body
      bodyBg: colors.contentBorder,
      // sider
      siderBg: colorAliases.darkGreen
    },
    Button: {
      // defaultBg: colors.primary,
      defaultBg: colors.buttonFill,
      defaultColor: colors.buttonText
    },
    Menu: {
      itemColor: colorAliases.mountainLight,
      itemBg: colors.transparent
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
