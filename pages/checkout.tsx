import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { clearCart } from "./store/cartSlice";
import Link from "next/link";


function CheckoutPage() {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomer(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(cartItems.length === 0){
      alert("Your shopping cart is empty!");
      return;
    }
    setOrderPlaced(true);
    dispatch(clearCart());
    setCustomer({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
    });
  };

  if(cartItems.length === 0 && !orderPlaced){
    return (
      <div className=" min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <h2 className=" text-2xl font-bold mb-4">Your shopping cart is empty</h2>
        <Link href={'/products'} className=" bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">
        Return to the store</Link>
      </div>
    )
  }

  return (
    <div className=" min-h-screen bg-gray-100 py-10 px-4 md:px-10">
      <div className=" max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        {!orderPlaced ? (
          <>
            <h1 className=" text-2xl font-bold mb-6 text-center">Checkout</h1>


            <div className=" mb-6">
              <h2 className=" text-xl font-semibold mb-2">Your shopping cart</h2>
              <div className=" space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className=" flex items-center justify-between border-b pb-2">
                    <div className=" flex items-center gap-4">
                      <img src={item.image} alt={item.name} className=" w-16 h-16 object-contain rounded" />
                      <span>{item.name}</span>
                    </div>
                    <span>{item.qty} × ${item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className=" text-right mt-4 font-bold text-lg"> total : ${total.toFixed(2)}</div>
            </div>

            <form onSubmit={handleSubmit} className=" space-y-4">
              <h2 className=" text-xl font-semibold">Customer information</h2>
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="FirstName & LastName" value={customer.name} onChange={handleInputChange} className=" border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300" required/>
                <input type="email" name="email" placeholder="Email" value={customer.email} onChange={handleInputChange} className=" border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300" required/>
                <input type="tel" name="phone" placeholder="Contact number" value={customer.phone} onChange={handleInputChange} className=" border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300"/>
                <input type="text" name="country" placeholder="Country" value={customer.country} onChange={handleInputChange} className=" border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300" required/>
                <input type="text" name="city" placeholder="City" value={customer.city} onChange={handleInputChange} className=" border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300" required/>
                <input type="text" name="address" placeholder="Address" value={customer.address} onChange={handleInputChange} className=" border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300" required/>
              </div>


              <div className=" mt-4">
                <h2 className=" text-xl font-semibold mb-2">Payment Method </h2>
                <select className=" border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-300" value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)} >
                  <option value="credit">credit card</option>
                  <option value="paypal">PayPal</option>
                  <option value="cod">Payment on the spot</option>
                </select>
              </div>

              <button type="submit" className=" mt-6 w-full bg-blue-500 text-white p-3 rounded font-bold hover:bg-blue-600 transition">Order registration and payment</button>
            </form>
          </>
        ) : (
          <div className=" text-center py-20">
            <h2 className=" text-3xl font-bold mb-4 text-green-600">Your order has been successfully placed!</h2>
            <p className=" mb-6">Thank you for your purchase. Your order number : #{Math.floor(Math.random() * 1000000)}</p>
            <Link href={'/products'}  className=" bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition">Back To Store</Link>
          </div>
        )}
      </div>
    </div>
  )
}
export default CheckoutPage
