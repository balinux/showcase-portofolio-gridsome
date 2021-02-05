// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import '~/assets/css/index.scss';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  head.meta.push({
    name: 'keywords',
    content: 'Portfolio, showcase, balinux, yho tie, code, design, computer network flutter'
  })

  head.meta.push({
    name: 'description',
    content: 'showcase / Portfolio project Rio Juniyantara Putra'
  })

  head.meta.push({
    name: 'author',
    content: 'Rio Juniyantara Putra'
  })

}
