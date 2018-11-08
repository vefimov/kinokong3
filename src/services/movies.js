// @flow
import { JSDOM } from 'jsdom';
import jQuery from 'jquery';

import config from '../config';
import { unicodeToWin1251 } from './utils';

// $FlowFixMe
export const getMovieDetails = url => {
  return jQuery.get(`${config.kinokongUrl}${url}`).then(html => {
    const dom = new JSDOM(html);
    const container = dom.window.document.querySelector('#dle-content');

    const url = /\w{4}:\/\/.+?\.\w{2}\d\b/gi;

    const movies = container
      .querySelector('#player')
      .nextElementSibling.innerHTML.trim()
      .match(url);

    return {
      movies,

      producer: container.querySelector('.full-kino-greybg').textContent,
      actor: container.querySelector('.full-kino-info1').textContent,
      info: container.querySelector('.full-kino-info').innerHTML,
      title: container.querySelector('.full-kino-title').textContent.trim(),
      story: container.querySelector('.full-kino-story').innerHTML,
      poster: container.querySelector('.full-poster img').src,
    };
  });
};

export const searchMovies = (query: string) => {
  return jQuery
    .post(`${config.kinokongUrl}/index.php?do=search`, {
      do: 'search',
      subaction: 'search',
      search_start: 1,
      full_search: 0,
      result_from: 1,
      story: unicodeToWin1251(query),
    })
    .then(html => {
      const dom = new JSDOM(html);
      const movieElements = dom.window.document.querySelectorAll('.owl-item .item');
      const movieCovers = [];

      movieElements.forEach(element => {
        const coverImage = element.querySelector('.main-sliders-img > img').src;
        const title = element.querySelector('.main-sliders-title').textContent;
        const url = element.querySelector('.main-sliders-bg > a').href.replace('http://kinokong2.com', '/movie');
        const ratingElements = element.querySelectorAll('.main-sliders-rate a');

        const movieCover = {
          coverImage,
          title,
          url,
          // rating: {
          //   likes: ratingElements[0].textContent.trim(),
          //   dislikes: ratingElements[1].textContent.trim(),
          // },
        };

        movieCovers.push(movieCover);
      });

      debugger;

      return movieCovers;
    })
    .catch(error => {
      console.error(error);
    });
};

// $FlowFixMe
export const getMovieCovers = url => {
  return jQuery
    .get(`${config.kinokongUrl}${url}`)
    .then(html => {
      const dom = new JSDOM(html);
      const movieElements = dom.window.document.querySelectorAll('#dle-content .owl-item');
      const movieCovers = [];

      movieElements.forEach(element => {
        const coverImage = element.querySelector('.main-sliders-img > img').src;
        const title = element.querySelector('.main-sliders-title').textContent;
        const url = element.querySelector('.main-sliders-bg > a').href.replace('http://kinokong2.com', '/movie');
        const ratingElements = element.querySelectorAll('.main-sliders-rate a');

        const movieCover = {
          coverImage,
          title,
          url,
          rating: {
            likes: ratingElements[0].textContent.trim(),
            dislikes: ratingElements[1].textContent.trim(),
          },
        };

        movieCovers.push(movieCover);
      });

      return movieCovers;
    })
    .catch(error => {
      console.error(error);
    });
};

// $FlowFixMe
export const getMovieCoversGroupedByType = url => {
  return jQuery
    .get(`${config.kinokongUrl}${url}`)
    .then(html => {
      const dom = new JSDOM(html);
      const types = dom.window.document.querySelectorAll(
        '#wrapper > [class*="main-sliders-top"], #container > [class*="main-sliders-top"]',
      );
      const movieCoversGroupedByType = [];

      types.forEach(element => {
        const type = {
          title: element.querySelector('.main-sliders-top-title').childNodes[0].textContent.trim(),
          movieCovers: [],
        };

        const movieElements = element.nextElementSibling.querySelectorAll('.item');

        movieElements.forEach(element => {
          const coverImage = element.querySelector('.main-sliders-img > img').src;
          const title = element.querySelector('.main-sliders-title').textContent;
          const url = element.querySelector('.main-sliders-bg > a').href.replace('http://kinokong2.com', '/movie');
          const ratingElements = element.querySelectorAll('.main-sliders-rate a');

          const movieCover = {
            coverImage,
            title,
            url,
            rating: {
              likes: ratingElements[0].textContent.trim(),
              dislikes: ratingElements[1].textContent.trim(),
            },
          };

          type.movieCovers.push(movieCover);
        });

        movieCoversGroupedByType.push(type);
      });

      return movieCoversGroupedByType;
    })
    .catch(error => {
      console.error(error);
    });
};
