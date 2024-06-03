import React from 'react';

const ReturnToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition-colors duration-300"
      onClick={scrollToTop}
    >
      Return to Top
    </button>
  );
};

export default ReturnToTopButton;
