// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import 'bootstrap'
import '@fortawesome/fontawesome-free/js/all'
// import '../javascripts/hello_webpacker'
import '../javascripts/application'
// import '../javascripts/bootstrap'
// import '../javascripts/contact'
// import '../javascripts/html5'
// import '../javascripts/respond'
// import '../javascripts/script'
// import '../javascripts/selectivizr'
// import '../javascripts/smoothscroll'

// import '../stylesheets/hello_webpack'
import '../stylesheets/application'

require.context('../images', true, /\.(png|jpg|jpeg|svg)$/);

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
