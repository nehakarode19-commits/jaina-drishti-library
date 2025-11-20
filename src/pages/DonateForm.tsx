import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

const DonateForm = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [publishName, setPublishName] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Donation Received",
      description: "Thank you for your generous donation!",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container max-w-3xl">
          <div className="bg-white rounded-xl border border-[#D4C5A0] p-8 shadow-sm">
            <h1 className="text-3xl font-bold mb-8 text-center text-foreground">Donation Form</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Donor Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Donor Information</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" required />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" />
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" />
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" />
                  </div>
                </div>
              </div>

              {/* Donation Amount */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Donation Amount</h3>
                <div>
                  <Label htmlFor="amount">Amount (USD) *</Label>
                  <Input id="amount" type="number" min="1" required placeholder="0.00" />
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Payment Method</h3>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card">Credit/Debit Card</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal">PayPal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bank" id="bank" />
                    <Label htmlFor="bank">Bank Transfer</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes">Notes (Optional)</Label>
                <Textarea 
                  id="notes" 
                  placeholder="Any special instructions or dedication..."
                  rows={4}
                />
              </div>

              {/* Publish Name */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="publishName"
                  checked={publishName}
                  onCheckedChange={(checked) => setPublishName(checked as boolean)}
                />
                <label htmlFor="publishName" className="text-sm">
                  I would like my name to be published in the donors list
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/donate")}
                  className="flex-1 border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355]/10"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-[#8B7355] hover:bg-[#6B5D3F] text-white rounded-full"
                >
                  Submit Donation
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DonateForm;
