import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Islamabad",
    body: "Hi friends, I am going to Islamabad to have a dinner with my cousins",
    reactions: 2,
    userId: "user-3",
    tags: ["Islamabad", "Dinner", "hang out"],
  },
  {
    id: "2",
    title: "Pass ho gye bhai",
    body: "4 saal ki masti k baad bhi ho gye hain pass!",
    reactions: 15,
    userId: "user-12",
    tags: ["Exams", "Graduating", "Unbelievable"],
  },
];

const postListReducer = (currPostList, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [action.payload, ...currPostList];
    case "DELETE_POST":
      return currPostList.filter((post) => post.id !== action.payload);
    default:
      return currPostList;
  }
};
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (newPost) => {
    dispatchPostList({ type: "ADD_POST", payload: newPost });
  };
  const deletePost = (id) => {
    dispatchPostList({ type: "DELETE_POST", payload: id });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
