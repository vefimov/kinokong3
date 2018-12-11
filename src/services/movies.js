// @flow
import { JSDOM } from 'jsdom';
import jQuery from 'jquery';

import config from '../config';
import type { MenuItem } from '../types';
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
        const url = element.querySelector('.main-sliders-bg > a').href.replace('http://kinokong.net', '/movie');

        const movieCover = {
          coverImage,
          title,
          url,
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
        const url = element.querySelector('.main-sliders-bg > a').href.replace('http://kinokong.net', '/movie');
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
          const url = element.querySelector('.main-sliders-bg > a').href.replace('http://kinokong.net', '/movie');
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
export const getMenuItems = () => {
  return jQuery
    .get(`${config.kinokongUrl}/index.php`)
    .then(html => {
      const dom = new JSDOM(html);
      const parentLiElements = dom.window.document.querySelectorAll('ul.reset.top-menu > li');
      const menuItems: MenuItem[] = [];

      parentLiElements.forEach(parentLiElement => {
        const parentLinkElement = parentLiElement.querySelector('a');
        const menuItem: MenuItem = {
          title: parentLinkElement.textContent,
          url: parentLinkElement.href.replace('http://kinokong.net', '/type/'),
        };

        const subItems = parentLiElement.querySelectorAll('span a');

        if (subItems.length) {
          menuItem.subItems = [];

          subItems.forEach(subItem => {
            const menuSubItem: subItems = {
              title: subItem.textContent,
              url: subItem.href.replace('http://kinokong.net', '/type/'),
            };

            menuItem.subItems.push(menuSubItem);
          });
        }
        menuItems.push(menuItem);
      });

      return menuItems;
    })
    .catch(error => {
      console.error(error);
    });
};
