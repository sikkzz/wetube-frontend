import React, { useState } from "react";

import Img from "../../assets/test.jpg";

const CommentInput = ({ reply, setReplyOpen, setReplySecondOpen }) => {
  const [inputActive, setInputActive] = useState(false);

  const onInputClick = () => {
    setInputActive(true);
  };

  const onCancelClick = () => {
    setInputActive(false);
    setReplyOpen(false);
    setReplySecondOpen(false);
  };

  return (
    <>
      <wt-img-shadow
        id="author-thumbnail"
        class={reply ? "wtd-commentbox" : "wtd-comment-simplebox-render"}
      >
        <img id="img" className="wt-img-shadow" alt="profile_img" src={Img} />
      </wt-img-shadow>
      <div id="placeholder-area" className="wtd-comment-simplebox-render">
        <div id="input-box" className="wtd-comment-simplebox-render">
          <form>
            <input
              type="text"
              placeholder={reply ? "답글 추가..." : "댓글 추가..."}
              onClick={onInputClick}
            />
          </form>
        </div>
        <div
          id="footer"
          className="wtd-comment-simplebox-render"
          style={{ display: inputActive || reply ? "flex" : "none" }}
        >
          <div id="buttons" className="wtd-comment-simplebox-render">
            <wtd-button-render
              id="cancel-button"
              class="wtd-comment-simplebox-render"
            >
              <wt-button-shape>
                <button
                  className="wt-button-shape-next cancel-button"
                  onClick={onCancelClick}
                >
                  <div className="cbox wt-button-shape">
                    <span>취소</span>
                  </div>
                </button>
              </wt-button-shape>
            </wtd-button-render>
            <wtd-button-render
              id="submit-button"
              class="wtd-comment-simplebox-render"
            >
              <wt-button-shape>
                <button className="wt-button-shape-next submit-button">
                  <div className="cbox wt-button-shape">
                    <span>{reply ? "답글" : "댓글"}</span>
                  </div>
                </button>
              </wt-button-shape>
            </wtd-button-render>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentInput;
