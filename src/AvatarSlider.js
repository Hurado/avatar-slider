
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "./components/button";

const AvatarSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [avatarUrls, setAvatarUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const users = ["gaearon", "acdlite", "yyx990803", "unclebob", "martinfowler"];

  useEffect(() => {
    // Make API requests to get avatar URLs
    const fetchAvatarUrls = async () => {
      const promises = users.map((user) =>
        fetch(`https://api.github.com/users/${user}`)
          .then((response) => response.json())
          .then((data) => data.avatar_url)
      );

      const avatarUrls = await Promise.all(promises);
      setAvatarUrls(avatarUrls);
      setIsLoading(false);
    };

    fetchAvatarUrls();
  }, [users]);

  const handlePreviousClick = () => {
    setCurrentIndex(
      currentIndex === 0 ? avatarUrls.length - 1 : currentIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex(
      currentIndex === avatarUrls.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div>
      <h2>{users[currentIndex]} </h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="container">
            <Button
              onClick={handlePreviousClick}
              className="previousButton nav-btn"
            >
              <FontAwesomeIcon className="awesome" icon={faAngleLeft} />
            </Button>
            <img
              src={avatarUrls[currentIndex]}
              className="avatar-image"
              alt="avatar"
            />
            <Button onClick={handleNextClick} className="nextButton nav-btn">
              <FontAwesomeIcon className="awesome" icon={faAngleRight} />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default AvatarSlider;
