import { useState } from 'react';

const ThumbsUp = () => {
  const [count, setCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setCount(count - 1);
      setIsLiked(false);
    } else {
      setCount(count + 1);
      setIsLiked(true);
    }
  };

  return (
    <div>
      <button onClick={handleLike}>
        {isLiked ? '👍 Liked' : '👍 Like'}
      </button>
      <span> {count} Likes</span>
    </div>
  );
};

export default ThumbsUp;