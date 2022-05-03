// == Import : npm
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// == Import : local
// Composants
import App from 'src/components/App';

const rootReactElement = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const target = document.getElementById('root');
ReactDom.render(rootReactElement, target);
// const target = document.getElementById('root');
// render(rootReactElement, target);
