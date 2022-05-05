const initialState = {

  categories: [
    {
      id: 1,
      name: 'image',
      picture: 'https://picsum.photos/id/881/200/300',
      category_slug: 'image',
      category_createdAt: '2022-05-05T11:23:00+02:00',
      category_updatedAt: null,
    },
    {
      id: 2,
      name: 'son',
      picture: 'https://picsum.photos/id/973/200/300',
      category_slug: 'son',
      category_createdAt: '2022-05-05T11:23:00+02:00',
      category_updatedAt: null,
    },
    {
      id: 3,
      name: 'téléphone',
      picture: 'https://picsum.photos/id/717/200/300',
      category_slug: 'téléphone',
      category_createdAt: '2022-05-05T11:23:00+02:00',
      category_updatedAt: null,
    },
    {
      id: 4,
      name: 'console',
      picture: 'https://picsum.photos/id/865/200/300',
      category_slug: 'console',
      category_createdAt: '2022-05-05T11:23:00+02:00',
      category_updatedAt: null,
    },
    {
      id: 5,
      name: 'gaming',
      picture: 'https://picsum.photos/id/685/200/300',
      category_slug: 'gaming',
      category_createdAt: '2022-05-05T11:23:00+02:00',
      category_updatedAt: null,
    },
    {
      id: 6,
      name: 'cuisine',
      picture: 'https://picsum.photos/id/504/200/300',
      category_slug: 'cuisine',
      category_createdAt: '2022-05-05T11:23:00+02:00',
      category_updatedAt: null,
    },
    {
      id: 7,
      name: 'informatique',
      picture: 'https://picsum.photos/id/607/200/300',
      category_slug: 'informatique',
      category_createdAt: '2022-05-05T11:23:00+02:00',
      category_updatedAt: null,
    },
    {
      id: 8,
      name: 'tablette',
      picture: 'https://picsum.photos/id/779/200/300',
      category_slug: 'tablette',
      category_createdAt: '2022-05-05T11:23:00+02:00',
      category_updatedAt: null,
    },
    {
      id: 9,
      name: 'jardin',
      picture: 'https://picsum.photos/id/879/200/300',
      category_slug: 'jardin',
      category_createdAt: '2022-05-05T11:23:00+02:00',
      category_updatedAt: null,
    },
  ],
};

function categoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export default categoriesReducer;
