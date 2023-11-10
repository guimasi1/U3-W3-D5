/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import SearchResults from "./SearchResults";
import { useSelector, useDispatch } from "react-redux";
import {
  handleSectionAction,
  handleSectionActionPop,
  handleSectionActionHipPop,
} from "../redux/actions/actions";
import SingleAlbum from "./SingleAlbum";

const MainContent = () => {
  const showSearch = useSelector((state) => state.search.showSearch);
  const artistRock = useSelector((state) => state.search.artistData);
  const artistPop = useSelector((state) => state.search.artistDataPop);
  const artistHipPop = useSelector((state) => state.search.artistDataHipPop);

  const statenow = useSelector((state) => state);
  console.log(statenow);

  const dispatch = useDispatch();

  const rockArtists = [
    "The Beatles",
    "Led Zeppelin",
    "Pink Floyd",
    "The Rolling Stones",
    "Queen",
    "Jimi Hendrix",
    "Nirvana",
    "Radiohead",
    "U2",
    "The Who",
    "AC/DC",
    "Pearl Jam",
  ];

  const popArtists = [
    "Michael Jackson",
    "Madonna",
    "Elton John",
    "Whitney Houston",
    "Beyoncé",
    "Justin Bieber",
    "Adele",
    "Ed Sheeran",
    "Taylor Swift",
    "Rihanna",
    "Bruno Mars",
    "Katy Perry",
  ];
  const hipHopArtists = [
    "Eminem",
    "Tupac Shakur",
    "Jay-Z",
    "Dr. Dre",
    "Kendrick Lamar",
    "Nas",
    "Snoop Dogg",
    "Kanye West",
    "Lil Wayne",
    "Nicki Minaj",
    "Cardi B",
  ];

  const randomNumberRock = Math.floor(Math.random() * rockArtists.length);
  const randomNumberPop = Math.floor(Math.random() * popArtists.length);
  const randomNumberHipPop = Math.floor(Math.random() * hipHopArtists.length);

  handleSectionAction();
  useEffect(() => {
    dispatch(handleSectionAction(rockArtists[randomNumberRock]));
    dispatch(handleSectionActionPop(popArtists[randomNumberPop]));
    dispatch(handleSectionActionHipPop(hipHopArtists[randomNumberHipPop]));
    // dispatch(handleSectionAction(popArtists[randomNumberPop]));
    // dispatch(handleSectionAction(hipHopArtists[randomNumberHipPop]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="col offset-1 mainPage mt-3 ">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      <div className="row">{showSearch && <SearchResults />} </div>
      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            >
              {artistRock &&
                artistRock.map((album, i) => {
                  return <SingleAlbum key={i} album={album} />;
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            >
              {artistPop &&
                artistPop.map((album, i) => {
                  return <SingleAlbum key={i + 1000} album={album} />;
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            >
              {artistHipPop &&
                artistHipPop.map((album, i) => {
                  return (
                    <SingleAlbum key={album.album.id + 2000} album={album} />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
