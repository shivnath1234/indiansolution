import React from 'react';
import { DotScreenShader } from '@/components/ui/dot-shader-background';
import { PillBase } from '@/components/ui/3d-adaptive-navigation-bar';
import { PricingSection } from '@/components/ui/pricing-section';
import { Footer2 } from '@/components/ui/shadcnblocks-com-footer2';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Cpu, Server, Lock, CheckCircle2, HelpCircle, Terminal, Cloud } from 'lucide-react';
import { MoradoLogo } from '@/components/ui/morado-logo';
import { useAdmin } from '@/lib/admin-context';

// Map icon strings to components
const IconMap: any = {
  Shield, Zap, Globe, Cpu, Server, Lock
};

export const PAYMENT_FREQUENCIES = ["monthly"]
export const SINGLE_FREQUENCY = ["monthly"]

export default function Home() {
  const { tiers, proxyTiers, serverDevTiers, features, faqs } = useAdmin();

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/20">
      
      {/* Navigation */}
      <div className="absolute top-8 left-0 right-0 z-50 flex justify-center pointer-events-auto">
         <PillBase />
      </div>

      {/* Logo Top Left */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 left-8 z-50 pointer-events-auto"
        role="img"
        aria-label="Morado Solution Logo"
      >
        <MoradoLogo className="w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]" />
      </motion.div>

      {/* Hero Section */}
      <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <DotScreenShader />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center p-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mix-blend-difference"
          >
            MORADO SOLUTION
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-2xl font-light mix-blend-difference"
          >
            Where thoughts take shape and infrastructure flows like liquid mercury through infinite dimensions.
          </motion.p>
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="mt-10 flex gap-4"
          >
            <Button size="lg" className="rounded-full text-lg h-12 px-8">Deploy Now</Button>
            <Button size="lg" variant="outline" className="rounded-full text-lg h-12 px-8 bg-transparent text-white border-white/20 hover:bg-white/10">View Documentation</Button>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-hidden="true"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
        </motion.div>
      </div>

      {/* Statistics Section */}
      <section className="py-12 border-b border-white/10 bg-black/40 backdrop-blur-sm relative z-10">
        <div className="container px-4 mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.99%</div>
                <div className="text-muted-foreground uppercase tracking-widest text-xs">Uptime SLA</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">3</div>
                <div className="text-muted-foreground uppercase tracking-widest text-xs">Data Centers</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">10TB</div>
                <div className="text-muted-foreground uppercase tracking-widest text-xs">Bandwidth Cap</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
                <div className="text-muted-foreground uppercase tracking-widest text-xs">Expert Support</div>
            </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background relative z-10">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Infrastructure for the Future</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Built on next-generation hardware to power the most demanding applications with zero compromise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = IconMap[feature.iconName] || Server;
              return (
              <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors h-full">
                  <CardHeader>
                    <Icon className="w-10 h-10 mb-4 text-primary" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      {/* Tech Specs Section */}
      <section className="py-24 bg-black/20 border-y border-white/5 relative z-10 overflow-hidden">
         <div className="container px-4 md:px-6 mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Terminal className="w-4 h-4" />
                  <span>Developer First</span>
               </div>
               <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for speed, <br/>engineered for scale.</h2>
               <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  We don't cut corners on hardware. Every node in our network utilizes the latest generation processors and storage technology to ensure your applications run at peak performance.
               </p>
               
               <div className="space-y-4">
                  {[
                     "AMD EPYC™ 7003 Series Processors",
                     "DDR4 ECC Memory (3200 MHz)",
                     "NVMe Storage"
                  ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground/90">{item}</span>
                     </div>
                  ))}
               </div>
            </div>
            <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl rounded-full" />
               <div className="relative bg-black/40 border border-white/10 rounded-xl p-8 backdrop-blur-md">
                  <pre className="text-xs md:text-sm font-mono text-green-400 overflow-x-auto">
{`$ morado deploy --region us-east
> Initializing deployment environment...
> Provisioning AMD EPYC Nodes [OK]
> Allocating NVMe Storage [OK]
> Configuring DDoS Shield [OK]
> Verifying SSL Certificates [OK]

✔ Deployment Successful!
  Region:     us-east (Virginia)
  IP:         104.23.1.55
  Latency:    12ms

Your application is live worldwide 🚀`}
                  </pre>
               </div>
            </div>
         </div>
      </section>

      {/* Pricing Section */}
      <div id="pricing" className="relative z-10 bg-background pt-24">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <PricingSection
          title="Simple Pricing"
          subtitle="Choose the best plan for your infrastructure needs"
          frequencies={PAYMENT_FREQUENCIES}
          tiers={tiers}
        />
      </div>

      {/* Proxy Pricing Section */}
      <div id="proxy-pricing" className="relative z-10 bg-background pt-12 pb-24">
        <PricingSection
          title="Proxy Networks"
          subtitle="Premium anonymous proxies for scraping and automation"
          frequencies={SINGLE_FREQUENCY}
          tiers={proxyTiers}
        />
      </div>

      {/* Server Developing Pricing Section */}
      <div id="dev-pricing" className="relative z-10 bg-background pt-12 pb-24">
        <PricingSection
          title="Server Developing"
          subtitle="Expert configuration, maintenance, and custom backend solutions"
          frequencies={SINGLE_FREQUENCY}
          tiers={serverDevTiers}
        />
      </div>

      {/* FAQ Section */}
      <section className="py-24 bg-background relative z-10">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="grid gap-6">
            {faqs.map((faq: any, i: number) => (
               <Card key={i} className="bg-white/5 border-white/10">
                  <CardHeader>
                     <CardTitle className="text-lg flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-muted-foreground mt-1 shrink-0" />
                        {faq.q}
                     </CardTitle>
                  </CardHeader>
                  <CardContent className="pl-14">
                     <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                  </CardContent>
               </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10 overflow-hidden">
         <div className="absolute inset-0 bg-primary/5"></div>
         <div className="container px-4 text-center relative">
            <Cloud className="w-16 h-16 mx-auto mb-6 text-primary opacity-50" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to launch?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
               Join thousands of developers who have already switched to Morado Solution.
               Start your free trial today.
            </p>
            <Button size="lg" className="rounded-full h-14 px-10 text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow">
               Start Building Now
            </Button>
         </div>
      </section>

      {/* Footer */}
      <Footer2 />
    </div>
  );
}