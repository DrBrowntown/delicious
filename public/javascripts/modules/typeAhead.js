function searchResultsHTML(stores) {
  return stores
    .map(store => {
      return `
            <a href="/store/${store.slug}" class="search__result">
                <strong>${store.name}</strong>
            </a>
        `;
    })
    .join("");
}

const axios = require("axios");

function typeAhead(search) {
  if (!search) return;

  const searchInput = search.querySelector('input[name="search"]');
  const searchResults = search.querySelector(".search__results");

  searchInput.on("input", function() {
    // if there is no value, quit
    if (!this.value) {
      searchResults.style.display = "none";
      return; //stop
    }

    // show search results
    searchResults.style.display = "block";
    searchResults.innerHTML = "";

    axios
      .get(`/api/search?q=${this.value}`)
      .then(res => {
        if (res.data.length) {
          searchResults.innerHTML = searchResultsHTML(res.data);
          console.log(searchResults.innerHTML);
        }
      })
      .catch(err => {
        console.error(err);
      });
  });

  // handle keyboard inputs
  searchInput.on("keyup", e => {
    console.log(e.keyCode);
  });
}

export default typeAhead;
