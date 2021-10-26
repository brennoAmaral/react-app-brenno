/* import { Provider } from 'react-redux' */
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import LoadingScreen from './loadingScreen'
import { createGlobalStyle } from 'styled-components'


import reducers from '../redux/reducers'

const GlobalStyle = createGlobalStyle`
:root{
  --color-primary: #001D5E;
  --color-secundary: #FF901E;
  --color-white: white;
  font-family: 'Roboto', sans-serif !important;
}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`


export default function App({ Component, pageProps }) {
  const store = createStore(reducers);
  return (
    <>
    
    <Provider store={store}>
      <GlobalStyle />
      <LoadingScreen />
      <Component {...pageProps} />
    </Provider>

    </>
  )
}
