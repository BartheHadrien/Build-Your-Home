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

      <Routes>
        <Route path="/" element={<><Header /> <Home /> <Footer /></>} />
        <Route exact path="/article/:slug" element={<><Header /> <Article /> <Footer /></>} />
        <Route path="/categories/:slug" element={<><Header /> <Articles /> <Footer /></>} />
        <Route path="/panier" element={<><Header /> <Cart /> <Footer /></>} />
        <Route path="/connexion" element={<><Header /> <Login /> <Footer /></>} />
        <Route path="/inscription" element={<><Header /> <Home /> <NewAccount /></>} />
        <Route path="/favoris" element={<><Header /> <Favorites /> <Footer /></>} />
        <Route path="/contact" element={<><Header /> <Contact /> <Footer /></>} />
        <Route path="/mentions-legales" element={<><Header /> <Home /> <LegalMentions /></>} />
        <Route path="/profil" element={<><Header /> <Profile /> <Footer /></>} />
        <Route path="/not-found" element={<><Header /> <NotFound /> <Footer /></>} />
        <Route path="/*" element={<Error />} />
      </Routes>

    </div>
  );
}

export default App;
