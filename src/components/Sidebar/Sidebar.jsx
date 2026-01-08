import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <img
          src="imgs/ChatGPT Image 19_55_58 1 thg 8, 2025.png"
          alt="THcoder"
          className="sidebar__avatar"
        />
        <h2 className="sidebar__name">THcoder</h2>
        <p className="sidebar__bio">
          A Software Engineer who has developed countless innovative solutions.
        </p>
        <div className="sidebar__socials">
          <a
            href="https://www.facebook.com/nguyen.thanh.hung.202043/"
            className="sidebar__social-icon"
            title="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
            </svg>
          </a>

          <a
            href="https://www.instagram.com/th_hung27/"
            className="sidebar__social-icon"
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.798.272-1.459.645-2.126 1.308-.663.667-1.036 1.328-1.308 2.126-.266.788-.468 1.658-.528 2.936C.008 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.528 2.936.272.798.645 1.459 1.308 2.126.667.663 1.328 1.036 2.126 1.308.788.266 1.658.468 2.936.528C8.333 23.992 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.261 2.936-.528.798-.272 1.459-.645 2.126-1.308.663-.667 1.036-1.328 1.308-2.126.266-.788.468-1.658.528-2.936.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.261-2.148-.528-2.936-.272-.798-.645-1.459-1.308-2.126-.667-.663-1.328-1.036-2.126-1.308-.788-.266-1.658-.468-2.936-.528C15.667.008 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.561.217.96.477 1.382.896.419.42.679.821.896 1.381.164.422.354 1.057.408 2.227.061 1.264.07 1.646.07 4.849s-.009 3.585-.07 4.849c-.054 1.171-.244 1.805-.408 2.227-.217.561-.477.96-.896 1.382-.42.419-.821.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.061-1.646.07-4.849.07s-3.585-.009-4.849-.07c-1.171-.054-1.805-.244-2.227-.408-.561-.217-.96-.477-1.382-.896-.419-.42-.679-.821-.896-1.381-.164-.422-.354-1.057-.408-2.227-.061-1.264-.07-1.646-.07-4.849s.009-3.585.07-4.849c.054-1.171.244-1.805.408-2.227.217-.561.477-.96.896-1.382.42-.419.821-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.264-.061 1.646-.07 4.849-.07zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"></path>
            </svg>
          </a>

          <a
            href="mailto:thanhhungnguyen2707h@gmail.com"
            className="sidebar__social-icon"
            title="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
