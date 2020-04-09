/* eslint-disable no-restricted-syntax */
import express from 'express';
import axios from 'axios';

const NYTIMES_API = '9SiEo1qIbxylPQ0VGhPpnrTlidHpn2aZ';
const router = express.Router();

function filterData(articles) {
  const toJsonArr = [];
  for (const article of articles) {
    const newArticle = {};
    newArticle.title = article.title;
    try {
      const assets = article.multimedia.filter(img => img.width >= 2000);
      newArticle.image = assets[0].url.startsWith('http')
        ? assets[0].url
        : `https://nyt.com/${assets[0].url}`;
    } catch (err) {
      newArticle.image = '';
    }
    newArticle.id = article.url;
    newArticle.url = article.url;
    newArticle.section = article.section;
    newArticle.date = article.published_date.substring(0, 10);
    newArticle.description = article.abstract;
    toJsonArr.push(newArticle);
  }
  return toJsonArr;
}

module.exports = () => {
  router.get('/', (req, res) => {
    axios
      .get(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${NYTIMES_API}`)
      .then(response => {
        res.json(filterData(response.data.results));
      })
      .catch(err => {
        console.log(err);
      });
  });

  router.get('/:section', (req, res) => {
    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/${req.params.section}.json?api-key=${NYTIMES_API}`
      )
      .then(response => {
        res.json(filterData(response.data.results));
      })
      .catch(err => {
        console.log(err);
      });
  });

  router.get('/articles/:articleUrl(*)', (req, res) => {
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=web_url:("${req.params.articleUrl}")&api-key=${NYTIMES_API}`
      )
      .then(response => {
        const articleDetails = {};
        const articleContent = response.data.response.docs[0];
        articleDetails.id = req.params.articleUrl;
        articleDetails.title = articleContent.headline.main;
        try {
          const assets = articleContent.multimedia.filter(img => img.width >= 2000);
          articleDetails.image = assets[0].url.startsWith('http')
            ? assets[0].url
            : `https://nyt.com/${assets[0].url}`;
        } catch (err) {
          articleDetails.image = '';
        }
        articleDetails.section = articleContent.news_desk;
        articleDetails.url = articleContent.web_url;
        articleDetails.date = articleContent.pub_date.substring(0, 10);
        articleDetails.description = articleContent.abstract;
        res.json(articleDetails);
      })
      .catch(err => {
        console.log(err);
      });
  });

  router.get('/search/:keyword', (req, res) => {
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${req.params.keyword}&api-key=${NYTIMES_API}`
      )
      .then(response => {
        const toJsonArr = [];
        for (const article of response.data.response.docs) {
          const newArticle = {};
          newArticle.title = article.headline.main;
          try {
            const assets = article.multimedia.filter(img => img.width >= 2000);
            newArticle.image = assets[0].url.startsWith('http')
              ? assets[0].url
              : `https://nyt.com/${assets[0].url}`;
          } catch (err) {
            newArticle.image = '';
          }
          newArticle.id = article.web_url;
          newArticle.url = article.web_url;
          if (article.news_desk !== undefined) {
            newArticle.section = article.news_desk;
          } else {
            continue;
          }
          newArticle.date = article.pub_date.substring(0, 10);
          newArticle.description = article.abstract;
          toJsonArr.push(newArticle);
          if (toJsonArr.length === 10) break;
        }
        res.json(toJsonArr);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return router;
};
