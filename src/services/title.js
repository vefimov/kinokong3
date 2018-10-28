import { JSDOM } from 'jsdom';
import jQuery from 'jquery';

export const getMovieDetails = url => {
  return jQuery.get(url).then(html => {
    const dom = new JSDOM(html);
    const movieElements = dom.window.document.querySelectorAll('#dle-content .full ');
    const movieDetails = [];

    movieElements.forEach(element => {
      const title = element.querySelector('.full-kino-title > h1').textContent;
      const story = element.querySelector('.full-kino-story').textContent;

      const movieDetail = {
        title,
        story,
      };
      movieDetails.push(movieDetail);
    });
    return movieDetails;
  });
};
