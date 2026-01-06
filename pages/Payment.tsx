import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, ShieldCheck, Lock, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { PillBase } from '@/components/ui/3d-adaptive-navigation-bar';
import { Footer2 } from '@/components/ui/shadcnblocks-com-footer2';
import { DotScreenShader } from '@/components/ui/dot-shader-background';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MoradoLogo } from '@/components/ui/morado-logo';

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  
  // Retrieve plan details passed from PricingCard
  const { plan, frequency } = location.state || {};

  // Redirect if no plan is selected (direct access)
  useEffect(() => {
    if (!plan) {
      navigate('/#pricing');
    }
  }, [plan, navigate]);

  if (!plan) return null;

  const price = plan.price[frequency];
  const isFree = price === "Free";
  
  // Format price for INR if it's a number
  const displayPrice = typeof price === 'number' 
    ? new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price)
    : price;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Redirect to dashboard/home after success
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 2000);
  };

  // Format card input
  const handleCardInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.substring(0, 16);
    value = value.replace(/(\d{4})/g, '$1 ').trim();
    setCardNumber(value);
  };

  const handleExpiryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    setExpiry(value.substring(0, 5));
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-black text-foreground relative flex flex-col items-center justify-center p-4">
         <div className="absolute inset-0 z-0">
          <DotScreenShader />
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 bg-white/5 border border-white/10 p-12 rounded-3xl text-center max-w-md w-full backdrop-blur-xl"
          role="alert"
          aria-live="polite"
        >
           <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500" aria-hidden="true" />
           </div>
           <h1 className="text-3xl font-bold text-white mb-2">Payment Successful!</h1>
           <p className="text-muted-foreground mb-8">Your subscription to {plan.name} is now active.</p>
           <p className="text-sm text-white/50 animate-pulse">Redirecting you to dashboard...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/20">
      <div className="absolute inset-0 z-0 opacity-50">
          <DotScreenShader />
      </div>

      {/* Navigation */}
      <div className="absolute top-8 left-0 right-0 z-50 flex justify-center pointer-events-auto">
         <PillBase />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-24 max-w-6xl">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-8 focus:outline-none focus:ring-2 focus:ring-primary rounded-md p-1"
          aria-label="Back to Pricing"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Pricing
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
             <h1 className="text-4xl font-bold mb-2">Checkout</h1>
             <p className="text-muted-foreground mb-8">Complete your secure transaction</p>

             <Card className="bg-white/5 border-white/10 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-purple-600 to-blue-500"></div>
                <CardHeader>
                   <CardTitle className="flex justify-between items-center">
                      <span>Order Summary</span>
                      <MoradoLogo className="w-8 h-8" />
                   </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                   <div className="flex justify-between items-start pb-6 border-b border-white/10">
                      <div>
                         <h3 className="text-xl font-bold text-white">{plan.name} Plan</h3>
                         <p className="text-sm text-muted-foreground capitalize">{frequency} billing</p>
                      </div>
                      <div className="text-right">
                         <div className="text-2xl font-bold text-white">{displayPrice}</div>
                         <div className="text-xs text-muted-foreground">/ {frequency === 'monthly' ? 'mo' : 'yr'}</div>
                      </div>
                   </div>

                   <div>
                      <h4 className="font-medium mb-3 text-sm text-white/80">Includes:</h4>
                      <ul className="space-y-2">
                         {plan.features.map((feature: string, i: number) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                               <CheckCircle2 className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                               {feature}
                            </li>
                         ))}
                      </ul>
                   </div>

                   <div className="pt-4 flex justify-between items-center font-bold text-lg text-white">
                      <span>Total Due</span>
                      <span>{displayPrice}</span>
                   </div>
                </CardContent>
             </Card>

             <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
                <ShieldCheck className="w-5 h-5 text-blue-400" aria-hidden="true" />
                <p>100% Secure Payment. Cancel anytime from your dashboard.</p>
             </div>
          </motion.div>

          {/* Payment Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
             <Card className="bg-background/80 border-white/10 backdrop-blur-md shadow-2xl h-full">
                <CardHeader>
                   <CardTitle className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" aria-hidden="true" />
                      Payment Details
                   </CardTitle>
                </CardHeader>
                <CardContent>
                   <form onSubmit={handlePayment} className="space-y-6">
                      <div className="space-y-2">
                         <label htmlFor="card-holder" className="text-sm font-medium text-muted-foreground">Cardholder Name</label>
                         <input 
                            id="card-holder"
                            type="text" 
                            placeholder="John Doe"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                            required
                            autoComplete="cc-name"
                         />
                      </div>

                      <div className="space-y-2">
                         <label htmlFor="card-number" className="text-sm font-medium text-muted-foreground">Card Number</label>
                         <div className="relative">
                            <input 
                               id="card-number"
                               type="text" 
                               value={cardNumber}
                               onChange={handleCardInput}
                               placeholder="0000 0000 0000 0000"
                               className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors pl-12"
                               required
                               autoComplete="cc-number"
                            />
                            <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
                         </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                         <div className="space-y-2">
                            <label htmlFor="card-expiry" className="text-sm font-medium text-muted-foreground">Expiry Date</label>
                            <input 
                               id="card-expiry"
                               type="text" 
                               value={expiry}
                               onChange={handleExpiryInput}
                               placeholder="MM/YY"
                               className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                               required
                               autoComplete="cc-exp"
                            />
                         </div>
                         <div className="space-y-2">
                            <label htmlFor="card-cvc" className="text-sm font-medium text-muted-foreground">CVC</label>
                            <div className="relative">
                               <input 
                                  id="card-cvc"
                                  type="text" 
                                  value={cvc}
                                  onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').substring(0, 4))}
                                  placeholder="123"
                                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                                  required
                                  autoComplete="cc-csc"
                               />
                               <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden="true" />
                            </div>
                         </div>
                      </div>

                      <div className="space-y-2">
                         <label htmlFor="billing-zip" className="text-sm font-medium text-muted-foreground">Billing Zip Code</label>
                         <input 
                            id="billing-zip"
                            type="text" 
                            placeholder="10001"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                            required
                            autoComplete="postal-code"
                         />
                      </div>

                      <Button 
                         type="submit" 
                         className="w-full h-12 text-lg rounded-xl mt-4" 
                         disabled={isProcessing}
                      >
                         {isProcessing ? (
                            <span className="flex items-center gap-2">
                               <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" aria-hidden="true" />
                               Processing...
                            </span>
                         ) : (
                            isFree ? "Activate Free Plan" : `Pay ${displayPrice}`
                         )}
                      </Button>
                      
                      <p className="text-xs text-center text-muted-foreground mt-4">
                         By clicking pay, you agree to our Terms of Service and Privacy Policy.
                      </p>
                   </form>
                </CardContent>
             </Card>
          </motion.div>
        </div>
      </div>
      
      {/* Footer removed */}
    </div>
  );
}