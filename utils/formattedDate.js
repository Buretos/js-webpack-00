import getOrdinal from "./formattedDay";

function formattedDate(currentDate) {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const options2 = {
    month: "short",
  };
  const formattedTime = currentDate.toLocaleString("en-UK", options);
  const formattedMonth = currentDate.toLocaleString("en-UK", options2);
  const year = currentDate.getFullYear();
  const myDay = currentDate.getDate();
  const originalDay = getOrdinal(myDay);
  const myDate = `${formattedMonth} ${originalDay} ${year}, ${formattedTime}`;
  return myDate;
}

export default formattedDate;
