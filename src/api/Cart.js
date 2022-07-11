let cart = null;

class Cart {
  save(product) {
    if (cart === null) {
      cart = { products: [], totalPrice: 0 };
    }

    const existingProductIndex = cart.products.findIndex(
      ({id}) => id == product.id
    ); // para chequear si ya existe un producto en el carrito
    if (existingProductIndex >= 0) {
      // si existe ya un producto, se asignará un id de acuerdo al último producto generado
      const exsitingProduct = cart.products[existingProductIndex];
      exsitingProduct.id += 1;
    } else {
      //si no existe, el id asignado será 1
      product.id = 1;
      cart.products.push(product);
    }

    cart.totalPrice += product.price;
  }

  getCart() {
    return cart;
  }

  delete(productId) {
    const isExisting = cart.products.findIndex(({id}) => id == productId);
    if (isExisting >= 0) {
      cart.products.splice(isExisting, 1);
    }
  }
}

module.exports = Cart;
