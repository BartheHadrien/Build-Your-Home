import { Routes, Route } from 'react-router-dom';

import Home from 'src/components/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Article from '../Article';
import Articles from '../Articles';
import Login from '../Login';

import Cart from '../Cart';
import Favorites from '../Favorites';
import Contact from '../Contact';
import LegalMentions from '../LegalMentions';

import Error from '../Error';

import './styles.scss';
import NewAccount from '../NewAccount';
import { fetchArticles } from '../../actions/article';

function App() {
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(fetchArticles());
    },
    [],
  );

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/categorie" element={<Articles />} />
        <Route path="/panier" element={<Cart />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<NewAccount />} />
        <Route path="/favoris" element={<Favorites />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<LegalMentions />} />

        <Route path="/*" element={<Error />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
