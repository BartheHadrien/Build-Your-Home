// ==============================================
// ==================Import======================
// ==============================================

// ==================Dépendance==================
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// ==================Composant===================
import Home from 'src/components/Home';
import Header from '../Header';
import Footer from '../Footer';
import Article from '../Article';
import Articles from '../Articles';
import Login from '../Login';
import Profile from '../Profile';
import Cart from '../Cart';
import Favorites from '../Favorites';
import Contact from '../Contact';
import LegalMentions from '../LegalMentions';
import Error from '../Error';
import NewAccount from '../NewAccount';
import NotFound from '../NotFound';

// ==================Action======================
import { fetchArticles, setClearQuantity } from '../../actions/article';
import { fetchCategories } from '../../actions/categories';

// ==================Style&IMG===================
import './styles.scss';

function App() {
  // ==================HOOK===================
  const dispatch = useDispatch();
  const location = useLocation();
  const listArticles = useSelector((state) => state.article.list);

  // ==================UseEffect===============
  // Au montage du composant principal
  useEffect(
    () => {
      // Récupération des articles et catégories
      dispatch(fetchArticles());
      dispatch(fetchCategories());
      localStorage.setItem('allCart', JSON.stringify([]));
    },
    [],
  );
  // Au changement d'url
  useEffect(
    () => {
      // Scroll en haut de page
      window.scrollTo({ top: 0, behavior: 'smooth' });
      dispatch(setClearQuantity());
    },
    [location],
  );
  // A chaque rendu
  useEffect(
    () => {
      // Met tout les articles dans le localstorage
      localStorage.setItem('articles', JSON.stringify(listArticles));
    },
  );

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/article/:slug" element={<Article />} />
        <Route path="/categories/:slug" element={<Articles />} />
        <Route path="/panier" element={<Cart />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<NewAccount />} />
        <Route path="/favoris" element={<Favorites />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<LegalMentions />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
