import { JSDOM } from 'jsdom';
import jQuery from 'jquery';

export const getMovieCovers = url => {
  return jQuery
    .get(url)
    .then(html => {
      const dom = new JSDOM(html);
      const movieElements = dom.window.document.querySelectorAll('#dle-content .owl-item');
      const movieCovers = [];

      movieElements.forEach(element => {
        const coverImage =
          'http://kinokong2.com' + element.querySelector('.main-sliders-img > img').getAttribute('src');
        const title = element.querySelector('.main-sliders-title').textContent;
        const url = element.querySelector('.main-sliders-bg > a').href;
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
