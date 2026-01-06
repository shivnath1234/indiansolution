import React from 'react';
import { PillBase } from '@/components/ui/3d-adaptive-navigation-bar';
import { Footer2 } from '@/components/ui/shadcnblocks-com-footer2';
import { Server, Shield, Globe } from 'lucide-react';
import { MoradoLogo } from '@/components/ui/morado-logo';

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20">
       <div className="absolute top-8 left-0 right-0 z-50 flex justify-center pointer-events-auto">
         <PillBase />
      </div>

      <main className="flex-1 container mx-auto px-4 py-32 max-w-4xl relative z-10">
        <div className="space-y-6 text-center mb-16">
          <div className="flex justify-center mb-6">
            <MoradoLogo className="w-20 h-20" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">About Morado</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
             Redefining the boundaries of digital infrastructure.
          </p>
        </div>

        <div className="prose prose-invert lg:prose-xl mx-auto">
          <p className="text-xl text-muted-foreground leading-relaxed text-center mb-16">
            Morado Solution was born from a simple idea: <span className="text-white font-medium">infrastructure should be invisible</span>. 
            We believe that developers should focus on creating, not managing servers. We've spent the last decade perfecting a platform that combines raw metal performance with the ease of serverless.
          </p>

          <hr className="my-12 border-white/10" />

          <div className="grid md:grid-cols-2 gap-12 my-16">
             <div>
                <h2 className="text-3xl font-semibold mb-6 text-white">Our Mission</h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  To provide the most robust, scalable, and beautiful hosting platform in the known universe.
                  We combine cutting-edge hardware with artistic software design to create an experience that feels magical.
                  Every line of code we write and every server we rack is dedicated to speed and reliability.
                </p>
             </div>
             <div>
                <h2 className="text-3xl font-semibold mb-6 text-white">Global Reach</h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                   We operate in 35+ availability zones across 12 countries. Our private fiber backbone ensures that your data takes the shortest path between your users and our origin servers, bypassing public internet congestion.
                </p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <Globe className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2 text-white">Network</h3>
              <p className="text-muted-foreground text-sm">Global edge network ensures your data travels at the speed of light.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <Shield className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2 text-white">Security</h3>
              <p className="text-muted-foreground text-sm">Military-grade encryption and automated threat detection.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <Server className="w-8 h-8 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2 text-white">Hardware</h3>
              <p className="text-muted-foreground text-sm">100% NVMe storage and latest generation AMD EPYC processors.</p>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 text-center">
             <h2 className="text-3xl font-bold mb-6 text-white">The Morado Standard</h2>
             <p className="text-muted-foreground mb-0">
                We are ISO 27001 certified and SOC 2 Type II compliant. Your data privacy and security are our top priorities. We undergo regular third-party audits to ensure we meet the highest industry standards.
             </p>
          </div>
        </div>
      </main>

      <Footer2 />
    </div>
  );
}