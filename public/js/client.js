new Vue({
  el: "#inventory_app",
  data: {
    produce: []
  },
  created() {
    // fetch produce item from database on initial load
    fetch('/inventory')
    .then((response) => response.text())
    .then((text) => this.produce = JSON.parse(text))
    .catch((error) => console.log(error));
  }
});
