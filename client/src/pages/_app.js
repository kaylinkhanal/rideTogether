import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from 'redux-persist/integration/react';;
import "../styles/globals.css"
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}
