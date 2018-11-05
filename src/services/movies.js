import { JSDOM } from 'jsdom';
import jQuery from 'jquery';

import config from '../config';

export const getMovieDetails = url => {
  return jQuery.get(`${config.url}${url}`).then(html => {
    const dom = new JSDOM(html);
    const container = dom.window.document.querySelector('#dle-content');
    // TODO[Dmitry]: Use regular expression to match movies

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

export const getMovieCovers = url => {
  return jQuery
    .get(`${config.url}${url}`)
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
