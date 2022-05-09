/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
/**
 *  on trouve l'article voulu dans la liste des articles
 * @param {Array} articles - tout les articles
 * @param {string} searchedId - l'Id de l'article recherché'
 * @return {Object} - l'article trouvé
 */

export function findArticle(articles, searchedSlug) {
  const article = articles.find((itemArticle) => {
    return itemArticle.slug === searchedSlug;
  });
  return article;
}

/**
 *  on trouve 5 articles dans la liste globales
 * @param {Array} articles - tout les articles
 * @param {string} searchedNumberId - nombre 'article recherché jusqu'à tel id
 * @return {Object} - liste d'article trouvés
 */

export function findFiveArticles(articles, searchedNumberId) {
  const listArticle = articles.filter((itemArticle) => {
    return itemArticle.id <= searchedNumberId;
  });
  return listArticle;
}
