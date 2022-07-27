import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'a17'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'd4c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '65e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '61d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '16a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '268'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '518'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '78d'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd7d'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', '5ba'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '879'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
