import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

const DonateFillForm = () => {
  const navigate = useNavigate();
  const [publishName, setPublishName] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "Thank you! We will send you the receipt shortly.",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container max-w-3xl">
          <div className="bg-white rounded-xl border border-[#D4C5A0] p-8 shadow-sm">
            <h1 className="text-3xl font-bold mb-4 text-center text-foreground">Zelle Payment Receipt Form</h1>
            <p className="text-center text-[#6B5D3F] mb-8">
              Please fill out this form after making your Zelle payment so we can send you a tax receipt.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Donor Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Your Information</h3>
                
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
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" required />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" required />
                </div>

                <div>
                  <Label htmlFor="address">Mailing Address *</Label>
                  <Input id="address" required />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input id="city" required />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input id="state" required />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="zip">ZIP Code *</Label>
                    <Input id="zip" required />
                  </div>
                  <div>
                    <Label htmlFor="country">Country *</Label>
                    <Input id="country" required />
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Payment Details</h3>
                
                <div>
                  <Label htmlFor="amount">Donation Amount (USD) *</Label>
                  <Input id="amount" type="number" min="1" required placeholder="0.00" />
                </div>

                <div>
                  <Label htmlFor="transactionDate">Transaction Date *</Label>
                  <Input id="transactionDate" type="date" required />
                </div>

                <div>
                  <Label htmlFor="zelleEmail">Zelle Email/Phone Used *</Label>
                  <Input id="zelleEmail" required placeholder="Email or phone number used for Zelle" />
                </div>

                <div>
                  <Label htmlFor="transactionId">Transaction/Confirmation ID (if available)</Label>
                  <Input id="transactionId" placeholder="Optional" />
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes (Optional)</Label>
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

              {/* Important Note */}
              <div className="bg-[#FEF7E7] border border-[#D4C5A0] rounded-lg p-4">
                <p className="text-sm text-[#6B5D3F]">
                  <strong>Important:</strong> Please ensure you have already completed the Zelle payment before submitting this form. 
                  We will verify the transaction and send you a tax receipt via email within 3-5 business days.
                </p>
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
                  Submit Form
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

export default DonateFillForm;
