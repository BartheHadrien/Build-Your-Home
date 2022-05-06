import { Routes, Route, useLocation } from 'react-router-dom';

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
import { fetchCategories } from '../../actions/categories';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  // Au montage du composant principal
  useEffect(
    () => {
      // Récupération des articles
      dispatch(fetchArticles());
      // Récupération des catégories
      dispatch(fetchCategories());
    },
    [],
  );
  // Conditionne un effet au changement d'url
  useEffect(
    () => {
      // dans cet effet, on interragit avec le
      // dom réel pour scroller en haut de page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [location],
  );

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/categories/:slug" element={<Articles />} />
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
