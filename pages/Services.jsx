import React from "react";
import "../styles/Services.css";
import { Link } from "react-router-dom";
import CommonBanner from "./CommonBanner";

export const services = [
  {
    _id: "6accb99aa6d948c7dca12813",
    title: "Web Development",
    subtitle: "Websites That Work for Your Business",
    description:
      "We build responsive websites and web applications with reliable frontend, backend, API and database integration.",
    icon: "fa-solid fa-code",
    capabilityTitle: "Custom Development",
    expertiseTitles: [
      "Web Application Development",
      "API Development & Integration",
      "Database Solutions",
    ],
    overviewTitle: "Digital Experiences Built Around Your Goals",
    overviewDescription:
      "From business websites to interactive web applications, we create reliable digital experiences focused on usability, performance and maintainability.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    expertise: [
      {
        title: "Frontend Development",
        description:
          "Responsive and interactive user interfaces for different devices.",
        icon: "fa-solid fa-display",
      },
      {
        title: "Backend & API Development",
        description: "Reliable server-side functionality and API integrations.",
        icon: "fa-solid fa-server",
      },
      {
        title: "Database Integration",
        description: "Structured data storage and management for applications.",
        icon: "fa-solid fa-database",
      },
    ],
    technologies: [
      { name: "HTML5", icon: "fa-brands fa-html5" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt" },
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "React", icon: "fa-brands fa-react" },
      { name: "Node.js", icon: "fa-brands fa-node-js" },
      { name: "MongoDB", icon: "fa-solid fa-database" },
    ],
    process: [
      {
        title: "Discover",
        description: "Understand business goals and requirements.",
      },
      {
        title: "Plan & Design",
        description: "Plan the website structure and user experience.",
      },
      {
        title: "Develop",
        description: "Build responsive pages, APIs and application features.",
      },
      {
        title: "Test & Launch",
        description: "Validate functionality and prepare deployment.",
      },
    ],
    focusPoints: [
      {
        title: "Responsive Design",
        description: "Experiences adapted to mobile, tablet and desktop.",
      },
      {
        title: "Performance",
        description: "Efficient pages and smooth website interactions.",
      },
      {
        title: "Scalability",
        description: "Maintainable architecture for future growth.",
      },
    ],
    ctaHeading: "Ready to Build Your Website?",
    ctaDescription:
      "Tell us about your project and let's discuss the right web solution for your business.",
  },
  {
    _id: "6accb99aa6d948c7dca12814",
    title: "Mobile App Development",
    subtitle: "Mobile Experiences for Modern Businesses",
    description:
      "We develop user-friendly mobile applications that connect businesses with customers through convenient digital experiences.",
    icon: "fa-solid fa-mobile-screen-button",
    capabilityTitle: "Custom Development",
    expertiseTitles: [],
    overviewTitle: "Bring Your Business to Mobile",
    overviewDescription:
      "We build mobile applications with intuitive interfaces, dependable functionality and integration with business systems.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    expertise: [
      {
        title: "Mobile Interface Development",
        description: "Create intuitive screens and mobile navigation.",
        icon: "fa-solid fa-mobile-screen",
      },
      {
        title: "API Integration",
        description:
          "Connect applications with backend services and business data.",
        icon: "fa-solid fa-plug",
      },
      {
        title: "Mobile Testing",
        description: "Validate functionality and device compatibility.",
        icon: "fa-solid fa-vial",
      },
    ],
    technologies: [
      { name: "React Native", icon: "fa-brands fa-react" },
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "Node.js", icon: "fa-brands fa-node-js" },
      { name: "REST APIs", icon: "fa-solid fa-plug" },
    ],
    process: [
      {
        title: "Discover",
        description: "Identify users, goals and essential app features.",
      },
      {
        title: "Design",
        description: "Plan mobile screens and user journeys.",
      },
      {
        title: "Develop",
        description: "Implement features and connect backend services.",
      },
      {
        title: "Test & Release",
        description: "Validate functionality and prepare deployment.",
      },
    ],
    focusPoints: [
      {
        title: "User Experience",
        description: "Simple navigation and intuitive interactions.",
      },
      {
        title: "Compatibility",
        description: "Consider supported devices and screen sizes.",
      },
      {
        title: "Integration",
        description: "Connect the app to required services and systems.",
      },
    ],
    ctaHeading: "Have a Mobile App Idea?",
    ctaDescription:
      "Let's discuss your requirements and plan a mobile experience for your business.",
  },
  {
    _id: "6accb99aa6d948c7dca12815",
    title: "Custom Software Development",
    subtitle: "Software Designed Around Your Workflow",
    description:
      "We build tailored software that simplifies business processes, connects systems and supports operational needs.",
    icon: "fa-solid fa-laptop-code",
    capabilityTitle: "Custom Development",
    expertiseTitles: ["Custom Software Solutions"],
    overviewTitle: "Software That Fits the Way You Work",
    overviewDescription:
      "Custom software brings business workflows, data and operations together in a solution designed around your requirements.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    expertise: [
      {
        title: "Business Applications",
        description: "Applications tailored to specific business tasks.",
        icon: "fa-solid fa-window-maximize",
      },
      {
        title: "System Integration",
        description:
          "Connect existing tools and services into unified workflows.",
        icon: "fa-solid fa-diagram-project",
      },
      {
        title: "Database Solutions",
        description:
          "Organize application data for reliable access and management.",
        icon: "fa-solid fa-database",
      },
    ],
    technologies: [
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "React", icon: "fa-brands fa-react" },
      { name: "Node.js", icon: "fa-brands fa-node-js" },
      { name: "Express.js", icon: "fa-solid fa-server" },
      { name: "MongoDB", icon: "fa-solid fa-database" },
    ],
    process: [
      {
        title: "Analyze",
        description: "Understand workflows and business requirements.",
      },
      {
        title: "Plan",
        description: "Define features, architecture and integrations.",
      },
      {
        title: "Build",
        description: "Develop the agreed software functionality.",
      },
      {
        title: "Validate",
        description: "Test workflows and refine the solution.",
      },
    ],
    focusPoints: [
      {
        title: "Tailored Features",
        description: "Functionality aligned with business needs.",
      },
      {
        title: "Integration",
        description: "Connect applications and existing systems.",
      },
      {
        title: "Maintainability",
        description: "A structured foundation for future changes.",
      },
    ],
    ctaHeading: "Need Software Built for Your Business?",
    ctaDescription:
      "Share your workflow challenges and let's explore a custom solution.",
  },
  {
    _id: "6accb99aa6d948c7dca12816",
    title: "UI/UX Design",
    subtitle: "Simple, Clear and User-Friendly Experiences",
    description:
      "We design intuitive interfaces and user journeys that make websites and applications easier to understand and use.",
    icon: "fa-solid fa-pen-ruler",
    capabilityTitle: "Custom Development",
    expertiseTitles: [],
    overviewTitle: "Design That Puts Users First",
    overviewDescription:
      "We combine visual hierarchy, intuitive navigation and thoughtful user flows to improve digital experiences.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
    expertise: [
      {
        title: "User Flow Design",
        description: "Organize user journeys around real tasks.",
        icon: "fa-solid fa-route",
      },
      {
        title: "Interface Design",
        description: "Create consistent layouts and visual styles.",
        icon: "fa-solid fa-pen-ruler",
      },
      {
        title: "Responsive Design",
        description: "Adapt interfaces to different screen sizes.",
        icon: "fa-solid fa-tablet-screen-button",
      },
    ],
    technologies: [
      { name: "Figma", icon: "fa-brands fa-figma" },
      { name: "HTML5", icon: "fa-brands fa-html5" },
      { name: "CSS3", icon: "fa-brands fa-css3-alt" },
      { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
    ],
    process: [
      {
        title: "Understand",
        description: "Identify users, goals and usability challenges.",
      },
      {
        title: "Structure",
        description: "Plan navigation, page layouts and user journeys.",
      },
      {
        title: "Design",
        description: "Create interface designs and reusable components.",
      },
      {
        title: "Refine",
        description: "Review and improve usability and clarity.",
      },
    ],
    focusPoints: [
      {
        title: "Usability",
        description: "Make tasks easier to understand and complete.",
      },
      {
        title: "Consistency",
        description: "Maintain a cohesive visual language.",
      },
      {
        title: "Accessibility",
        description: "Consider readable content and clear controls.",
      },
    ],
    ctaHeading: "Let's Improve Your Digital Experience",
    ctaDescription:
      "Tell us about your website or app and let's create a more intuitive experience.",
  },
  {
    _id: "6accb99aa6d948c7dca12817",
    title: "E-Commerce Development",
    subtitle: "Online Stores Built for Better Shopping",
    description:
      "We build online shopping experiences with product catalogs, carts, checkout and order management.",
    icon: "fa-solid fa-cart-shopping",
    capabilityTitle: "Custom Development",
    expertiseTitles: [],
    overviewTitle: "Turn Your Products into an Online Experience",
    overviewDescription:
      "We develop online stores that present products clearly, simplify purchasing and support store operations.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    expertise: [
      {
        title: "Product Catalogs",
        description: "Organize products, categories and pricing.",
        icon: "fa-solid fa-box-open",
      },
      {
        title: "Cart & Checkout",
        description: "Create straightforward shopping and checkout flows.",
        icon: "fa-solid fa-cart-shopping",
      },
      {
        title: "Order Management",
        description: "Support order tracking and administration.",
        icon: "fa-solid fa-truck-fast",
      },
    ],
    technologies: [
      { name: "React", icon: "fa-brands fa-react" },
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "Node.js", icon: "fa-brands fa-node-js" },
      { name: "REST APIs", icon: "fa-solid fa-plug" },
      { name: "MongoDB", icon: "fa-solid fa-database" },
    ],
    process: [
      {
        title: "Plan",
        description:
          "Define products, customer journeys and store requirements.",
      },
      {
        title: "Design",
        description: "Structure product pages, cart and checkout.",
      },
      {
        title: "Develop",
        description: "Build store features and integrations.",
      },
      {
        title: "Test & Launch",
        description: "Validate shopping flows before launch.",
      },
    ],
    focusPoints: [
      {
        title: "Shopping Experience",
        description: "Clear product information and navigation.",
      },
      {
        title: "Checkout Flow",
        description: "A simple and understandable purchasing journey.",
      },
      {
        title: "Store Management",
        description: "Support product and order workflows.",
      },
    ],
    ctaHeading: "Ready to Launch Your Online Store?",
    ctaDescription:
      "Let's plan an e-commerce solution for your products and customers.",
  },
  {
    _id: "6accb99aa6d948c7dca12818",
    title: "Technology Consulting",
    subtitle: "Make Confident Technology Decisions",
    description:
      "We help businesses evaluate requirements, select suitable technologies and plan practical digital solutions.",
    icon: "fa-solid fa-compass",
    capabilityTitle: "Strategy & Planning",
    expertiseTitles: [
      "Business & Requirement Analysis",
      "Technology Consulting",
      "Project Planning",
      "Solution Architecture",
    ],
    overviewTitle: "A Clear Technology Roadmap for Your Business",
    overviewDescription:
      "We help identify business needs and evaluate technology approaches before implementation begins.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    expertise: [
      {
        title: "Business Analysis",
        description: "Understand business goals, challenges and requirements.",
        icon: "fa-solid fa-magnifying-glass-chart",
      },
      {
        title: "Technology Selection",
        description: "Evaluate suitable platforms and technical approaches.",
        icon: "fa-solid fa-compass",
      },
      {
        title: "Solution Architecture",
        description: "Plan application components, integrations and data flow.",
        icon: "fa-solid fa-diagram-project",
      },
    ],
    technologies: [
      { name: "Web Technologies", icon: "fa-solid fa-globe" },
      { name: "Cloud Platforms", icon: "fa-solid fa-cloud" },
      { name: "REST APIs", icon: "fa-solid fa-plug" },
      { name: "Databases", icon: "fa-solid fa-database" },
    ],
    process: [
      {
        title: "Assess",
        description: "Review systems, objectives and constraints.",
      },
      {
        title: "Analyze",
        description: "Identify gaps and suitable technology options.",
      },
      {
        title: "Plan",
        description: "Define priorities, architecture and milestones.",
      },
      {
        title: "Guide",
        description: "Support implementation decisions and progress reviews.",
      },
    ],
    focusPoints: [
      {
        title: "Clear Requirements",
        description: "Align technology decisions with business needs.",
      },
      {
        title: "Practical Planning",
        description: "Prioritize achievable steps and outcomes.",
      },
      {
        title: "Long-Term Fit",
        description: "Consider maintenance, integration and future growth.",
      },
    ],
    ctaHeading: "Need Help Planning Your Next Project?",
    ctaDescription:
      "Let's discuss your goals and identify the right technology approach.",
  },
  {
    _id: "6accb99aa6d948c7dca12819",
    title: "Cloud Solutions & DevOps",
    subtitle: "Reliable Infrastructure for Growing Applications",
    description:
      "We help deploy applications, improve delivery workflows and plan flexible cloud infrastructure.",
    icon: "fa-solid fa-cloud",
    capabilityTitle: "Digital Transformation",
    expertiseTitles: ["Cloud Solutions", "Digital Optimization"],
    overviewTitle: "Build and Deliver with Confidence",
    overviewDescription:
      "Cloud and DevOps practices can improve deployment consistency, infrastructure flexibility and operational visibility.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    expertise: [
      {
        title: "Cloud Deployment",
        description: "Deploy applications to suitable hosting environments.",
        icon: "fa-solid fa-cloud-arrow-up",
      },
      {
        title: "CI/CD Workflows",
        description: "Streamline build, testing and deployment steps.",
        icon: "fa-solid fa-arrows-rotate",
      },
      {
        title: "Monitoring",
        description: "Track application health and operational issues.",
        icon: "fa-solid fa-chart-line",
      },
    ],
    technologies: [
      { name: "Docker", icon: "fa-brands fa-docker" },
      { name: "Git", icon: "fa-brands fa-git-alt" },
      { name: "GitHub Actions", icon: "fa-brands fa-github" },
      { name: "Linux", icon: "fa-brands fa-linux" },
      { name: "Cloud Platforms", icon: "fa-solid fa-cloud" },
    ],
    process: [
      {
        title: "Assess",
        description: "Review application and hosting requirements.",
      },
      {
        title: "Configure",
        description: "Prepare infrastructure and environment settings.",
      },
      {
        title: "Automate",
        description: "Improve repeatable build and release workflows.",
      },
      {
        title: "Monitor",
        description: "Review application health and refine operations.",
      },
    ],
    focusPoints: [
      {
        title: "Reliable Deployments",
        description: "Make releases more consistent.",
      },
      {
        title: "Flexible Infrastructure",
        description: "Plan hosting around application needs.",
      },
      {
        title: "Operational Visibility",
        description: "Identify issues through appropriate monitoring.",
      },
    ],
    ctaHeading: "Planning a Cloud or Deployment Upgrade?",
    ctaDescription:
      "Let's review your infrastructure and identify practical improvements.",
  },
  {
    _id: "6accb99aa6d948c7dca1281a",
    title: "AI & Data Solutions",
    subtitle: "Turn Data into Useful Insights",
    description:
      "We help businesses organize data, automate selected workflows and explore practical AI-powered solutions.",
    icon: "fa-solid fa-brain",
    capabilityTitle: "Digital Transformation",
    expertiseTitles: ["Process Automation", "System Modernization"],
    overviewTitle: "Make Better Use of Your Data",
    overviewDescription:
      "Data analysis and suitable AI solutions can help teams identify patterns, reduce repetitive work and support informed decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    expertise: [
      {
        title: "Data Analysis",
        description: "Examine data to identify useful patterns and trends.",
        icon: "fa-solid fa-chart-column",
      },
      {
        title: "Workflow Automation",
        description:
          "Identify repetitive tasks that may benefit from automation.",
        icon: "fa-solid fa-gears",
      },
      {
        title: "AI Integration",
        description: "Integrate appropriate AI capabilities into applications.",
        icon: "fa-solid fa-brain",
      },
    ],
    technologies: [
      { name: "Python", icon: "fa-brands fa-python" },
      { name: "REST APIs", icon: "fa-solid fa-plug" },
      { name: "Databases", icon: "fa-solid fa-database" },
      { name: "Data Visualization", icon: "fa-solid fa-chart-line" },
    ],
    process: [
      {
        title: "Identify",
        description: "Define the business problem and intended outcome.",
      },
      {
        title: "Prepare",
        description: "Review data quality and integration requirements.",
      },
      {
        title: "Develop",
        description: "Build the selected analysis or automation features.",
      },
      {
        title: "Evaluate",
        description: "Validate results and refine the solution.",
      },
    ],
    focusPoints: [
      {
        title: "Business Relevance",
        description:
          "Focus on problems where data can provide practical value.",
      },
      {
        title: "Data Quality",
        description: "Consider accuracy and completeness of available data.",
      },
      {
        title: "Responsible Use",
        description: "Consider privacy, reliability and human oversight.",
      },
    ],
    ctaHeading: "Explore AI and Data for Your Business",
    ctaDescription:
      "Tell us about your business challenge and let's explore a practical solution.",
  },
  {
    _id: "6accb99aa6d948c7dca1281b",
    title: "Software Testing & QA",
    subtitle: "Quality and Reliability at Every Stage",
    description:
      "We test software functionality, usability and compatibility to identify issues and improve product reliability.",
    icon: "fa-solid fa-vial",
    capabilityTitle: "Support & Maintenance",
    expertiseTitles: ["Bug Fixes & Improvements"],
    overviewTitle: "Deliver Software You Can Depend On",
    overviewDescription:
      "Structured quality assurance helps detect defects, validate requirements and reduce the risk of issues reaching users.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    expertise: [
      {
        title: "Functional Testing",
        description: "Verify that features behave according to requirements.",
        icon: "fa-solid fa-list-check",
      },
      {
        title: "API Testing",
        description: "Validate API responses and error scenarios.",
        icon: "fa-solid fa-plug",
      },
      {
        title: "Regression Testing",
        description: "Recheck existing functionality after changes.",
        icon: "fa-solid fa-rotate",
      },
    ],
    technologies: [
      { name: "Postman", icon: "fa-solid fa-paper-plane" },
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "Browser DevTools", icon: "fa-solid fa-window-maximize" },
      { name: "Git", icon: "fa-brands fa-git-alt" },
    ],
    process: [
      {
        title: "Review Requirements",
        description: "Identify expected behavior and important user journeys.",
      },
      {
        title: "Plan Tests",
        description: "Prepare test scenarios and suitable test data.",
      },
      {
        title: "Execute Tests",
        description: "Check features, integrations and edge cases.",
      },
      {
        title: "Report & Retest",
        description: "Document issues and verify fixes.",
      },
    ],
    focusPoints: [
      {
        title: "Functional Accuracy",
        description: "Validate features against expected behavior.",
      },
      {
        title: "Issue Detection",
        description: "Identify defects and report clear findings.",
      },
      {
        title: "Regression Coverage",
        description: "Recheck important workflows after updates.",
      },
    ],
    ctaHeading: "Improve the Quality of Your Software",
    ctaDescription:
      "Let's discuss your testing needs and quality assurance requirements.",
  },
  {
    _id: "6accb99aa6d948c7dca1281c",
    title: "Cybersecurity",
    subtitle: "Protect Applications and Business Data",
    description:
      "We help identify common application security risks and improve security practices across digital systems.",
    icon: "fa-solid fa-shield-halved",
    capabilityTitle: "Support & Maintenance",
    expertiseTitles: ["Security Updates"],
    overviewTitle: "Make Security Part of Your Digital Foundation",
    overviewDescription:
      "Security reviews and ongoing improvements can help reduce common risks and protect sensitive business information.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    expertise: [
      {
        title: "Security Reviews",
        description:
          "Review application configurations and common security weaknesses.",
        icon: "fa-solid fa-magnifying-glass",
      },
      {
        title: "Access Control",
        description: "Review authentication, authorization and permissions.",
        icon: "fa-solid fa-user-shield",
      },
      {
        title: "Security Improvements",
        description: "Prioritize fixes for identified security issues.",
        icon: "fa-solid fa-shield-halved",
      },
    ],
    technologies: [
      { name: "HTTPS & TLS", icon: "fa-solid fa-lock" },
      { name: "JWT", icon: "fa-solid fa-key" },
      { name: "OWASP Guidance", icon: "fa-solid fa-shield-halved" },
      { name: "Git", icon: "fa-brands fa-git-alt" },
    ],
    process: [
      {
        title: "Assess",
        description:
          "Understand the application and its security requirements.",
      },
      {
        title: "Review",
        description: "Check access controls and common weaknesses.",
      },
      {
        title: "Prioritize",
        description: "Organize findings by risk and impact.",
      },
      {
        title: "Improve",
        description: "Apply appropriate fixes and review the results.",
      },
    ],
    focusPoints: [
      {
        title: "Access Protection",
        description:
          "Use appropriate authentication and authorization controls.",
      },
      {
        title: "Data Protection",
        description: "Handle sensitive information carefully.",
      },
      {
        title: "Security Updates",
        description: "Review dependencies and address relevant issues.",
      },
    ],
    ctaHeading: "Let's Strengthen Your Application Security",
    ctaDescription:
      "Discuss your security concerns and identify sensible next steps.",
  },
  {
    _id: "6accb99aa6d948c7dca1281d",
    title: "Website Maintenance & Support",
    subtitle: "Keep Your Website Running Smoothly",
    description:
      "We maintain websites through bug fixes, updates, performance improvements and ongoing technical support.",
    icon: "fa-solid fa-screwdriver-wrench",
    capabilityTitle: "Support & Maintenance",
    expertiseTitles: ["Technical Support", "Performance Monitoring"],
    overviewTitle: "Reliable Support Beyond Launch",
    overviewDescription:
      "Ongoing maintenance helps websites remain stable, usable and up to date as content, dependencies and business requirements change.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    expertise: [
      {
        title: "Technical Support",
        description: "Investigate and resolve website issues.",
        icon: "fa-solid fa-headset",
      },
      {
        title: "Updates & Improvements",
        description: "Maintain dependencies and improve existing features.",
        icon: "fa-solid fa-arrows-rotate",
      },
      {
        title: "Performance Monitoring",
        description:
          "Review website responsiveness and optimization opportunities.",
        icon: "fa-solid fa-gauge-high",
      },
    ],
    technologies: [
      { name: "JavaScript", icon: "fa-brands fa-js" },
      { name: "React", icon: "fa-brands fa-react" },
      { name: "Node.js", icon: "fa-brands fa-node-js" },
      { name: "Git", icon: "fa-brands fa-git-alt" },
      { name: "Databases", icon: "fa-solid fa-database" },
    ],
    process: [
      {
        title: "Review",
        description: "Understand the website and identify reported issues.",
      },
      {
        title: "Prioritize",
        description: "Organize fixes and updates by impact.",
      },
      {
        title: "Maintain",
        description: "Implement corrections and agreed improvements.",
      },
      {
        title: "Verify",
        description: "Test changes and confirm important workflows.",
      },
    ],
    focusPoints: [
      {
        title: "Stability",
        description: "Address issues affecting essential functionality.",
      },
      {
        title: "Performance",
        description:
          "Identify slow interactions and optimization opportunities.",
      },
      {
        title: "Ongoing Improvements",
        description: "Keep the website aligned with changing business needs.",
      },
    ],
    ctaHeading: "Need Ongoing Website Support?",
    ctaDescription:
      "Let's discuss your website and the maintenance support that would help.",
  },
];

const Services = () => {
  return (
    <>
      <CommonBanner title="Services" />

      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
            <span className="services-section-label">WHAT WE DO</span>
            <h2>
              Services We
              <span> Provide</span>
            </h2>
            <p>
              We provide professional IT and digital solutions that help
              businesses grow, improve efficiency and build reliable digital
              experiences.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service._id}>
                <span className="service-card-line"></span>

                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <Link
                  to={`/servicedetails/${service._id}`}
                  className="service-button"
                >
                  Read More
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;