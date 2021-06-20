import 'semantic-ui-css/semantic.min.css'
import { ChakraProvider } from "@chakra-ui/react"
import store from './store/index';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './pages/Contacts'

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <div className="App">
          <Contacts />
        </div>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
