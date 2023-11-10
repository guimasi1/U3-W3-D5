const SingleTrackAlbum = ({ track }) => {
  const convertSecondsToMinutesAndSeconds = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedTime = `${minutes}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
    return formattedTime;
  };
  return (
    <div className="d-flex justify-content-between mt-2 border rounded px-3 py-2 align-items-center ">
      <p className="p-0"> {track.title}</p>
      <p className="p-0">{convertSecondsToMinutesAndSeconds(track.duration)}</p>
    </div>
  );
};

export default SingleTrackAlbum;
