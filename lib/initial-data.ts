import { Shield, Zap, Globe, Cpu, Server, Lock } from 'lucide-react';

export const INITIAL_TIERS = [
  {
    id: "individuals",
    name: "Individuals",
    price: {
      monthly: "Free",
      yearly: "Free",
    },
    description: "For your hobby projects",
    features: [
      "Free email alerts",
      "3-minute checks",
      "Automatic data enrichment",
      "10 monitors",
      "Up to 3 seats",
    ],
    cta: "Order Now",
  },
  {
    id: "starter-vps",
    name: "Starter VPS",
    price: {
      monthly: 1299,
      yearly: 999,
    },
    description: "Perfect for personal sites",
    features: [
      "1 vCPU Core",
      "2GB ECC RAM",
      "25GB NVMe Storage",
      "1TB Bandwidth",
      "DDoS Protection",
    ],
    cta: "Order Now",
  },
  {
    id: "teams",
    name: "Teams",
    price: {
      monthly: 7499,
      yearly: 6249,
    },
    description: "Great for small businesses",
    features: [
      "Unlimited phone calls",
      "30 second checks",
      "Single-user account",
      "20 monitors",
      "Up to 6 seats",
    ],
    cta: "Order Now",
    popular: true,
  },
  {
    id: "pro-vps",
    name: "Pro VPS",
    price: {
      monthly: 3749,
      yearly: 3329,
    },
    description: "For production apps",
    features: [
      "2 vCPU Cores",
      "8GB ECC RAM",
      "80GB NVMe Storage",
      "4TB Bandwidth",
      "Automated Backups",
    ],
    cta: "Order Now",
  },
  {
    id: "organizations",
    name: "Organizations",
    price: {
      monthly: 9999,
      yearly: 8329,
    },
    description: "Great for large businesses",
    features: [
      "Unlimited phone calls",
      "15 second checks",
      "Single-user account",
      "50 monitors",
      "Up to 10 seats",
    ],
    cta: "Order Now",
  },
  {
    id: "high-perf",
    name: "High Performance",
    price: {
      monthly: 14999,
      yearly: 13329,
    },
    description: "CPU-optimized instances",
    features: [
      "8 Dedicated vCPU Cores",
      "32GB RAM",
      "200GB NVMe Storage",
      "10TB Bandwidth",
      "Priority Support",
    ],
    cta: "Order Now",
  },
  {
    id: "ai-compute",
    name: "AI Compute",
    price: {
      monthly: 37499,
      yearly: 33329,
    },
    description: "GPU accelerated workloads",
    features: [
      "1x NVIDIA A100 GPU",
      "64GB System RAM",
      "500GB NVMe Storage",
      "ML Tools Pre-installed",
      "Jupyter Notebook Support",
    ],
    cta: "Order Now",
  },
  {
    id: "global-scale",
    name: "Global Scale",
    price: {
      monthly: 74999,
      yearly: 70829,
    },
    description: "Multi-region deployment",
    features: [
      "Active-Active Geo-Redundancy",
      "Global Load Balancer",
      "Anycast DNS",
      "Custom WAF Rules",
      "Dedicated Account Manager",
    ],
    cta: "Order Now",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: {
      monthly: "Custom",
      yearly: "Custom",
    },
    description: "For multiple teams",
    features: [
      "Everything in Organizations",
      "Up to 5 team members",
      "100 monitors",
      "15 status pages",
      "200+ integrations",
    ],
    cta: "Order Now",
    highlighted: true,
  },
]

