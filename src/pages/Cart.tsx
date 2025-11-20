import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useCart } from "@/contexts/CartContext";
import { BookOpen, Minus, Plus, Trash2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Cart = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, getSubtotal } = useCart();
  const [step, setStep] = useState<"shipping" | "payment" | "confirmation">("shipping");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [sameAsShipping, setSameAsShipping] = useState(false);

  const shippingCost = 50.0;
  const subtotal = getSubtotal();
  const total = subtotal + shippingCost;

  const handleContinue = () => {
    if (step === "shipping") {
      setStep("payment");
    } else if (step === "payment") {
      setStep("confirmation");
      toast({
        title: "Order Placed",
        description: "Your order has been placed successfully!",
      });
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center py-12">
          <div className="text-center">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Add some books to get started</p>
            <Button onClick={() => navigate("/buy-books")}>Browse Books</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <Header />

      <main className="flex-1 py-8 px-4">
        <div className="container max-w-7xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-foreground">My Cart</h1>

          {/* Checkout Section Label */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-foreground">Checkout</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Column - Forms */}
            <div className="lg:col-span-3">
              {/* Steps */}
              <div className="flex gap-3 mb-6">
                <Button
                  onClick={() => setStep("shipping")}
                  className={step === "shipping" ? "bg-black-btn hover:bg-black-btn/90 text-white rounded-full" : "bg-white text-black-btn border-black-btn hover:bg-black-btn/10 rounded-full"}
                >
                  <span className="mr-2">✓</span> Shipping
                </Button>
                <Button
                  onClick={() => step !== "shipping" && setStep("payment")}
                  disabled={step === "shipping"}
                  className={step === "payment" ? "bg-black-btn hover:bg-black-btn/90 text-white rounded-full" : "bg-white text-black-btn border-black-btn hover:bg-black-btn/10 rounded-full"}
                >
                  <span className="mr-2">✓</span> Payment
                </Button>
                <Button
                  disabled
                  className={step === "confirmation" ? "bg-black-btn hover:bg-black-btn/90 text-white rounded-full" : "bg-white text-muted-foreground border-muted rounded-full"}
                >
                  <span className="mr-2">○</span> Confirmation
                </Button>
              </div>

              {step === "shipping" && (
                <div className="bg-white rounded-xl border border-[#D4C5A0] p-8 shadow-sm">
                  <h3 className="text-lg font-semibold mb-6 text-foreground">Permanent Address</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="organization">Organization</Label>
                      <Input id="organization" placeholder="Organization" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="First Name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Last Name" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" placeholder="Address" />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="City" />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input id="state" placeholder="State" />
                      </div>
                      <div>
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" placeholder="Country" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="zip">Zip</Label>
                        <Input id="zip" placeholder="Zip" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" placeholder="Phone" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Email" />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="sameAddress"
                        checked={sameAsShipping}
                        onCheckedChange={(checked) => setSameAsShipping(checked as boolean)}
                      />
                      <label htmlFor="sameAddress" className="text-sm">
                        Select Shipping Address It's same as permanent Address
                      </label>
                    </div>

                    <Button
                      onClick={handleContinue}
                      className="w-full bg-black-btn hover:bg-black-btn/90 text-white rounded-full py-6 text-lg font-semibold mt-6"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}

              {step === "payment" && (
                <div className="bg-white rounded-xl border border-[#D4C5A0] p-8 shadow-sm">
                  <h3 className="text-lg font-semibold mb-6 text-foreground">Payment Methods</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                        <div className="flex items-center space-x-2 mb-2">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card">Credit/Debit Card</Label>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <RadioGroupItem value="upi" id="upi" />
                          <Label htmlFor="upi">UPI Payment</Label>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <RadioGroupItem value="paypal" id="paypal" />
                          <Label htmlFor="paypal">PayPal</Label>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          <RadioGroupItem value="netbanking" id="netbanking" />
                          <Label htmlFor="netbanking">Net Banking</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="cod" id="cod" />
                          <Label htmlFor="cod">Cash-On-Delivery</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {paymentMethod === "card" && (
                      <div className="space-y-4 border-t border-[#D4C5A0] pt-6">
                        <h3 className="text-lg font-semibold">Card Details</h3>
                        
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input id="cardNumber" placeholder="Card Number" />
                        </div>

                        <div>
                          <Label htmlFor="cardName">Card Name/Payment</Label>
                          <Input id="cardName" placeholder="Card Name/Payment" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiryDate">Expiry Date</Label>
                            <Input id="expiryDate" placeholder="Expiry Date" />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="CVV" type="password" />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="cardHolderName">Card Holder Name</Label>
                          <Input id="cardHolderName" placeholder="Card Holder Name" />
                        </div>
                      </div>
                    )}

                    <Button
                      onClick={handleContinue}
                      className="w-full bg-black-btn hover:bg-black-btn/90 text-white rounded-full py-6 text-lg font-semibold mt-6"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}

              {step === "confirmation" && (
                <div className="bg-white rounded-xl border border-[#D4C5A0] p-8 shadow-sm">
                  <h3 className="text-lg font-semibold mb-6 text-foreground">Payment Option</h3>
                  
                  <div className="space-y-6">
                    <div className="border border-[#D4C5A0] rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-4">
                        <input type="radio" checked readOnly className="w-4 h-4" />
                        <span className="font-medium">Master Card ending in **** **** 7106</span>
                        <span className="ml-auto bg-[#8B7355] text-white text-xs px-2 py-1 rounded">Default</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Expiry on 06/26</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Client Details</h4>
                      <p>Mehek Manikant Shah</p>
                      <p className="text-sm text-muted-foreground">Phone No : 9856478562</p>
                      <p className="text-sm text-muted-foreground">Email ID : mehek12@gmail.com</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Shipping Address</h4>
                      <p className="text-sm text-muted-foreground">
                        700, Fremont Street<br />
                        Fremont Street Experience, Downtown<br />
                        Las Vegas<br />
                        89101
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Estimated Delivery</h4>
                      <p className="text-sm text-muted-foreground">March 18, 2024</p>
                    </div>

                    <Button
                      onClick={() => {
                        toast({
                          title: "Order Confirmed",
                          description: "Thank you for your order!",
                        });
                        navigate("/");
                      }}
                      className="w-full bg-black-btn hover:bg-black-btn/90 text-white rounded-full py-6 text-lg font-semibold mt-6"
                    >
                      Order Now
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-2">
              <div className="bg-[#E8F5E9] rounded-xl border border-[#C8E6C9] p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-6 text-foreground">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 p-4 bg-white rounded-lg border border-[#D4C5A0]">
                      <div className="bg-black-btn rounded-lg p-3 w-14 h-14 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base mb-2 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-xl font-bold text-black-btn mb-3">
                          Rs.{item.price.toFixed(2)}
                        </p>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 border-black-btn text-black-btn hover:bg-black-btn/10"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-bold text-foreground">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 border-black-btn text-black-btn hover:bg-black-btn/10"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:bg-destructive/10 self-start"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-4 border-t-2 border-[#C8E6C9]">
                  <div className="flex justify-between text-base">
                    <span className="text-foreground">Subtotal</span>
                    <span className="font-bold text-foreground">Rs.{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span className="text-foreground">
                      Shipping <button className="text-black-btn underline font-medium">View Details</button>
                    </span>
                    <span className="font-bold text-foreground">Rs.{shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold pt-4 border-t-2 border-[#C8E6C9]">
                    <span className="text-foreground">Grand Total</span>
                    <span className="text-black-btn">Rs.{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
