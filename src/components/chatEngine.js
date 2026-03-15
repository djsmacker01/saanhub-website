// ─── Saan-hub Solutions — Encyclopedic Chat Knowledge Base ───────────────────
// Each entry: { id, category, patterns[], response, suggestions[] }

export const CATEGORIES = [
  { id: "all",      label: "All Topics",  icon: "🔍" },
  { id: "company",  label: "About Us",    icon: "🏢" },
  { id: "services", label: "Services",    icon: "💼" },
  { id: "pricing",  label: "Pricing",     icon: "💰" },
  { id: "products", label: "Products",    icon: "🚀" },
  { id: "process",  label: "Process",     icon: "⚙️" },
  { id: "tech",     label: "Technology",  icon: "🛠" },
  { id: "contact",  label: "Contact",     icon: "📞" },
];

export const CATEGORY_STARTERS = {
  company:  ["Who is Saan-hub Solutions?", "What is your mission?", "Where are you based?", "Tell me about your team"],
  services: ["What services do you offer?", "Tell me about web development", "What is AI automation?", "What is digital transformation?"],
  pricing:  ["How much do your services cost?", "What are your pricing tiers?", "Do you offer payment plans?", "Is there a free consultation?"],
  products: ["What products have you built?", "Tell me about SubletMatch", "Tell me about Fare-Tracker", "What is TrackGoal?"],
  process:  ["How does your development process work?", "How long does a project take?", "What is your methodology?", "How do you handle revisions?"],
  tech:     ["What technologies do you use?", "Do you use React?", "What AI tools do you use?", "What cloud platforms do you use?"],
  contact:  ["How can I contact you?", "What are your office hours?", "Book a free consultation", "Where is your office?"],
};

