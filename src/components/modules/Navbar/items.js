import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    pageName: 'Home page',
    link: '/',
  },

  {
    id: nanoid(),
    pageName: 'Movies page',
    link: '/movies',
  },

  // {
  //   id: nanoid(),
  //   pageName: 'Debug page',
  //   link: '/debug',
  // },
];

export default items;
