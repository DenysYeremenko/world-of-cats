export const getTimeNow = () => {
  const timeNowSecunds = Date.now();
  const time = new Date(timeNowSecunds);
  const hour = time.getHours();
  const minute = time.getMinutes();
  const hourFormat24 = `${hour < 10 ? 0 : ''}${hour}:${
    minute < 10 ? 0 : ''
  }${minute}`;
  return hourFormat24;
};
