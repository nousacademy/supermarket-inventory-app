new Vue({
  el: "#inventory_app",
  data: {
    produce: [],
    produceName: "",
    produceCode: "",
    producePrice: ""
  },
  created() {
    // fetch produce item from database on initial load
    fetch('/inventory')
    .then((response) => response.text())
    .then((text) => this.produce = JSON.parse(text))
    .catch((error) => console.log(error));
  },
  methods: {
    addProduceItem: (name, code, price) => {
      var item = {
        "name": name,
        "code": code,
        "price": price
      };

      fetch('/add_item', {
        method: "POST",
        body: JSON.stringify(item),
  			headers: {
  				'Content-Type': 'application/json'
  			}
      })
      .then((response) => response.json())
      .then((data) => {
        this.produce = data;
        location.reload();
      });
    }
  }
});
