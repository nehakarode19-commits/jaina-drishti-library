import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";

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
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const returnUrl = searchParams.get("returnUrl") || "/";
  const defaultTab = searchParams.get("tab") || "login";

  // Check if user is already logged in
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate(returnUrl, { replace: true });
      }
    };
    checkUser();
  }, [navigate, returnUrl]);

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
      navigate(returnUrl, { replace: true });
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

      toast({ title: "Welcome!", description: "Your account has been created successfully." });
      navigate(returnUrl, { replace: true });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 50%, #A5D6A7 100%)' }}>
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md shadow-2xl border-0">
          <CardContent className="pt-8">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-[#2E7D32] mb-2">Welcome to Jain E-Library</h1>
            </div>

            <Tabs defaultValue={defaultTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-muted/30">
                <TabsTrigger value="login" className="data-[state=active]:bg-white">Login</TabsTrigger>
                <TabsTrigger value="signup" className="data-[state=active]:bg-white">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold mb-1">Login</h2>
                  <p className="text-sm text-muted-foreground">Login Now to buy books</p>
                </div>
                
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email Id</Label>
                    <Input
                      id="login-email"
                      name="login-email"
                      type="email"
                      placeholder="Enter Email Id"
                      required
                      className="bg-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="login-password"
                        name="login-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        required
                        className="bg-white pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                    <div className="flex justify-end">
                      <Link to="/forgot-password" className="text-sm text-[#2E7D32] hover:underline">
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" className="mt-1" />
                    <label
                      htmlFor="terms"
                      className="text-sm text-muted-foreground leading-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to Privacy Policy and Terms of Use of Jain eLibrary Website
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#5B4912] hover:bg-[#4B3902] text-white h-11"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Login"}
                  </Button>
                  
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-muted-foreground/20"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-card px-2 text-muted-foreground">Or Login with</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-center gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="rounded-full w-12 h-12"
                      onClick={() => toast({ title: "Coming soon", description: "Google login will be available soon" })}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="rounded-full w-12 h-12"
                      onClick={() => toast({ title: "Coming soon", description: "Facebook login will be available soon" })}
                    >
                      <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="rounded-full w-12 h-12"
                      onClick={() => toast({ title: "Coming soon", description: "Apple login will be available soon" })}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                      </svg>
                    </Button>
                  </div>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <button
                      onClick={() => {
                        const signupTab = document.querySelector('[value="signup"]') as HTMLElement;
                        signupTab?.click();
                      }}
                      className="text-[#2E7D32] font-semibold hover:underline"
                    >
                      Register Now
                    </button>
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="signup">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold mb-1">Sign Up</h2>
                  <p className="text-sm text-muted-foreground">Create your account to access the library</p>
                </div>
                
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-first-name">First Name</Label>
                      <Input
                        id="signup-first-name"
                        name="signup-first-name"
                        type="text"
                        placeholder="First name"
                        required
                        className="bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-last-name">Last Name</Label>
                      <Input
                        id="signup-last-name"
                        name="signup-last-name"
                        type="text"
                        placeholder="Last name"
                        required
                        className="bg-white"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      name="signup-email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="bg-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      name="signup-password"
                      type="password"
                      placeholder="Create a password"
                      required
                      className="bg-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                    <Input
                      id="signup-confirm-password"
                      name="signup-confirm-password"
                      type="password"
                      placeholder="Confirm your password"
                      required
                      className="bg-white"
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox id="signup-terms" className="mt-1" />
                    <label
                      htmlFor="signup-terms"
                      className="text-sm text-muted-foreground leading-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to Privacy Policy and Terms of Use of Jain eLibrary Website
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#5B4912] hover:bg-[#4B3902] text-white h-11"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Sign Up"}
                  </Button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <button
                      onClick={() => {
                        const loginTab = document.querySelector('[value="login"]') as HTMLElement;
                        loginTab?.click();
                      }}
                      className="text-[#2E7D32] font-semibold hover:underline"
                    >
                      Login Now
                    </button>
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
