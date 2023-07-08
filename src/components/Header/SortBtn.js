import { useState } from 'react';

export default function SortBtn({ onSortItems }) {
  const [isActive, setIsActive] = useState(false);

  function handleSetActive() {
    setIsActive(!isActive);
  }

  return (
    <svg
      onAnimationEnd={handleSetActive}
      onClick={() => {
        handleSetActive();
        onSortItems();
      }}
      className={`sort-btn button ${isActive ? 'sort-btn--active' : ''}`}
      width="34"
      height="29"
      viewBox="0 0 34 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className="sort-btn__first-arrow"
        d="M8.0061 2.56116C8.0061 1.73273 8.67768 1.06116 9.5061 1.06116C10.3345 1.06116 11.0061 1.73273 11.0061 2.56116V26.4977C11.0061 27.3261 10.3345 27.9977 9.5061 27.9977C8.67768 27.9977 8.0061 27.3261 8.0061 26.4977V2.56116Z"
        fill="#020000"
      />
      <rect
        className="sort-btn__first-arrow"
        width="2.99908"
        height="12.9957"
        rx="1.49954"
        transform="matrix(0.707407 0.706806 -0.677488 0.735534 9.44789 0.384933)"
        fill="#020000"
      />
      <rect
        className="sort-btn__first-arrow"
        width="2.99927"
        height="12.9957"
        rx="1.49964"
        transform="matrix(0.766314 -0.642467 0.662413 0.749139 7.4053 2.32727)"
        fill="#020000"
      />
      <path
        className="sort-btn__second-arrow"
        d="M23.005 26.4654C23.005 27.2939 23.6766 27.9654 24.505 27.9654C25.3334 27.9654 26.005 27.2939 26.005 26.4654V2.50596C26.005 1.67753 25.3334 1.00595 24.505 1.00595C23.6766 1.00595 23.005 1.67753 23.005 2.50595V26.4654Z"
        fill="#020000"
      />
      <rect
        className="sort-btn__second-arrow"
        width="3.00035"
        height="13.0017"
        rx="1.50018"
        transform="matrix(0.707107 -0.707107 -0.677176 -0.735821 24.4468 28.6422)"
        fill="#020000"
      />
      <rect
        className="sort-btn__second-arrow"
        width="3.00033"
        height="13.0019"
        rx="1.50016"
        transform="matrix(0.766044 0.642788 0.662097 -0.749418 22.4042 26.6982)"
        fill="#020000"
      />
    </svg>
  );
}
