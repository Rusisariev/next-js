import '../styles/globals.css'
import '../sass/pageLink.sass'
import {Provider} from "react-redux";
import withRedux from "next-redux-wrapper"
import React from "react";
import App from "next/app";
import rootReducer from "../redux/reducers/rootReducer";
import {useStore} from "../redux/store";

function MyApp({ Component, pageProps }) {
    const store = useStore(pageProps);

  return (
      <Provider store={store}>
              <Component {...pageProps} />
      </Provider>
  )
}
MyApp.getInitialProps = async ctx => {
    const initialProps = await App.getInitialProps(ctx);
    return {
        ...initialProps
    }
}


// class MyApp extends App {
//   static async getInitialProps({Component, ctx}) {
//     const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx): {}
//
//     console.log(appProps);
//     return {appProps: appProps}
//   }
//
//   render() {
//     const {Component, appProps} = this.props
//
//     return(
//         <Provider store={store} >
//           <Component {...appProps} />
//         </Provider>
//     )
//
//   }
// }
//
// const makeStore = () => store;
//export default withRedux(makeStore)(MyApp);


export default MyApp

