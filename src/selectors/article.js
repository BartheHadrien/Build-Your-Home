/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
/**
 *  on trouve l'article voulu dans la liste des articles
 * @param {Array} articles - tout les articles
 * @param {string} searchedId - l'Id de l'article recherché'
 * @return {Object} - l'article trouvé
 */

export function findArticle(articles, searchedId) {
  const article = articles.find((itemArticle) => {
    return itemArticle.id === searchedId;
  });
  return article;
}
