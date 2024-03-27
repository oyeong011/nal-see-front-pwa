import React from 'react';
import { FaClone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

type FeedItemProps = {
  postId: string | number;
  postPicture: string;
  many: boolean;
};

const FeedItem = ({ item }: { item: FeedItemProps }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/feeds/${item.postId}`);
  };

  return (
    <div className="relative" onClick={handleClick}>
      <img src={item.postPicture} alt="user" className="h-auto w-full" />
      {item.many && (
        <div className="absolute right-2 top-2">
          <FaClone className="text-white" />
        </div>
      )}
    </div>
  );
};

export default FeedItem;
