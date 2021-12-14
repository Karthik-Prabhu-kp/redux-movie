import thunk from "redux-thunk";
import  "../test-utils";
import expect from "expect";
import moxios from "moxios";
import configureMockStore from "redux-mock-store";
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const initialState = {
    sortOptions: [],
    movies: [],
    sortedMovies: []
};
const movies = [
  {
    "id": 2,
        "type": "poster",
        "rank": 2,
        "synopsis": "Epic tale in which an intrepid archaeologist tries to beat a band of Nazis to a unique religious relic which is central to their plans for world domination. Battling against a snake phobia and a vengeful ex-girlfriend, Indiana Jones is in constant peril, making hair's-breadth escapes at every turn in this celebration of the innocent adventure movies of an earlier era.",
        "title": "Raiders of the Lost Ark",
        "imageUrl": "https://preview.ibb.co/fn5Xyp/raiders.jpg",
        "releaseDate": 1981
  }
];

const sortOptions = [
    {
        "items": [{
            "label": "Release Date",
            "valueToOrderBy": "releaseDate"
          }, {
            "label": "Rank",
            "valueToOrderBy": "rank"
          }]
    }
]

  it("Loads list of movies", done => {
    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [
          {
            "id": 2,
        "type": "poster",
        "rank": 2,
        "synopsis": "Epic tale in which an intrepid archaeologist tries to beat a band of Nazis to a unique religious relic which is central to their plans for world domination. Battling against a snake phobia and a vengeful ex-girlfriend, Indiana Jones is in constant peril, making hair's-breadth escapes at every turn in this celebration of the innocent adventure movies of an earlier era.",
        "title": "Raiders of the Lost Ark",
        "imageUrl": "https://preview.ibb.co/fn5Xyp/raiders.jpg",
        "releaseDate": 1981
          }
        ]
      });
    });

    const expectedActions = [
      {
        type: "LOAD_DATA",
        posts: movies
      }
    ];
    return store.dispatch(PostsActionCreators.fetchPostsThunk()).then(() => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });

  it("Returns sort options to sort movie list", done => {
    moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [{"items": [{
            "label": "Release Date",
            "valueToOrderBy": "releaseDate"
          }, {
            "label": "Rank",
            "valueToOrderBy": "rank"
          }]}]
      });
    });

    const expectedActions = [
      {
        type: "LOAD_SORT_OPTIONS",
        posts: sortOptions
      }
    ];
    return store.dispatch(PostsActionCreators.fetchPostsThunk()).then(() => {
      const actualAction = store.getActions();
      expect(actualAction).toEqual(expectedActions);
      done();
    });
  });
