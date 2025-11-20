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
          <h1 className="text-4xl font-bold mb-8 text-center">My Cart</h1>

          {/* Steps */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={step === "shipping" ? "default" : "outline"}
              className={step === "shipping" ? "bg-[#8B7355]" : ""}
            >
              1. Shipping
            </Button>
            <Button
              variant={step === "payment" ? "default" : "outline"}
              className={step === "payment" ? "bg-[#8B7355]" : ""}
            >
              2. Payment
            </Button>
            <Button
              variant={step === "confirmation" ? "default" : "outline"}
              className={step === "confirmation" ? "bg-[#8B7355]" : ""}
            >
              3. Confirmation
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Forms */}
            <div className="lg:col-span-2">
              {step === "shipping" && (
                <div className="bg-white rounded-lg border border-[#D4C5A0] p-6">
                  <h2 className="text-xl font-bold mb-4">Checkout</h2>
                  <h3 className="text-lg font-semibold mb-4">Permanent Address</h3>
                  
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
                      className="w-full bg-[#8B7355] hover:bg-[#6B5D3F] text-white"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}

              {step === "payment" && (
                <div className="bg-white rounded-lg border border-[#D4C5A0] p-6">
                  <h2 className="text-xl font-bold mb-4">Checkout</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
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
                      className="w-full bg-[#8B7355] hover:bg-[#6B5D3F] text-white"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-[#D4C5A0] p-6 sticky top-4">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 pb-4 border-b border-[#D4C5A0]">
                      <div className="bg-[#8B7355] rounded-lg p-3 w-16 h-16 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="h-8 w-8 text-white" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm mb-1 truncate">{item.title}</h3>
                        <p className="text-lg font-bold text-[#4A4129]">
                          Rs.{item.price.toFixed(2)}
                        </p>
                        
                        <div className="flex items-center gap-2 mt-2">
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-6 w-6"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-medium w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-6 w-6"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>

                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-destructive"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span className="font-semibold">Rs.{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>
                      Shipping{" "}
                      <button className="text-primary underline text-xs">View Details</button>
                    </span>
                    <span className="font-semibold">Rs.{shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-[#D4C5A0]">
                    <span>Grand Total</span>
                    <span>Rs.{total.toFixed(2)}</span>
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
