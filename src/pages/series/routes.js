export default [
  {
    name: 'series',
    path: '/series',
    component: () => import(/* webpackChunkName: "series" */ './Series'),
    meta: {
      showNavbar: true,
      title: 'Séries',
      icon: 'dvr',
      label: 'Todas as séries'
    }
  }
]
