var s,
shopping_cart = {
  settings: {
    products: [
    {
      name: "coconut",
      description: "food",
      price: 65
    },
    {
      name: "banana",
      description: "food",
      price: 87
    }
    ]
  },

  init: function() {
    s = this.settings;
  },

  add_details: function(name,description,price){
  shopping_cart.settings.products.push({name: name,description: description,price: price});
  },

  total_price: function() {
    var i = null;
    var total = 0;
    for (i = 0; s.products.length > i; i += 1) {
        total = total + s.products[i].price;
        return total;
    }

  },

  discount: function(discount) {

    var i = null;
    var total = 0;
    for (i = 0; s.products.length > i; i += 1) {
        s.products[i].price = s.products[i].price - s.products[i].price * discount/100 ;
        return s.products[i].price;
    }
  }


};
shopping_cart.init();