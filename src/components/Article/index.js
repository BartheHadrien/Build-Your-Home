// import style
import './styles.scss';

// import semantic
import { Button } from 'semantic-ui-react';

import keyboard from 'src/assets/images/keyboard.svg';

function Article() {
  return (
    <div className="article">
      <div className="article--container">
        <img src={keyboard} alt="illustration souris" />
        <div className="article--container__details">
          <h2 className="article--container__details--title">Title</h2>
          <a href="#">Notes</a>
          <p className="article--container__details--description">
            <strong> Tag </strong>
            <strong> Tag </strong>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reiciendis reprehenderit molestiae, consectetur iusto impedit dolore velit natus
            molestias ab eos tempore eius aliquid, qui possimus, mollitia
            delectus maxime ex doloremque.
            <span> Prix : XX € </span>
            <span> livraison : XX € </span>
          </p>
        </div>
        <div className="article--container__cart">
          <h2 className="article--container__cart--title">Title</h2>

        </div>
      </div>
    </div>
  );
}

export default Article;