export const INITIAL_PROXY_TIERS = [
  {
    id: "datacenter",
    name: "Datacenter",
    price: {
      monthly: 1249,
    },
    description: "Fast & affordable shared IPs",
    features: [
      "Shared Datacenter IPs",
      "Unlimited Bandwidth",
      "Instant Activation",
      "99.9% Uptime",
      "HTTP/HTTPS/SOCKS5",
    ],
    cta: "Order Now",
  },
  {
    id: "residential",
    name: "Residential",
    price: {
      monthly: "580 / GB",
    },
    description: "Real devices, high anonymity",
    features: [
      "10M+ IP Pool",
      "Country & City Targeting",
      "Auto-Rotate / Sticky",
      "0.6s Response Time",
      "Pay As You Go",
    ],
    cta: "Order Now",
    popular: true,
  },
  {
    id: "isp",
    name: "ISP Premium",
    price: {
      monthly: 3749,
    },
    description: "Static residential IPs",
    features: [
      "Dedicated Static IPs",
      "1Gbps Speed",
      "Unlimited Threads",
      "Whitelisted IPs",
      "Best for E-commerce",
    ],
    cta: "Order Now",
  },
  {
    id: "mobile",
    name: "Mobile 4G/5G",
    price: {
      monthly: 9999,
    },
    description: "Highest trust mobile network",
    features: [
      "Dedicated Dongles",
      "Unlimited Bandwidth",
      "IP Rotation on Demand",
      "Carrier Selection",
      "Social Media Automation",
    ],
    cta: "Order Now",
    highlighted: true,
  },
]

export const INITIAL_SERVER_DEV_TIERS = [
  {
    id: "setup",
    name: "Server Setup",
    price: {
      monthly: 4100,
    },
    description: "One-time configuration & hardening",
    features: [
      "OS Installation & Update",
      "Firewall Configuration",
      "Web Server Setup (Nginx/Apache)",
      "SSL Certificate Install",
      "Basic Security Hardening",
    ],
    cta: "Order Now",
  },
  {
    id: "maintenance",
    name: "Monthly Maintenance",
    price: {
      monthly: 8250,
    },
    description: "Keep your server secure & updated",
    features: [
      "Weekly OS Updates",
      "Security Patching",
      "Uptime Monitoring",
      "Daily Backups",
      "1 Hour Support/mo",
    ],
    cta: "Order Now",
    popular: true,
  },
  {
    id: "optimization",
    name: "Performance Tuning",
    price: {
      monthly: 12400,
    },
    description: "Maximize server speed & efficiency",
    features: [
      "Database Optimization",
      "Caching Configuration (Redis/Varnish)",
      "PHP/Python Tuning",
      "Load Testing",
      "Architecture Review",
    ],
    cta: "Order Now",
  },
  {
    id: "full-stack",
    name: "Custom Development",
    price: {
      monthly: "Custom",
    },
    description: "Tailored backend solutions",
    features: [
      "Custom API Development",
      "Microservices Architecture",
      "CI/CD Pipeline Setup",
      "Infrastructure as Code",
      "Dedicated Developer",
    ],
    cta: "Order Now",
    highlighted: true,
  },
]

export const INITIAL_FEATURES = [
  {
    title: "Global Edge Network",
    description: "Deploy your content to 35+ regions worldwide in seconds. Low latency guaranteed.",
    iconName: "Globe"
  },
  {
    title: "DDoS Protection",
    description: "Enterprise-grade mitigation against L3/L4/L7 attacks included in every plan.",
    iconName: "Shield"
  },
  {
    title: "NVMe SSD Storage",
    description: "Blazing fast I/O performance with 100% NVMe storage architecture.",
    iconName: "Server"
  },
  {
    title: "Instant Scaling",
    description: "Scale from 1 to 1000 containers in under a minute with our auto-scaling engine.",
    iconName: "Zap"
  },
  {
    title: "Dedicated Hardware",
    description: "Bare metal performance with isolated resources for maximum throughput.",
    iconName: "Cpu"
  },
  {
    title: "Zero Trust Security",
    description: "End-to-end encryption and strict access controls by default.",
    iconName: "Lock"
  }
];

export const INITIAL_FAQS = [
  {
    q: "How does the auto-scaling work?",
    a: "Our system monitors your resource usage in real-time. When traffic spikes, we automatically provision new containers within milliseconds to handle the load, and scale down when traffic subsides."
  },
  {
    q: "Do you support custom Docker containers?",
    a: "Yes! You can deploy any Docker container directly from your registry. We support Docker Hub, GHCR, and private registries."
  },
  {
    q: "What kind of DDoS protection do you offer?",
    a: "We provide always-on protection against volumetric, protocol, and application layer attacks. Our global scrubbing centers filter malicious traffic before it reaches your server."
  },
  {
    q: "Can I migrate from another provider?",
    a: "Absolutely. Our specialized migration team can help you move your data and configure your environment with zero downtime."
  }
];