const KB = [
  // ── GREETINGS ──
  {
    id: "greeting", category: "general",
    patterns: ["hi", "hello", "hey", "good morning", "good afternoon", "good evening", "howdy", "hiya", "yo", "greetings", "hi there", "helo"],
    response: `👋 **Welcome to Saan-hub Solutions!**

I'm your intelligent virtual assistant — your guide to everything Saan-hub.

I can help you explore:
• **Our services** — web development, AI, consulting & more
• **Pricing** — transparent, per-service cost breakdowns
• **Our products** — live platforms we've built
• **Our process** — how we work with clients
• **Contact & bookings** — get in touch with our team

What would you like to know?`,
    suggestions: ["What services do you offer?", "How much does it cost?", "Who is Saan-hub?"],
  },

  // ── ABOUT THE COMPANY ──
  {
    id: "about", category: "company",
    patterns: ["who are you", "what is saan", "about saan", "tell me about your company", "about your company", "what does saan hub do", "who is saan hub", "saan hub solutions", "about saanhub", "what kind of company"],
    response: `**Saan-hub Solutions** is a UK-based **technology consultancy and digital innovation studio** founded to help startups and organisations transform ideas into scalable digital products.

**What makes us different:**
• We are **technology strategists** — not just developers
• We build our **own products** (SubletMatch, Fare-Tracker, etc.) so we understand the journey
• We bring **startup agility** with **enterprise-grade architecture**
• We work with **founders, SMEs, and growing organisations** across the UK and globally

**Our expertise spans:**
• Custom software & platform development
• AI automation & intelligent systems
• Digital transformation consulting
• SaaS & marketplace products
• Technical advisory & fractional CTO services`,
    suggestions: ["What services do you offer?", "What products have you built?", "Where are you based?"],
  },

  {
    id: "mission", category: "company",
    patterns: ["mission", "vision", "values", "purpose", "what do you stand for", "company values", "your goal", "what drives you", "philosophy"],
    response: `**Our Mission**
To bridge the gap between innovative ideas and scalable digital products — empowering founders and organisations with the technology strategy, architecture, and execution they need to succeed.

**Our Vision**
A world where brilliant ideas are not blocked by technical complexity. Every founder with a great concept deserves access to world-class technology expertise.

**Our Core Values**
• 🎯 **Excellence** — We build things right, not just fast
• 🤝 **Partnership** — We think alongside your business, not just for it
• 💡 **Innovation** — We stay ahead of emerging technology
• 🔒 **Integrity** — Honest advice, transparent pricing, no hidden costs
• 🌍 **Impact** — Solutions that create measurable, real-world results`,
    suggestions: ["What services do you offer?", "Who is the team?", "Tell me about your process"],
  },

  {
    id: "location", category: "company",
    patterns: ["where are you", "location", "cardiff", "where are you based", "address", "uk", "united kingdom", "wales", "where do you operate", "office location", "headquarters", "where is the office"],
    response: `📍 **Headquarters: United Kingdom** 🇬🇧 (Founded in Cardiff, Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁥)

We're a **UK technology consultancy** with roots in Cardiff, Wales — proud of our Welsh heritage and serving clients across the entire UK.

**Coverage:**
• UK-wide projects (remote & in-person where possible)
• International clients — we work globally
• UK-based clients can arrange in-person meetings or video calls

**Contact:**
📞 **07459 253102**
📧 **info@saan-hub.com**
⏰ **Mon–Fri, 9am–6pm GMT**`,
    suggestions: ["How can I contact you?", "Can you work remotely?", "Book a free consultation"],
  },

  {
    id: "team", category: "company",
    patterns: ["team", "who works there", "founder", "success adedeji", "staff", "employees", "who are your team", "who built this", "developers at saan", "meet the team", "who runs saan"],
    response: `**Our Team**

👤 **Success Adedeji** — *Founder & Lead Developer*
Full-stack developer specialising in React, Node.js, AI integrations, and platform architecture. Passionate about turning complex ideas into elegant digital products.

👤 **Soji** — *IT Support Technician*
Handles infrastructure, systems support, and technical troubleshooting.

👤 **Nurudeen** — *Mechanical Engineer*
Brings cross-disciplinary engineering thinking to complex product challenges.

**Extended Network:**
We also collaborate with a trusted network of specialists including UI/UX designers, data scientists, cloud architects, and content strategists — assembled per project needs.

📞 Want to speak to our team? **07459 253102**`,
    suggestions: ["What technologies do you use?", "How do I start a project?", "Book a consultation"],
  },

  {
    id: "why_us", category: "company",
    patterns: ["why choose you", "why saan hub", "what makes you different", "why should i use you", "advantages", "benefits of working with you", "why you over others", "what sets you apart", "unique selling point", "usp"],
    response: `**Why Saan-hub Solutions?**

✅ **We build our own products** — We've walked in your shoes as product builders, not just hired guns.

✅ **Strategy-first approach** — Before a single line of code, we help you think through the business logic, user flows, and technical architecture.

✅ **Transparent pricing** — No hidden costs, no scope surprises. Fixed-price and retainer options available.

✅ **Agile & responsive** — Small enough to be nimble, experienced enough to deliver.

✅ **Full-spectrum expertise** — From idea validation to AI automation to cloud deployment under one roof.

✅ **Post-launch support** — We don't disappear after handover. Ongoing maintenance and advisory available.

✅ **UK-based, globally capable** — Local accountability with global-standard delivery.`,
    suggestions: ["What services do you offer?", "Can I see your pricing?", "What have you built?"],
  },

  // ── SERVICES ──
  {
    id: "services_overview", category: "services",
    patterns: ["services", "what do you offer", "what do you do", "offerings", "capabilities", "what can you do", "how can you help", "list your services", "all services", "service list"],
    response: `**Saan-hub Solutions — Full Service Menu**

**💻 Development Services**
• Custom Web & Mobile App Development
• SaaS & Marketplace Platform Development
• MVP & Startup Product Development
• Technology Stack Modernisation & Cloud Integration

**🤖 Consulting Services**
• Startup Idea Strategy Session — from £50
• MVP Product Blueprint — £150–£600
• AI & Automation Consulting — £300–£2,000
• Digital Transformation & Tech Consulting
• Technical Advisory (Fractional CTO)

**🏗 Architecture & Infrastructure**
• System & Database Architecture Design
• API Development & Integration
• Cloud Migration & DevOps
• Performance Optimisation

Ask me about any specific service for detailed pricing and what's included!`,
    suggestions: ["Tell me the pricing", "Tell me about AI automation", "What is MVP development?"],
  },

  {
    id: "web_dev", category: "services",
    patterns: ["web development", "mobile app", "website", "web app", "application development", "app development", "build a website", "build an app", "responsive", "frontend", "backend", "full stack", "custom software", "software development", "bespoke"],
    response: `**Custom Web & Mobile App Development**

We design and build **user-centric digital products** — from simple landing pages to complex enterprise applications.

**What's included:**
• Responsive web applications (desktop + mobile)
• Native and cross-platform mobile apps (iOS/Android)
• UX/UI design & prototyping
• REST & GraphQL API development
• Third-party integrations (payment, auth, maps, etc.)
• QA testing & quality assurance
• Performance optimisation

**Tech stack:** React, Next.js, Angular, Node.js, TypeScript, Supabase, PostgreSQL

**Who it's for:** Startups, SMEs, and enterprises needing custom digital solutions that scale.

💰 **Pricing:** From £800 for simple apps to £15,000+ for complex platforms
📞 Discuss your project: **07459 253102**`,
    suggestions: ["What is the typical timeline?", "What tech stack do you use?", "How much does a website cost?"],
  },

  {
    id: "ai_automation", category: "services",
    patterns: ["ai", "artificial intelligence", "automation", "chatbot", "workflow automation", "machine learning", "intelligent", "ai agent", "automate", "n8n", "automated", "bot", "ai integration", "process automation", "rpa", "intelligent automation", "ai system"],
    response: `**AI & Automation Consulting**

We help businesses eliminate repetitive work, build intelligent systems, and unlock the power of AI — without needing a data science team.

**What we build:**
• 🤖 AI chatbots and virtual assistants
• ⚙️ Workflow automation pipelines (n8n, Zapier integrations)
• 🧠 AI agent systems (multi-step reasoning workflows)
• 📊 Intelligent data dashboards & reporting
• 🔄 Internal process automation tools
• 🔌 AI integration into existing platforms

**Technologies:** OpenAI APIs, n8n, LangChain, custom ML pipelines, Supabase, REST webhooks

**Best for:** Companies with repetitive processes, large data volumes, or customer service demands that outgrow manual effort.

💰 **Pricing:** £300 – £2,000 depending on scope
📞 Discuss your AI project: **07459 253102**`,
    suggestions: ["How much does AI automation cost?", "What is workflow automation?", "Can you add AI to my existing system?"],
  },

  {
    id: "mvp", category: "services",
    patterns: ["mvp", "minimum viable product", "startup", "founder", "idea", "new product", "prototype", "early stage", "validate", "launch", "product launch", "build a product", "build my idea", "first version", "new business idea", "product idea"],
    response: `**MVP & Startup Product Development**

Got an idea? We help founders move from concept to a **working, shippable product** — fast, focused, and built to scale.

**Our MVP approach:**
1. **Validate** — Is the idea technically feasible? Who are the users?
2. **Scope** — Define the core features (no feature creep)
3. **Architect** — Design a scalable technical foundation
4. **Build** — Agile sprints with regular demos
5. **Launch** — Deploy, test, and collect real user feedback
6. **Iterate** — Refine based on data

**What you get:**
• Working product deployed to production
• Clean, documented codebase you own
• User authentication, core features, basic admin
• Ready for investment conversations

**Timeline:** 4–12 weeks depending on complexity
💰 **From £800** for simple MVPs — £3,000–£8,000 for full-featured products
📞 Free founder strategy call: **07459 253102**`,
    suggestions: ["What's included in a strategy session?", "How long does an MVP take?", "What's the MVP pricing?"],
  },

  {
    id: "digital_transform", category: "services",
    patterns: ["digital transformation", "transform my business", "modernise", "outdated systems", "legacy system", "improve efficiency", "streamline", "digitise", "go digital", "business transformation", "process improvement", "operational efficiency"],
    response: `**Digital Transformation & Tech Consulting**

We help established businesses move beyond outdated systems and build a **modern, efficient digital operation**.

**What we do:**
• 🔍 **Audit** your current technology landscape
• 🗺 **Design** a digital transformation roadmap
• 🤖 **Automate** manual and repetitive workflows
• ☁️ **Migrate** legacy systems to modern cloud infrastructure
• 📈 **Measure** improvements with KPIs and dashboards
• 🔄 **Support** change management across the organisation

**Typical outcomes:**
• 30–50% reduction in manual admin time
• Faster decision-making with real-time data
• Reduced IT maintenance costs
• Better customer experience

**Best for:** Businesses still relying on spreadsheets, manual processes, or outdated software.

📞 Book a discovery call: **07459 253102**`,
    suggestions: ["How much does transformation consulting cost?", "What is cloud migration?", "How long does it take?"],
  },

  {
    id: "saas_platform", category: "services",
    patterns: ["saas", "software as a service", "marketplace", "platform", "subscription", "multi-tenant", "booking system", "portal", "dashboard", "management system", "build a saas", "subscription product", "b2b platform", "marketplace platform"],
    response: `**SaaS & Marketplace Platform Development**

We specialise in building **scalable, multi-tenant digital platforms** — from SaaS products to full digital marketplaces.

**Platform types we build:**
• 📦 SaaS subscription products with billing & user management
• 🏪 Digital marketplaces (buyer/seller, booking, listings)
• 📅 Booking & scheduling systems
• 📊 Custom dashboards and admin portals
• 🛠 Internal business tooling & B2B platforms
• 🔗 API-first products for third-party integration

**Included in every platform:**
• User authentication & role-based access
• Database architecture & data modelling
• Admin panel & reporting
• Payment integration (Stripe, PayPal, etc.)
• Mobile-responsive design
• Cloud deployment & CI/CD pipeline

💰 **Pricing:** £800 – £15,000+ per project
📞 Scope your platform: **07459 253102**`,
    suggestions: ["Tell me about your products as examples", "What tech do you use for SaaS?", "How long to build a SaaS?"],
  },

  {
    id: "cloud_modernisation", category: "services",
    patterns: ["cloud", "migration", "legacy", "modernisation", "modernization", "devops", "ci/cd", "infrastructure", "aws", "azure", "hosting", "deployment", "server", "cloud migration", "move to cloud", "kubernetes"],
    response: `**Technology Stack Modernisation & Cloud Integration**

We help businesses migrate from aging infrastructure to **modern, cloud-native systems** — reducing costs, boosting performance, and improving security.

**Services include:**
• ☁️ Cloud migration strategy & execution (AWS, Azure, Vercel, Netlify)
• 🏗 Legacy system modernisation
• 🚀 DevOps & CI/CD pipeline setup
• 🔐 Security hardening & compliance
• ⚡ Performance optimisation
• 🔄 Ongoing infrastructure maintenance

**Process:**
1. Infrastructure audit
2. Migration strategy design
3. Staged migration (zero-downtime)
4. Testing & validation
5. Post-migration monitoring

**Why migrate?**
• Cut server costs by 40–60%
• Improve performance & reliability
• Enable auto-scaling
• Enhance security posture

📞 Cloud consultation: **07459 253102**`,
    suggestions: ["What cloud platforms do you use?", "How long does cloud migration take?", "How much does cloud migration cost?"],
  },

  {
    id: "technical_advisory", category: "services",
    patterns: ["technical advisor", "cto", "advisory", "fractional cto", "tech lead", "ongoing support", "retainer", "monthly retainer", "long term", "strategic guidance", "tech strategy", "startup cto", "part time cto"],
    response: `**Technical Advisory — Fractional CTO Service**

Need senior technical leadership without the cost of a full-time CTO? Our **Technical Advisory retainer** gives you ongoing expert guidance.

**What you get each month:**
• 🎯 Product strategy & roadmap reviews
• 🏗 Architecture & infrastructure guidance
• 👥 Developer team oversight & code reviews
• 📈 Scaling & performance advisory
• 📞 Regular strategy calls
• 🚨 Emergency technical consultation

**Best for:**
• Funded startups scaling their engineering
• Growing companies without senior technical leadership
• Businesses undergoing digital transformation
• Non-technical founders who need a trusted tech voice

💰 **Pricing:** £150 – £800 / month (based on engagement level)
✅ No long-term contract — rolling monthly
📞 Discuss your needs: **07459 253102**`,
    suggestions: ["What's in the monthly retainer?", "Do I need a contract?", "How is advisory billed?"],
  },

  {
    id: "strategy_session", category: "services",
    patterns: ["strategy session", "startup strategy", "idea session", "strategy consultation", "platform strategy", "idea consultation", "startup idea session", "technology strategy"],
    response: `**Startup Idea Strategy Session (Service #01)**

Perfect for founders who have an idea but no technical plan.

**What happens in the session:**
• 60–90 minute focused consultation
• Platform feature planning & scoping
• Technology stack recommendation
• Monetisation strategy guidance
• MVP roadmap creation
• Honest feasibility assessment

**Outcome:** You leave with a concrete technical roadmap and a clear picture of what to build, in what order, and with what technology.

💰 **Price:** From £50 – £120 per session
📞 Book your session: **07459 253102**
📧 Or email: **info@saan-hub.com**`,
    suggestions: ["What's an MVP Blueprint?", "How much does the full build cost?", "What happens after the strategy session?"],
  },

  {
    id: "mvp_blueprint", category: "services",
    patterns: ["mvp blueprint", "product blueprint", "technical spec", "technical specification", "product spec", "blueprint", "spec document", "documentation", "product document"],
    response: `**MVP Product Blueprint (Service #02)**

A comprehensive technical specification document your development team can use to build correctly from day one.

**What's included:**
• Full feature breakdown & user stories
• System architecture design diagrams
• Recommended technology stack
• Database structure & data modelling
• API integrations mapping
• Development roadmap & milestones
• Estimated build timeline

**Outcome:** A developer-ready specification document — whether you use us or another team to build it.

💰 **Price:** £150 – £600 per blueprint
📞 Get yours: **07459 253102**`,
    suggestions: ["Who builds the product after the blueprint?", "What is a strategy session?", "Can you build it for us?"],
  },

  // ── PRICING ──
  {
    id: "pricing_overview", category: "pricing",
    patterns: ["price", "pricing", "cost", "how much", "rates", "fee", "charges", "budget", "affordable", "expensive", "quote", "estimate", "£", "gbp", "pound", "money", "what does it cost", "pricing list", "price list", "fees"],
    response: `**Saan-hub Solutions — Pricing Overview**

All prices in GBP (£). Fixed-price and retainer options available.

💡 **Strategy Session** — £50 – £120 / session
📋 **MVP Blueprint** — £150 – £600
🤖 **AI & Automation** — £300 – £2,000
💻 **Web/Mobile Development** — £800 – £15,000+
🏗 **SaaS Platform** — £800 – £15,000+
📈 **Technical Advisory** — £150 – £800 / month

**🎁 Free Consultation**
All projects begin with a **free strategy call** — no obligation, no sales pressure.

**💳 Payment Options:**
• 50% upfront / 50% on delivery (standard)
• Milestone-based payments (large projects)
• Monthly retainer (advisory)

📞 **07459 253102** | 📧 info@saan-hub.com`,
    suggestions: ["What's included in each service?", "Do you offer payment plans?", "Is there a free consultation?"],
  },

  {
    id: "free_consultation", category: "pricing",
    patterns: ["free", "free consultation", "discovery call", "strategy session free", "book a call", "book a meeting", "schedule", "appointment", "complimentary", "no cost", "book consultation"],
    response: `**Free Technology Strategy Session 🎁**

We offer a **complimentary discovery call** before any project engagement.

**What you get (for free):**
✅ Expert review of your idea or project
✅ Honest technical assessment
✅ Technology approach recommendation
✅ Realistic timeline & budget range
✅ Actionable next steps — whether you work with us or not

**No sales pitch. No pressure. Just expert advice.**

This session usually lasts **30–60 minutes** via phone or video call.

📞 **Call us: 07459 253102**
📧 **Email: info@saan-hub.com**
📅 We aim to schedule within 24–48 hours of request`,
    suggestions: ["What happens after the consultation?", "What's the next step?", "What services do you offer?"],
  },

  {
    id: "payment_terms", category: "pricing",
    patterns: ["payment terms", "how do you charge", "payment plan", "deposit", "upfront", "invoice", "payment schedule", "how billing works", "payment method", "bank transfer", "milestone payment"],
    response: `**Payment Terms & Billing**

**Standard Payment Structure:**
• **50% upfront** — Project commencement
• **50% on delivery** — Final handover

**For Larger Projects (£5,000+):**
• Milestone-based payments tied to project phases
• Typically: 30% start / 40% mid-point / 30% completion

**Monthly Retainer (Advisory):**
• Billed monthly in advance
• No long-term contract required
• Cancel with 30 days' notice

**Payment Methods:**
• Bank transfer (preferred)
• Card payments available on request

**What's included:**
• Project specification sign-off
• Regular progress updates
• Staging environment for review
• Final handover with documentation

📞 Payment queries: **07459 253102**`,
    suggestions: ["Is there a refund policy?", "What if I need changes?", "How long does a project take?"],
  },

  {
    id: "refunds", category: "pricing",
    patterns: ["refund", "cancellation", "cancel", "money back", "guarantee", "satisfaction guarantee", "not happy", "dispute", "if not satisfied"],
    response: `**Refund & Cancellation Policy**

**Our commitment:**
We are dedicated to delivering solutions that meet agreed specifications. All projects begin with a clearly defined scope document that both parties sign off.

**Revision Policy:**
• All projects include **2 rounds of revisions** as standard
• Additional revisions billed at an agreed hourly rate
• We communicate proactively if scope changes arise

**Cancellation:**
• If cancelled before development starts, the deposit is refundable minus any consultation/blueprint costs
• Partial refunds may apply if work is already underway, calculated against deliverables completed

**Disputes:**
We resolve all issues through direct communication first. We have an excellent track record of client satisfaction.

📞 Any concerns? Call directly: **07459 253102**`,
    suggestions: ["What are your payment terms?", "How many revisions are included?", "How do I start a project?"],
  },

  // ── PRODUCTS ──
  {
    id: "products_overview", category: "products",
    patterns: ["products", "portfolio", "what have you built", "apps you made", "your work", "examples", "projects", "case study", "live products", "your apps", "show me what you built", "product portfolio"],
    response: `**Saan-hub Innovation Lab — Our Products**

We don't just build for clients — we build our own products too.

🏠 **SubletMatch** *(Live)* — PropTech
AI-powered property subletting marketplace

🚌 **Fare-Tracker** *(Live)* — TransportTech
Smart transport fare intelligence platform

🏨 **Hailey's Hotel** *(Live)* — HospitalityTech
Hotel booking & hospitality management system

🎯 **TrackGoal** *(Live)* — Productivity
Goal tracking & productivity platform

🏴󠁧󠁢󠁷󠁬󠁳󠁥 **Cymru Unleashed** *(Live)* — Community
Welsh community, sports & cultural platform

📷 **ResQCam** *(In Development)* — SafetyTech
Emergency incident reporting technology

Ask about any product for detailed features and tech stack!`,
    suggestions: ["Tell me about SubletMatch", "Tell me about TrackGoal", "Tell me about Fare-Tracker"],
  },

  {
    id: "subletmatch", category: "products",
    patterns: ["subletmatch", "sublet match", "subletting", "sublet platform", "property platform", "rental marketplace", "property subletting", "short term rental", "property app"],
    response: `**SubletMatch — Property Tech Platform** 🏠

*Status: ✅ Live*

**What it is:**
An AI-powered digital marketplace that intelligently connects tenants looking to sublet their property with people searching for short-term accommodation.

**Key features:**
• 🤖 AI-powered listing-to-renter matching
• 📋 Verified tenant profiles & digital agreements
• 💬 In-app messaging between parties
• 📸 Photo-rich property listings
• 📅 Availability calendar & booking system
• 🔔 Smart notifications & alerts
• 📊 Admin dashboard & reporting

**Tech stack:** React, Node.js, Supabase, PostgreSQL

**Industry:** Property Technology (PropTech)

SubletMatch demonstrates our expertise in **two-sided marketplace development** — a key area we can build for clients.`,
    suggestions: ["Tell me about your other products", "Can you build a marketplace like this?", "What tech was used?"],
  },

  {
    id: "faretracker", category: "products",
    patterns: ["fare tracker", "faretracker", "transport", "fare", "commuter", "bus fare", "train fare", "transport intelligence", "fare comparison", "travel costs"],
    response: `**Fare-Tracker — Transport Intelligence Platform** 🚌

*Status: ✅ Live*

**What it is:**
A smart fare intelligence platform that helps commuters, frequent travellers, and transport planners compare, track, and optimise travel costs.

**Key features:**
• 🔍 Real-time fare search & comparison
• 📈 Historical fare trend tracking
• 🔔 Price alert notifications
• 🗺 Route optimisation suggestions
• 📊 Personal travel spend analytics
• 🏢 Enterprise reporting for organisations

**Tech stack:** React, Node.js, REST APIs, Supabase

**Industry:** Transport Technology (TransportTech)

This project showcases our expertise in **real-time data applications and API integration**.`,
    suggestions: ["Tell me about SubletMatch", "What other products have you built?", "Can you build a data platform?"],
  },

  {
    id: "trackgoal", category: "products",
    patterns: ["trackgoal", "track goal", "goal tracking", "productivity", "personal goals", "habit tracker", "okr", "kpi tracker", "performance tracking", "objectives"],
    response: `**TrackGoal — Goal & Productivity Platform** 🎯

*Status: ✅ Live*

**What it is:**
A structured goal tracking and productivity platform for individuals and teams — helping users set, monitor, and achieve goals with clarity and accountability.

**Key features:**
• 🎯 SMART goal creation & structuring
• 📊 Progress visualisation & dashboards
• 🔔 Milestone reminders & check-ins
• 👥 Team goal sharing & accountability
• 🏆 Achievement badges & gamification
• 📅 Weekly/monthly review cycles
• 📱 Mobile-responsive design

**Tech stack:** React, Node.js, Supabase

**Industry:** Productivity & Personal Development

TrackGoal demonstrates our ability to build **data-rich, engagement-focused** applications.`,
    suggestions: ["Tell me about your other apps", "Can you build a productivity tool?", "Tell me about Hailey's Hotel"],
  },

  {
    id: "haileys_hotel", category: "products",
    patterns: ["hailey", "hotel", "hailey hotel", "hospitality", "hotel booking", "hotel management", "accommodation system", "property management", "booking system"],
    response: `**Hailey's Hotel — Hospitality Management System** 🏨

*Status: ✅ Live*

**What it is:**
A modern hotel booking and hospitality management platform that streamlines operations for boutique hotels and hospitality businesses.

**Key features:**
• 📅 Online booking & reservation management
• 🏠 Room availability calendar
• 💳 Payment processing integration (Stripe)
• 👤 Guest profile management
• 📊 Occupancy & revenue reporting
• 📱 Mobile-responsive guest portal
• 🔔 Staff notification system

**Tech stack:** React, Node.js, Stripe, Supabase

**Industry:** Hospitality & Travel Technology

This platform demonstrates expertise in **booking systems, payment integration, and property management technology**.`,
    suggestions: ["Tell me about your other products", "Can you build a booking system?", "What is your platform development cost?"],
  },

  {
    id: "cymru_unleashed", category: "products",
    patterns: ["cymru", "cymru unleashed", "wales", "welsh", "welsh platform", "community platform", "sports platform", "welsh community"],
    response: `**Cymru Unleashed — Welsh Community Platform** 🏴󠁧󠁢󠁷󠁬󠁳󠁥

*Status: ✅ Live — [cymruunleashed.com](https://cymruunleashed.com/)*

**What it is:**
A community-driven digital platform celebrating Welsh culture, sports, events, and community engagement — connecting people across Wales.

**Features:**
• 🏉 Welsh sports news & event coverage
• 🗺 Community events map & calendar
• 👥 Local group & club profiles
• 🎭 Welsh culture & heritage content
• 📱 Mobile-first experience
• 🗣 Welsh & English bilingual support

**Industry:** Community Technology / Cultural Platform

This reflects our **commitment to Wales and the communities we're part of**.`,
    suggestions: ["What other products are in development?", "Tell me about ResQCam", "Tell me about TrackGoal"],
  },

  {
    id: "resqcam", category: "products",
    patterns: ["resqcam", "resq cam", "resq", "emergency", "safety tech", "incident reporting", "emergency camera", "safety camera", "evidence", "safety platform"],
    response: `**ResQCam — Emergency Safety Technology** 📷

*Status: 🔧 In Development*

**What it is:**
An emergency incident reporting platform enabling real-time evidence capture, instant sharing with emergency services, and coordination with safety officers.

**Planned features:**
• 📸 Instant photo/video capture and upload
• 🚨 One-tap emergency alert system
• 📍 GPS location tagging
• 🔗 Direct sharing with emergency services
• 🏢 Enterprise deployment for large venues
• 📊 Safety incident analytics & reporting
• 🔐 End-to-end encrypted media storage

**Industry:** Safety Technology / Emergency Response

ResQCam demonstrates our work in **high-stakes, real-time, safety-critical applications**.`,
    suggestions: ["Tell me about SubletMatch", "What other products are live?", "Can you build a safety app?"],
  },

  // ── PROCESS ──
  {
    id: "process_overview", category: "process",
    patterns: ["how does it work", "your process", "methodology", "steps", "approach", "how do you work", "what's the process", "project process", "how do you build", "workflow", "how projects work", "development process"],
    response: `**Our 4-Phase Development Process**

**Phase 1: Discovery & Strategy** 🔍
• Understanding your business, users, and goals
• Technology feasibility assessment
• Feature scoping and prioritisation
• Technical architecture planning
• Timeline and budget agreement

**Phase 2: Product Architecture** 🏗
• System architecture design
• Database schema & data modelling
• API structure & third-party integrations
• UI/UX wireframing and prototyping
• Technology stack finalisation

**Phase 3: Build & Iterate** ⚙️
• Agile 2-week sprints
• Regular client demos at each milestone
• Staging environment for review & feedback
• Testing, QA, and bug fixing

**Phase 4: Launch & Scale** 🚀
• Production deployment
• Performance monitoring setup
• Documentation & knowledge handover
• Post-launch support & optimisation

📞 Start your project: **07459 253102**`,
    suggestions: ["How long does a project take?", "What happens at discovery?", "What's the cost?"],
  },

  {
    id: "timeline", category: "process",
    patterns: ["how long", "timeline", "deadline", "turnaround", "quick", "fast delivery", "time to build", "when will it be done", "weeks", "months", "duration", "delivery time", "project duration", "estimated time"],
    response: `**Project Timelines**

| Project Type | Typical Duration |
|---|---|
| Strategy Session | Same week |
| MVP Blueprint | 1–2 weeks |
| Landing Page | 1–3 weeks |
| Simple Web App / MVP | 4–8 weeks |
| Full SaaS Platform | 8–16 weeks |
| AI Automation System | 2–6 weeks |
| Cloud Migration | 3–8 weeks |
| Enterprise Platform | 4–6 months |

**Factors affecting timeline:**
• Complexity of features required
• Third-party integrations needed
• Volume of design work
• Number of revision rounds
• Client response speed on feedback

**We always commit to a realistic timeline upfront** — no false promises.

📞 Get a specific estimate: **07459 253102**`,
    suggestions: ["What's included in each phase?", "Can I rush a project?", "What about delays?"],
  },

  {
    id: "agile", category: "process",
    patterns: ["agile", "scrum", "sprint", "iterations", "project management", "milestones", "updates", "communication during project", "how often do you update me", "progress updates"],
    response: `**How We Manage Projects**

We use an **Agile Scrum methodology**, adapted for client transparency:

**Sprint Structure (2 weeks):**
• Sprint planning — define what we build this cycle
• Daily standups — internal team syncs
• Mid-sprint client check-in (optional)
• Sprint demo — we show you what was built
• Retrospective — continuous improvement

**Client Communication:**
• Dedicated project channel (Slack/WhatsApp/email)
• Weekly written progress summaries
• Staging environment access throughout
• You can request a call anytime

**Tools we use:**
Notion (planning), GitHub (code), Figma (design), Slack/WhatsApp (comms)

**You're never in the dark.** We believe in radical transparency on progress, blockers, and decisions.`,
    suggestions: ["How many revisions are included?", "What happens at handover?", "What tools do I need?"],
  },

  {
    id: "revisions", category: "process",
    patterns: ["revisions", "changes", "amendments", "updates after", "modify", "how many changes", "can i change", "feedback rounds", "change requests", "iteration"],
    response: `**Revision Policy**

**Standard included:** 2 rounds of revisions per project phase

**What counts as a revision:**
• Design tweaks — colours, layout, spacing
• Content / copy changes
• Feature behaviour modifications
• Bug fixes (always free — unlimited)

**What's a new scope item:**
• Entirely new features not in the original spec
• Major structural architecture changes
• New modules or pages not originally agreed

**Additional revisions:**
Billed at an agreed hourly rate — we always notify you before any extra charges.

**Our advice:**
Give us detailed feedback during the staging review phase — this minimises revision rounds and keeps delivery on schedule.

📞 Scope questions: **07459 253102**`,
    suggestions: ["What are your payment terms?", "How do I give feedback?", "What's included in handover?"],
  },

  {
    id: "support_maintenance", category: "process",
    patterns: ["support", "maintenance", "after launch", "post launch", "ongoing support", "maintenance plan", "bug fixes", "updates after launch", "long term support", "who maintains"],
    response: `**Post-Launch Support & Maintenance**

**Included at handover:**
• 30-day post-launch bug fix warranty (free)
• All source code & access credentials
• Technical documentation for key workflows

**Ongoing Support Options:**

🛠 **Ad-hoc Support** — Pay-per-issue/update as needed
📋 **Maintenance Retainer** — From £150/month:
  • Security & dependency updates
  • Minor feature tweaks
  • Performance monitoring
  • Priority response time

🎯 **Technical Advisory** — £150–£800/month for ongoing strategic guidance (ideal for scaling products)

**Response times:**
• Critical bugs: Within 4 business hours
• Standard issues: Within 1–2 business days

📞 Discuss a support plan: **07459 253102**`,
    suggestions: ["What is Technical Advisory?", "How much is a retainer?", "What's in a project handover?"],
  },

  // ── TECHNOLOGY ──
  {
    id: "tech_overview", category: "tech",
    patterns: ["tech stack", "technology", "what technologies", "programming languages", "what do you code in", "stack you use", "technical capabilities", "your tools", "technologies used"],
    response: `**Our Technology Stack**

Modern, production-proven technologies chosen for reliability and performance.

**Frontend:**
React · Next.js · Angular · TypeScript · Tailwind CSS · Vite

**Backend:**
Node.js · Express.js · REST APIs · GraphQL

**Database:**
Supabase · PostgreSQL · MongoDB · Redis

**Cloud & DevOps:**
Vercel · Netlify · AWS · Azure · Docker · GitHub Actions

**AI & Automation:**
OpenAI APIs · LangChain · n8n · Custom ML pipelines

**Auth & Payments:**
Supabase Auth · Auth0 · Stripe · PayPal

**Communication:**
EmailJS · Twilio · SendGrid · WebSockets

We choose the **right tool for each project** — not just what we're most comfortable with. Ask about any specific technology!`,
    suggestions: ["Do you use React?", "What AI tools do you use?", "What database do you recommend?"],
  },

  {
    id: "tech_frontend", category: "tech",
    patterns: ["react", "next.js", "nextjs", "angular", "vue", "frontend framework", "javascript framework", "typescript", "tailwind", "css framework", "frontend tech"],
    response: `**Frontend Technologies We Use**

**Primary frameworks:**
• ⚛️ **React** — Our main library for web applications
• 🔺 **Next.js** — For SEO-critical apps needing SSR/SSG
• 🅰️ **Angular** — Enterprise apps with complex state management
• **TypeScript** — Preferred over JavaScript for type safety
• **Tailwind CSS** — Utility-first styling
• **Vite** — Modern, fast build tooling

**When we recommend each:**
• React/Vite → SPAs, dashboards, dynamic web apps
• Next.js → SEO-heavy sites, e-commerce, content platforms
• Angular → Enterprise apps, large team codebases

**What we don't use:**
jQuery, Wix, WordPress (for custom applications)

All frontends are **mobile-first and fully responsive** as standard.`,
    suggestions: ["What backend do you use?", "What about mobile apps?", "What databases do you use?"],
  },

  {
    id: "tech_ai", category: "tech",
    patterns: ["openai", "gpt", "chatgpt", "langchain", "ai tools", "ml tools", "machine learning technology", "ai framework", "ai technology", "n8n", "automation tools"],
    response: `**AI & Automation Technologies**

**AI APIs & Models:**
• 🤖 **OpenAI** — GPT-4o, Embeddings, Whisper, DALL-E
• 🦙 Custom model deployments for data-sensitive projects

**Automation & Orchestration:**
• ⚙️ **n8n** — Open-source workflow automation (our preferred tool)
• 🔗 **LangChain** — LLM application frameworks & RAG pipelines
• 🔄 **Zapier** — Business tool connectivity

**What we build:**
• Intelligent chatbots with knowledge bases (like this one!)
• Automated document processing
• AI-powered search and recommendations
• Multi-step AI agent workflows
• Intelligent data extraction from unstructured sources

**Data & Analytics:**
• Supabase for real-time data
• Custom dashboards with live charts
• Automated reporting pipelines

📞 AI project enquiries: **07459 253102**`,
    suggestions: ["How much does AI integration cost?", "What is workflow automation?", "Can you add AI to my existing system?"],
  },

  // ── CONTACT ──
  {
    id: "contact", category: "contact",
    patterns: ["contact", "reach you", "get in touch", "contact details", "your number", "your email", "reach out", "how to contact", "contact info", "speak to someone"],
    response: `**Contact Saan-hub Solutions**

📞 **Phone:** 07459 253102
📧 **Email:** info@saan-hub.com
📍 **Location:** United Kingdom (Founded in Wales)
⏰ **Hours:** Monday–Friday, 9am–6pm GMT

**Best way to reach us:**
• 🔴 **Urgent** → Call directly: 07459 253102
• 📋 **Project enquiries** → Email with brief description
• 📅 **Consultations** → Call or email to schedule
• 💬 **Quick questions** → This chat!

**Response times:**
• Phone: Immediate (during hours)
• Email: Within 24 hours
• Chat: Instant (automated) / 24hrs (human follow-up)`,
    suggestions: ["Book a free consultation", "What are your office hours?", "How do I start a project?"],
  },

  {
    id: "phone", category: "contact",
    patterns: ["phone number", "telephone", "call you", "your phone", "what's your number", "number to call", "ring you", "call directly"],
    response: `📞 **Our Phone Number: 07459 253102**

Lines are open **Monday–Friday, 9am–6pm GMT**.

**What to expect when you call:**
• You'll speak directly with a member of our team
• No lengthy hold queues
• Initial call is always free
• We can schedule a follow-up consultation if needed

**Prefer not to call?**
📧 Email us: **info@saan-hub.com**
💬 Or continue chatting here!`,
    suggestions: ["What are your office hours?", "Can I email instead?", "Book a consultation"],
  },

  {
    id: "email", category: "contact",
    patterns: ["email address", "email you", "what's your email", "send an email", "email contact", "your email address"],
    response: `📧 **Our Email: info@saan-hub.com**

**When emailing, please include:**
• Brief description of your project or enquiry
• Your name and business (if applicable)
• Preferred contact time

**Response time:** Within **24 business hours**

**For faster responses:**
📞 Call us: **07459 253102**
💬 Or use this chat — we monitor it regularly!`,
    suggestions: ["What's your phone number?", "Book a free consultation", "What services do you offer?"],
  },

  {
    id: "office_hours", category: "contact",
    patterns: ["office hours", "opening hours", "when are you available", "business hours", "what time", "when can i call", "availability", "when do you work", "are you open on weekends"],
    response: `**Office Hours**

🕐 **Monday–Friday:** 9:00am – 6:00pm GMT
🔴 **Saturday–Sunday:** Closed

**Public holidays:** Closed (UK bank holidays)

**Outside hours:**
📧 Email **info@saan-hub.com** — checked on weekend mornings for urgent issues
📞 **07459 253102** — Leave a voicemail and we'll call back first thing next working day

**Existing clients:**
Have access to a dedicated project channel and can message any time — we respond during business hours.`,
    suggestions: ["What's your email?", "What's your phone number?", "Book a consultation"],
  },

  {
    id: "urgent", category: "contact",
    patterns: ["urgent", "emergency", "asap", "as soon as possible", "need help now", "immediately", "quickly", "rush", "critical", "down", "broken", "site is down", "system down"],
    response: `🚨 **Urgent? Here's how to reach us immediately:**

📞 **Call directly: 07459 253102**
*(Fastest option — speak to someone right now)*

📧 **Email: info@saan-hub.com**
*(Mark subject: URGENT — checked frequently)*

**For existing clients:**
Message your dedicated project channel directly.

**For system outages or critical bugs:**
Clients on a maintenance retainer have a 4-hour response SLA.

We take urgent situations seriously — you'll speak to a real person.`,
    suggestions: ["What support plans do you offer?", "How do I get ongoing support?", "What are your office hours?"],
  },

  // ── INDUSTRY / FAQ ──
  {
    id: "industries", category: "company",
    patterns: ["industries", "sectors", "what industries", "who do you work with", "types of clients", "enterprise", "sme", "ngo", "charity", "healthcare", "fintech", "edtech", "proptech", "who are your clients"],
    response: `**Industries & Client Types We Serve**

**By Sector:**
• 🏠 **PropTech** — Property platforms & rental marketplaces
• 🏥 **HealthTech** — Health & wellness applications
• 🎓 **EdTech** — Learning management & education platforms
• 💰 **FinTech** — Payments, budgeting, financial tools
• 🛡 **SafetyTech** — Emergency response & safety systems
• 🚌 **TransportTech** — Fare tracking, route optimisation
• 🎭 **Culture & Community** — Community engagement platforms
• 🏢 **Enterprise** — Internal tools, automation, dashboards

**By Client Stage:**
• 🌱 **Pre-seed founders** — Idea to MVP
• 🚀 **Seed/Series A startups** — MVP to scalable product
• 📈 **Growing SMEs** — Digital transformation & automation
• 🏛 **Established organisations** — Modernisation & new products

No project is too early or too ambitious.

📞 Discuss your sector: **07459 253102**`,
    suggestions: ["Can you work with non-profits?", "Do you work internationally?", "What is the minimum project size?"],
  },

  {
    id: "gdpr_security", category: "company",
    patterns: ["gdpr", "data protection", "privacy", "security", "compliance", "data security", "is my data safe", "data handling", "confidentiality", "nda", "non disclosure"],
    response: `**Data Protection, Security & Confidentiality**

**GDPR Compliance:**
• All projects developed with GDPR principles by design
• Advice on data minimisation, lawful basis, and user rights
• Privacy policies and cookie notices included where required

**Security Standards:**
• 🔐 Secure coding practices (OWASP top 10)
• 🔑 Secure authentication (hashed passwords, JWT, OAuth)
• 🛡 HTTPS enforced on all deployments
• 🔒 Environment variables for all secrets (never hardcoded)
• 📦 Regular dependency security audits

**Confidentiality:**
• Happy to sign an **NDA** before discussions begin
• Client code and business data kept strictly confidential
• Never shared with third parties without consent

**Your IP:**
You own 100% of the code and IP we build for you upon full payment.

📞 Security queries: **07459 253102**`,
    suggestions: ["Who owns the code you build?", "Do you sign NDAs?", "What about ongoing security updates?"],
  },

  {
    id: "ip_ownership", category: "company",
    patterns: ["who owns the code", "intellectual property", "code ownership", "ip rights", "do i own", "copyright", "source code ownership", "can i take my code"],
    response: `**Intellectual Property & Code Ownership**

**Simple answer: You own everything we build for you.**

Upon full payment completion:
• 100% of source code is transferred to you
• All design assets belong to you
• Database schemas and data structures are yours
• All third-party accounts set up in your name

**What we provide at handover:**
• Full source code repository (GitHub or your preferred platform)
• Deployment credentials and server access
• Documentation for key systems
• API keys and service configurations

**We retain:**
• The right to list the project in our portfolio (with your permission)
• No ongoing claims on the code or product

📞 IP questions: **07459 253102**`,
    suggestions: ["What are your payment terms?", "What happens at project handover?", "Do you sign NDAs?"],
  },

  {
    id: "remote_work", category: "company",
    patterns: ["remote", "can you work remotely", "do i need to be in cardiff", "work from anywhere", "international clients", "overseas", "global", "outside uk", "do you travel", "in person"],
    response: `**Remote Work & International Clients**

**Yes — we work fully remotely!** 🌍

**How remote projects work:**
• Video calls (Google Meet, Zoom, Teams)
• Shared project workspace (Notion, GitHub)
• Regular written progress updates
• Staging environment access throughout
• Async communication friendly

**International clients:**
• We work with clients across the UK, Europe, and globally
• Time zone differences managed with async communication
• Payments accepted internationally

**In-person meetings:**
UK-based clients can arrange in-person sessions for kick-offs, workshops, or key reviews.

📞 Wherever you are: **07459 253102**`,
    suggestions: ["What communication tools do you use?", "What time zone are you in?", "How do I start a remote project?"],
  },

  {
    id: "minimum_project", category: "pricing",
    patterns: ["minimum project", "smallest project", "small budget", "limited budget", "can i afford", "low budget", "tight budget", "cheap", "not much money", "can a startup afford", "very small project"],
    response: `**Small Budget? No Problem.**

We work with clients at all budget levels.

**Starting from as little as £50:**
• Strategy Session (£50–£120) — The perfect starting point
• MVP Blueprint (£150–£600) — Get a clear technical plan

**For lean startups:**
• We scope to your budget — build only essential features
• Phased development — launch phase 1, add features later
• Honest advice if something isn't worth building yet

**Free option:**
• Book a **free discovery call** — expert advice at zero cost
• We'll tell you honestly what's realistic for your budget

**Our philosophy:**
We'd rather scope a smaller, focused project that succeeds than a large one that overruns budget.

📞 Let's talk budget: **07459 253102**`,
    suggestions: ["What is the free consultation?", "What is a strategy session?", "What's a phase-1 MVP?"],
  },

  {
    id: "testimonials", category: "company",
    patterns: ["reviews", "testimonials", "clients say", "feedback", "references", "satisfied", "happy customers", "case studies", "success stories", "what do people say", "client testimonials"],
    response: `**What Our Clients Say**

⭐⭐⭐⭐⭐
*"Saan-hub Solutions transformed our operations. The team understood our needs and delivered beyond expectations — on time and within budget."*
— **Safe Online Space Cymru, CEO**

⭐⭐⭐⭐⭐
*"Their consulting helped us improve operational efficiency by 40%. Highly recommended for any startup serious about technology."*
— **OTID Entertainment, CTO**

⭐⭐⭐⭐⭐
*"From MVP concept to full product launch, Saan-hub were professional, reliable, and results-driven throughout."*
— **SmartMealSaver, Founder**

⭐⭐⭐⭐⭐
*"They don't just write code — they think about your business. That's rare and incredibly valuable."*
— **FinTech Client**

📞 Want to be our next success story? **07459 253102**`,
    suggestions: ["How do I get started?", "What is a free consultation?", "What services do you offer?"],
  },

  {
    id: "hiring_freelance", category: "company",
    patterns: ["hire", "job", "career", "work for you", "join your team", "freelance", "contractor", "internship", "work with you", "collaboration", "partnership", "become a partner"],
    response: `**Working With & For Saan-hub Solutions**

**Freelance / Contracting:**
We occasionally bring in specialist contractors for client projects. If you're an experienced developer, designer, or AI engineer:
📧 **info@saan-hub.com** — Subject: "Freelance Partnership — [Your Skill]"

**Technology Partnerships:**
We're open to partnerships with agencies, consultancies, and technology providers who can add value for our clients.

**Referral Programme:**
If you refer a client to us and the project completes, we offer a referral fee. Contact us for details.

**Internships:**
We occasionally take on paid interns from UK universities. Email with your course and availability.

📞 Partnership enquiries: **07459 253102**`,
    suggestions: ["What technologies do you specialise in?", "How do I contact you?", "What services do you offer?"],
  },

  // ── GENERAL ──
  {
    id: "thanks", category: "general",
    patterns: ["thank you", "thanks", "cheers", "thank you so much", "that helped", "appreciated", "helpful", "great", "awesome", "perfect", "brilliant", "nice", "wonderful"],
    response: `You're very welcome! 😊

Is there anything else I can help you with?

If you're ready to take the next step:
📞 **Call us: 07459 253102**
📧 **Email: info@saan-hub.com**
🎁 Or book a **free strategy session** — no obligation!

We'd love to hear about your project.`,
    suggestions: ["Book a free consultation", "What services do you offer?", "What's your pricing?"],
  },

  {
    id: "bye", category: "general",
    patterns: ["bye", "goodbye", "see you", "later", "take care", "cya", "that's all", "no thanks", "i'm done", "farewell", "ttyl"],
    response: `Thanks for chatting with us! 👋

If you ever want to discuss a project or have more questions:

📞 **07459 253102**
📧 **info@saan-hub.com**
🌐 Browse the website to explore our services and products

**Have a brilliant day!** 🌟`,
    suggestions: ["Contact us", "Our services", "Our products"],
  },
];

// ─── Scoring Engine ───────────────────────────────────────────────────────────
export function getBotResponse(userMessage) {
  const lower = userMessage.toLowerCase().trim();
  let bestMatch = null;
  let bestScore = 0;

  for (const intent of KB) {
    let score = 0;
    for (const pattern of intent.patterns) {
      if (lower.includes(pattern)) {
        // Longer patterns are more specific — weight them higher
        score += pattern.split(" ").length * 2;
      }
    }
    // Exact single-word boundary bonus
    const words = lower.split(/\s+/);
    for (const pattern of intent.patterns) {
      if (words.includes(pattern)) score += 1;
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = intent;
    }
  }

  if (bestScore > 0 && bestMatch) {
    return { response: bestMatch.response, suggestions: bestMatch.suggestions || [] };
  }

  return {
    response: `I'm sorry, I don't have specific information about that right now. 🤔

For a personalised answer from our expert team:

📞 **Call us: 07459 253102**
📧 **Email: info@saan-hub.com**
⏰ Mon–Fri, 9am–6pm GMT

Our team typically responds to emails within 24 hours. Calling is the fastest way to get help!`,
    suggestions: ["What services do you offer?", "How much does it cost?", "Book a free consultation"],
  };
}

export default KB;
