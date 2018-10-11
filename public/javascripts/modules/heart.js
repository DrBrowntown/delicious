import axios from "axios";

function ajaxHeart(e) {
  e.preventDefault();
  console.log("heart it");
  console.log(this);
  axios
    .post(this.action)
    .then(res => {
      console.log(res.data);
    })
    .catch(console.error);
}

export default ajaxHeart;
