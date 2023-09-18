// API Endpoint
const COHORT_NAME = "2302-ACC-PT-WEB-PT-A";

// Use the APIURL variable for fetch requests
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
const GET_ALL_POST = `${BASE_URL}/posts`;

// Get all Post
export const fetchAllPost = async () => {
  try {
    const response = await fetch(GET_ALL_POST);
    const post = await response.json();
    return post.data.posts;
  } catch (err) {
    console.error("Uh oh, trouble fetching post!", err);
  }
};