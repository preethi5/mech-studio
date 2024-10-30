// to handle err. if no img available set the default img given
export const handleError = (evnt) => {
  evnt.target.src = "images/default.jpg";
};
