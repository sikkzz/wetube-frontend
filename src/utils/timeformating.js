export const timeFormat = (time) => {
  let hour =
    parseInt(time / 3600) < 10
      ? "0" + parseInt(time / 3600)
      : parseInt(time / 3600);
  let min =
    parseInt((time % 3600) / 60) < 10
      ? "0" + parseInt((time % 3600) / 60)
      : parseInt((time % 3600) / 60);
  let sec = time % 60 < 10 ? "0" + (time % 60) : time % 60;

  return hour + ":" + min + ":" + sec;
};
