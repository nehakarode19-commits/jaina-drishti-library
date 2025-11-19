import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signupSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Confirm your password"),
});

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values = {
      email: String(formData.get("login-email") || ""),
      password: String(formData.get("login-password") || ""),
    };

    const parsed = loginSchema.safeParse(values);
    if (!parsed.success) {
      const message = parsed.error.issues[0]?.message ?? "Invalid login details";
      toast({ title: "Login failed", description: message, variant: "destructive" });
      return;
    }

    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email: parsed.data.email,
        password: parsed.data.password,
      });

      if (error) {
        toast({ title: "Login failed", description: error.message, variant: "destructive" });
        return;
      }

      toast({ title: "Signed in", description: "Welcome back to Jain eLibrary." });
      navigate("/", { replace: true });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values = {
      firstName: String(formData.get("signup-first-name") || ""),
      lastName: String(formData.get("signup-last-name") || ""),
      email: String(formData.get("signup-email") || ""),
      password: String(formData.get("signup-password") || ""),
      confirmPassword: String(formData.get("signup-confirm-password") || ""),
    };

    const parsed = signupSchema.safeParse(values);
    if (!parsed.success) {
      const message = parsed.error.issues[0]?.message ?? "Invalid signup details";
      toast({ title: "Sign up failed", description: message, variant: "destructive" });
      return;
    }

    if (parsed.data.password !== parsed.data.confirmPassword) {
      toast({ title: "Sign up failed", description: "Passwords do not match", variant: "destructive" });
      return;
    }

    try {
      setIsLoading(true);
      const redirectUrl = `${window.location.origin}/`;

      const { error } = await supabase.auth.signUp({
        email: parsed.data.email,
        password: parsed.data.password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            first_name: parsed.data.firstName,
            last_name: parsed.data.lastName,
          },
        },
      });

      if (error) {
        toast({ title: "Sign up failed", description: error.message, variant: "destructive" });
        return;
      }

      toast({
        title: "Check your email",
        description: "We’ve sent you a confirmation link to complete your registration.",
      });

      navigate("/", { replace: true });
    } finally {
      setIsLoading(false);
    }
  };
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 px-4 flex items-center justify-center bg-muted/30">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent text-white mb-4">
              <BookOpen className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Welcome to Jain eLibrary</h1>
            <p className="text-muted-foreground">Access your account to continue</p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Sign In</CardTitle>
                  <CardDescription>Enter your credentials to access your account</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <Input 
                        id="login-email" 
                        type="email" 
                        placeholder="email@example.com" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <Input 
                        id="login-password" 
                        type="password" 
                        placeholder="Enter your password" 
                        required 
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <Link to="/forgot-password" className="text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Signing in..." : "Sign In"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="signup">
              <Card>
                <CardHeader>
                  <CardTitle>Create Account</CardTitle>
                  <CardDescription>Sign up to access the full library</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="signup-first-name">First Name</Label>
                        <Input 
                          id="signup-first-name" 
                          placeholder="First name" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-last-name">Last Name</Label>
                        <Input 
                          id="signup-last-name" 
                          placeholder="Last name" 
                          required 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input 
                        id="signup-email" 
                        type="email" 
                        placeholder="email@example.com" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input 
                        id="signup-password" 
                        type="password" 
                        placeholder="Create a password" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                      <Input 
                        id="signup-confirm-password" 
                        type="password" 
                        placeholder="Confirm your password" 
                        required 
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Creating account..." : "Create Account"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
