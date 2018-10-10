import { type } from "os";

const axios = require("axios");

function typeAhead(search) {
  if (!search) return;

  const searchInput = search.querySelector('input[name="search"]');
  const searchResults = search.querySelector(".search__results");

  searchInput.on("input", function() {
    console.log(this.value);
  });
}

export default typeAhead;
