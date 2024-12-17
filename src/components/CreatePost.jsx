import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      id: Date.now(),
      title: postTitleElement.current.value,
      body: postBodyElement.current.value,
      reactions: reactionsElement.current.value,
      userId: userIdElement.current.value,
      tags: tagsElement.current.value.split(" "),
    };

    addPost(newPost);
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    userIdElement.current.value = "";
    tagsElement.current.value = "";
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          placeholder="Your post title"
        />
      </div>
      <div className="mb-3">
        <textarea
          ref={postBodyElement}
          type="text"
          rows={4}
          className="form-control"
          id="body"
          placeholder="Your post content"
        />
      </div>
      <div className="mb-3">
        <input
          ref={userIdElement}
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your user id"
        />
      </div>

      <div className="mb-3">
        <input
          ref={reactionsElement}
          type="number"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post?"
        />
      </div>

      <div className="mb-3">
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          id="tags"
          placeholder="Your post tags (separated by space)"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
