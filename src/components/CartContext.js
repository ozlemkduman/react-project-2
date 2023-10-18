import { db } from "../firebaseConfig";


export function addProductToCart(userId, product) {
  const cartRef = db.collection("carts").doc(userId);

  cartRef.set(
    {
      items: [{ productId: product.id, quantity: 1 }], // Veya diğer ürün bilgileri
    },
    { merge: true }
  );
}

export function resetCart(userId) {
  const cartRef = db.collection("carts").doc(userId);
  cartRef.delete();
}
