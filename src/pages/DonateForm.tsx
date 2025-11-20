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

const DonateForm = () => {
  const navigate = useNavigate();
  const [publishName, setPublishName] = useState(false);
  const [notRobot, setNotRobot] = useState(false);

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
          <div className="bg-[#FEF7E7] rounded-xl border border-[#D4C5A0] p-8 shadow-sm">
            <h1 className="text-2xl font-bold mb-2 text-center text-[#2C2416]">
              India – Online Transfer/NEFT/RTGS (within India) – Donation is Tax deductible in India
            </h1>
            <p className="text-center text-[#6B5D3F] mb-8">
              All Donors are requested to complete following information..
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-[#4A4129]">Name</Label>
                <Input 
                  id="name" 
                  required 
                  placeholder="Name"
                  className="bg-white border-[#D4C5A0]"
                />
              </div>

              <div>
                <Label htmlFor="address" className="text-[#4A4129]">Address (Optional-to send receipt)</Label>
                <Input 
                  id="address" 
                  placeholder="Address"
                  className="bg-white border-[#D4C5A0]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city" className="text-[#4A4129]">City</Label>
                  <Input 
                    id="city" 
                    placeholder="City"
                    className="bg-white border-[#D4C5A0]"
                  />
                </div>
                <div>
                  <Label htmlFor="state" className="text-[#4A4129]">State</Label>
                  <Input 
                    id="state" 
                    placeholder="City"
                    className="bg-white border-[#D4C5A0]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="country" className="text-[#4A4129]">Country</Label>
                  <Input 
                    id="country" 
                    placeholder="Country"
                    className="bg-white border-[#D4C5A0]"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-[#4A4129]">Phone No</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    placeholder="Phone No"
                    className="bg-white border-[#D4C5A0]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-[#4A4129]">Email</Label>
                  <Input 
                    id="email" 
                    type="email"
                    required
                    placeholder="Email"
                    className="bg-white border-[#D4C5A0]"
                  />
                </div>
                <div>
                  <Label htmlFor="amount" className="text-[#4A4129]">Amount</Label>
                  <Input 
                    id="amount" 
                    type="number"
                    min="1"
                    required
                    placeholder="Amount"
                    className="bg-white border-[#D4C5A0]"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="publishQuestion" className="text-[#4A4129]">Can we publish your name?</Label>
                <Input 
                  id="publishQuestion" 
                  placeholder="Yes"
                  className="bg-white border-[#D4C5A0]"
                />
              </div>

              <div>
                <Label htmlFor="instruction" className="text-[#4A4129]">Special Instruction or Comment</Label>
                <Textarea 
                  id="instruction" 
                  placeholder="Special Instruction or Comment"
                  rows={4}
                  className="bg-white border-[#D4C5A0]"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="notRobot"
                  checked={notRobot}
                  onCheckedChange={(checked) => setNotRobot(checked as boolean)}
                  className="border-[#D4C5A0]"
                />
                <label htmlFor="notRobot" className="text-sm text-[#4A4129]">
                  I'm not a robot
                </label>
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  type="submit"
                  className="bg-[#6B5D3F] hover:bg-[#5A4D33] text-white px-8 rounded-full"
                >
                  Pay Now
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/donate")}
                  className="border-[#6B5D3F] text-[#6B5D3F] hover:bg-[#6B5D3F]/10 px-8 rounded-full"
                >
                  Cancel
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
