// webpack.mix.js
const mix = require("laravel-mix");

mix.postCss("src/style.css", "public/css/style.css").options({
  postCss: [
    require("@tailwindcss/jit"),
  ],
});


