import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, CreditCard, DollarSign, Building2 } from "lucide-react";

const Donate = () => {
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [publishName, setPublishName] = useState(false);

  const suggestedAmounts = [25, 50, 100, 250, 500];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container max-w-5xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent text-white mb-4">
              <Heart className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Support Our Mission</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your generous contribution helps us preserve, digitize, and share sacred Jain texts with seekers worldwide. 
              Every donation makes a meaningful difference in keeping this ancient wisdom accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Donation Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Make a Donation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Amount Selection */}
                  <div className="space-y-3">
                    <Label>Select Donation Amount</Label>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                      {suggestedAmounts.map((amt) => (
                        <Button
                          key={amt}
                          variant={amount === amt.toString() ? "default" : "outline"}
                          onClick={() => {
                            setAmount(amt.toString());
                            setCustomAmount("");
                          }}
                          className="h-16"
                        >
                          <div className="flex flex-col items-center">
                            <DollarSign className="h-4 w-4 mb-1" />
                            <span className="font-bold">{amt}</span>
                          </div>
                        </Button>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="custom-amount">Or Enter Custom Amount</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="custom-amount"
                          type="number"
                          placeholder="0.00"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setAmount("");
                          }}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Donor Information */}
                  <div className="space-y-4">
                    <h3 className="font-semibold">Donor Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name *</Label>
                        <Input id="first-name" placeholder="First name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name *</Label>
                        <Input id="last-name" placeholder="Last name" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="email@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="City" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State/Province</Label>
                        <Input id="state" placeholder="State" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input id="country" placeholder="Country" required />
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="space-y-3">
                    <Label>Payment Method</Label>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer hover:bg-accent/50">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
                          <CreditCard className="h-4 w-4" />
                          Credit/Debit Card
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer hover:bg-accent/50">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal" className="flex items-center gap-2 cursor-pointer flex-1">
                          <DollarSign className="h-4 w-4" />
                          PayPal
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer hover:bg-accent/50">
                        <RadioGroupItem value="bank" id="bank" />
                        <Label htmlFor="bank" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Building2 className="h-4 w-4" />
                          Bank Transfer
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Additional Options */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="publish-name" 
                        checked={publishName}
                        onCheckedChange={(checked) => setPublishName(checked as boolean)}
                      />
                      <Label htmlFor="publish-name" className="cursor-pointer">
                        Publish my name on the donors list
                      </Label>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes (Optional)</Label>
                      <Textarea 
                        id="notes" 
                        placeholder="Any special message or dedication..."
                        rows={3}
                      />
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    <Heart className="mr-2 h-5 w-5" />
                    Complete Donation
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    You will receive a tax-deductible receipt via email upon completion
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Impact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      $25
                    </div>
                    <div>
                      <p className="font-medium">Digital Preservation</p>
                      <p className="text-muted-foreground">Helps digitize one ancient manuscript</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      $50
                    </div>
                    <div>
                      <p className="font-medium">Translation Support</p>
                      <p className="text-muted-foreground">Funds translation of sacred texts</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      $100
                    </div>
                    <div>
                      <p className="font-medium">Server Costs</p>
                      <p className="text-muted-foreground">Covers one month of hosting</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      $250+
                    </div>
                    <div>
                      <p className="font-medium">Major Impact</p>
                      <p className="text-muted-foreground">Supports comprehensive projects</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Other Ways to Give</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium mb-1">Zelle</p>
                    <p className="text-muted-foreground">donate@jainelibrary.org</p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">Check</p>
                    <p className="text-muted-foreground">
                      Mail to: Jain Heritage Center<br />
                      123 Spiritual Way<br />
                      City, ST 12345
                    </p>
                  </div>
                  <div>
                    <p className="font-medium mb-1">NEFT/RTGS</p>
                    <p className="text-muted-foreground">Contact us for bank details</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;
