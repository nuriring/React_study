import ReactDom from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import rootReducer from './modules'
import { composeWithDevTools } from 'redux-devtools-extension'




const store = createStore(rootReducer, composeWithDevTools())

//react 컴포넌트에서 스토어를 사용할 수 있도록 App 컴포넌트를 react-redux에서 제공하는 Provider컴포넌트로 감싸줌 -> store를 props로 전달해주어야함
ReactDom.render(
<Provider store={store}>
  <App /> 
</Provider>,
  document.getElementById('root'),)