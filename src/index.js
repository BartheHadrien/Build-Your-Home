// == Import : npm
import ReactDom from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { Provider } from 'react-redux';
// == Import : local
import store from 'src/store';
// Composants
import App from 'src/components/App';

// Option des alertes
const options = {
  position: positions.TOP_CENTER,
  offset: '10px',
  timeout: 7000,
  transition: transitions.SCALE,
};

const rootReactElement = (
  <AlertProvider template={AlertTemplate} {...options}>
    <Provider store={store}>
      <BrowserRouter basename="http://guillaumeverbiese-server.eddi.cloud/projet-09-build-your-home-front/dist/">
        <App />
      </BrowserRouter>
    </Provider>
  </AlertProvider>
);

const target = document.getElementById('root');
ReactDom.render(rootReactElement, target);
