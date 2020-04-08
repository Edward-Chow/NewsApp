/* eslint-disable no-restricted-syntax */
import express from 'express';
import axios from 'axios';

const GUARDIAN_API = 'd02e6690-9ed2-40a4-92b7-6eab52868bbf';
const router = express.Router();

function filterData(articles, search) {
  const toJsonArr = [];
  for (const article of articles) {
    const newArticle = {};
    newArticle.title = article.webTitle;
    try {
      const { assets } = article.blocks.main.elements['0'];
      newArticle.image = assets[assets.length - 1].file;
    } catch (err) {
      newArticle.image = '';
    }
    newArticle.id = article.id;
    newArticle.url = article.webUrl;
    newArticle.section = article.sectionId;
    newArticle.date = article.webPublicationDate.substring(0, 10);
    newArticle.description = article.blocks.body[0].bodyTextSummary;
    toJsonArr.push(newArticle);
    if (search && toJsonArr.length === 10) break;
  }
  return toJsonArr;
}

module.exports = () => {
  router.get('/', (req, res) => {
    axios
      .get(
        `https://content.guardianapis.com/search?api-key=${GUARDIAN_API}&section=(sport|business|technology|politics)&show-blocks=all`
      )
      .then(response => {
        res.json(filterData(response.data.response.results, false));
      })
      .catch(err => {
        console.log(err);
      });
  });

  router.get('/:section', (req, res) => {
    axios
      .get(
        `https://content.guardianapis.com/${req.params.section}?api-key=${GUARDIAN_API}&show-blocks=all`
      )
      .then(response => {
        res.json(filterData(response.data.response.results, false));
      })
      .catch(err => {
        console.log(err);
      });
  });

  router.get('/articles/:articleId(*)', (req, res) => {
    axios
      .get(
        `https://content.guardianapis.com/${req.params.articleId}?api-key=${GUARDIAN_API}&show-blocks=all`
      )
      .then(response => {
        const articleDetails = {};
        const articleContent = response.data.response.content;
        articleDetails.id = req.params.articleId;
        articleDetails.title = articleContent.webTitle;
        try {
          const { assets } = articleContent.blocks.main.elements['0'];
          articleDetails.image = assets[assets.length - 1].file;
        } catch (err) {
          articleDetails.image = '';
        }
        articleDetails.section = articleContent.sectionId;
        articleDetails.url = articleContent.webUrl;
        articleDetails.date = articleContent.webPublicationDate.substring(0, 10);
        articleDetails.description = articleContent.blocks.body[0].bodyTextSummary;
        res.json(articleDetails);
      })
      .catch(err => {
        console.log(err);
      });
  });

  router.get('/search/:keyword', (req, res) => {
    axios
      .get(
        `https://content.guardianapis.com/search?q=${req.params.keyword}&api-key=${GUARDIAN_API}&show-blocks=all`
      )
      .then(response => {
        res.json(filterData(response.data.response.results, true));
      })
      .catch(err => {
        console.log(err);
      });
  });

  return router;
};
