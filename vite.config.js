import handlebars from 'vite-plugin-handlebars';
import data from './data.json';

export default {
  base : '/materialize web/',
  plugins: [
    handlebars({
      context: data, // replace the curly brackets with data.json
    }),
  ],
};
