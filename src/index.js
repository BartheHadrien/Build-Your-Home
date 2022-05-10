// == Import : npm
import ReactDom from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// == Import : local
import store from 'src/store';
// Composants
import App from 'src/components/App';

const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

);

const target = document.getElementById('root');
ReactDom.render(rootReactElement, target);
