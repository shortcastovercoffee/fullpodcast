import React, { useState, useEffect } from 'react';

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const fetchPodcasts = async () => {
      const rssUrl = 'https://anchor.fm/s/e690e764/podcast/rss';
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fanchor.fm%2Fs%2Fe690e764%2Fpodcast%2Frss&api_key=a2pqqoyv1gxwpfdtssyptgijuxqsihgpkttqrmvl&count=100`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setPodcasts(data.items);
    };

    fetchPodcasts();
  }, []);

  return (
    <div>
      {podcasts.map((podcast, index) => (
        <div key={index}>
          <h2>{podcast.title}</h2>
          <p>{podcast.description}</p>
          <audio controls src={podcast.enclosure.link}></audio>
        </div>
      ))}
    </div>
  );
};

export default PodcastList;
