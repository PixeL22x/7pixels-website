import { useTheme } from "@/contexts/ThemeContext";

export const translations = {
  es: {
    // Hero Section
    heroTag: "🚀 Agencia #1 en Marketing Digital",
    heroTitle: "7Pixels",
    heroSubtitle: "Expertos en",
    heroTypewriter: [
      "Marketing Digital",
      "Estrategias SEO",
      "Redes Sociales", 
      "Publicidad Online",
      "Branding Digital"
    ],
    heroDescription: "Transformamos tu presencia digital en",
    heroHighlight: "resultados extraordinarios",
    heroFullDescription: "Somos una agencia de marketing digital especializada en hacer crecer tu negocio. Combinamos estrategia, creatividad y tecnología para impulsar tu marca hacia el éxito.",
    heroCta1: "🚀 Comenzar Proyecto",
    heroCta2: "✨ Ver Portfolio",

    // Stats Section
    statsTitle: "Resultados que Hablan por Sí Solos",
    statsDescription: "Nuestros números reflejan nuestro compromiso con la excelencia",
    statsProjects: "Proyectos Completados",
    statsSatisfaction: "Clientes Satisfechos", 
    statsROI: "ROI Promedio",
    statsSupport: "Soporte Disponible",

    // Services Section
    servicesTag: "🎯 Nuestros Servicios",
    servicesTitle: "Soluciones que",
    servicesHighlight: "Transforman",
    servicesDescription: "Cada servicio está diseñado para impulsar tu negocio hacia el siguiente nivel",
    servicesCta: "💡 Consulta Gratuita",
    
    // Service Items
    serviceSocial: "Marketing en Redes Sociales",
    serviceSocialDesc: "Estrategias que conectan tu marca con millones de usuarios activos en todas las plataformas.",
    serviceSEO: "SEO & Google Ads",
    serviceSEODesc: "Dominamos los algoritmos para posicionar tu marca en los primeros resultados de búsqueda.",
    serviceDesign: "Creative Design",
    serviceDesignDesc: "Diseños que capturan la esencia de tu marca y la transforman en experiencias memorables.",
    serviceAutomation: "Marketing Automation",
    serviceAutomationDesc: "Sistemas inteligentes que nutren leads y convierten prospects en clientes leales.",
    serviceWeb: "Web Development",
    serviceWebDesc: "Sitios web que no solo se ven increíbles, sino que convierten visitantes en ventas.",
    serviceAnalytics: "Data Analytics",
    serviceAnalyticsDesc: "Insights profundos que revelan oportunidades ocultas y optimizan cada inversión.",
    
    // Service Features
    serviceFeatureContent: "Content Strategy",
    serviceFeatureCommunity: "Community Management",
    serviceFeatureInfluencer: "Influencer Marketing",
    serviceFeaturePaid: "Paid Advertising",
    serviceFeatureTechnical: "Technical SEO",
    serviceFeatureKeyword: "Keyword Research",
    serviceFeaturePPC: "PPC Campaigns",
    serviceFeatureAnalytics: "Analytics & Reporting",
    serviceFeatureBrand: "Brand Identity",
    serviceFeatureUI: "UI/UX Design",
    serviceFeatureMotion: "Motion Graphics",
    serviceFeaturePrint: "Print & Digital",
    serviceFeatureEmail: "Email Workflows",
    serviceFeatureLead: "Lead Scoring",
    serviceFeatureCRM: "CRM Integration",
    serviceFeatureBehavioral: "Behavioral Triggers",
    serviceFeatureReact: "React/Next.js",
    serviceFeatureEcommerce: "E-commerce",
    serviceFeaturePWA: "PWA",
    serviceFeaturePerformance: "Performance Optimization",
    serviceFeatureAdvanced: "Advanced Analytics",
    serviceFeatureDashboards: "Custom Dashboards",
    serviceFeatureConversion: "Conversion Optimization",
    serviceFeatureROI: "ROI Tracking",

    // Testimonials
    testimonialsTag: "💬 Testimonios",
    testimonialsTitle: "Resultados que",
    testimonialsHighlight: "Hablan",
    testimonialsDescription: "Nuestros clientes son nuestra mejor carta de presentación",

    // Contact Section
    contactTitle: "¿Listo para Hacer Crecer tu Negocio?",
    contactDescription: "Conversemos sobre cómo podemos llevar tu marca al siguiente nivel. ¡Tu éxito digital comienza con una simple conversación!",
    contactFormTitle: "Solicita tu Consulta Gratuita",
    contactCta: "🚀 Comenzar Mi Proyecto",
    contactEmail: "Email",
    contactPhone: "Teléfono", 
    contactOffice: "Oficina",
    contactSchedule: "Lun - Vie: 9AM - 6PM",
    contactSocial: "Síguenos en nuestras redes sociales",
    
    // Contact Details
    emailAddress: "contacto@7pixels.es",
    phoneNumber: "610 154 191",
    officeLocation: "Barcelona, España",
    
    // Contact Page Text
    contactReadyTitle: "¿Listo para hacer crecer tu negocio?",
    contactReadyDescription: "Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas",
    
    // Contact Page
    contactBadge: "Contacto",
    contactHighlight: "Digital",
    contactFormDescription: "Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas",
    contactInfoTitle: "Información de Contacto",
    contactInfoDescription: "Estamos aquí para ayudarte. Elige la forma que prefieras para contactarnos",
    contactEmailDescription: "Respuesta en menos de 24 horas",
    contactPhoneDescription: "Llamada directa con nuestro equipo",
    contactOfficeDescription: "Visítanos en nuestra oficina",
    contactScheduleTitle: "Horario de Atención",
    contactScheduleDescription: "Estamos disponibles de lunes a viernes para atenderte",
    contactCtaTitle: "¿Listo para Empezar?",
    contactCtaDescription: "No esperes más para transformar tu negocio digital",
    
    // Footer
    footerCompanyName: "7Pixels",
    footerCompanyDescription: "Somos la agencia de marketing digital que transforma tu visión en resultados extraordinarios. Especializados en hacer crecer negocios en el mundo digital.",
    footerServicesTitle: "Servicios",
    footerContactTitle: "Contacto",
    footerServiceSocial: "Marketing en Redes Sociales",
    footerServiceAds: "Google Ads & SEO",
    footerServiceDesign: "Diseño & Branding",
    footerServiceWeb: "Desarrollo Web",
    footerContactEmail: "📧 contacto@7pixels.es",
    footerContactPhone: "📱 +34 610 154 191",
    footerContactLocation: "📍 Barcelona, España",
    footerContactSchedule: "⏰ Lun - Vie: 9AM - 6PM",
    footerCopyright: "© 2024 7Pixels. Todos los derechos reservados. Transformando ideas en realidad digital.",

    // Form Fields
    formName: "Tu nombre",
    formEmail: "Tu email",
    formCompany: "Tu empresa",
    formMessage: "Cuéntanos sobre tu proyecto...",
    
    // Form Steps
    formStepContact: "Información Personal",
    formStepServices: "Servicios de Interés",
    formStepMessage: "Cuéntanos tu Proyecto",
    
    // Form Labels
    formLabelName: "Nombre Completo *",
    formLabelEmail: "Email *",
    formLabelCompany: "Empresa (Opcional)",
    formLabelMessage: "Cuéntanos sobre tu proyecto *",
    
    // Form Placeholders
    formPlaceholderName: "Tu nombre completo",
    formPlaceholderEmail: "tu@email.com",
    formPlaceholderCompany: "Nombre de tu empresa",
    formPlaceholderMessage: "Describe tu proyecto, objetivos, timeline, o cualquier detalle que consideres importante...",
    
    // Form Messages
    formServicesQuestion: "¿Qué servicios te interesan? (Selecciona todos los que apliquen)",
    formSummaryTitle: "Resumen de tu solicitud:",
    formSummaryContact: "Contacto:",
    formSummaryCompany: "Empresa:",
    formSummaryServices: "Servicios:",
    
    // Form Buttons
    formButtonPrevious: "← Anterior",
    formButtonNext: "Siguiente →",
    formButtonSubmit: "🚀 Enviar Proyecto",
    formButtonSending: "Enviando...",
    formButtonSendAnother: "Enviar Otro Mensaje",
    
    // Success Message
    formSuccessTitle: "¡Mensaje Enviado!",
    formSuccessMessage: "Gracias por contactarnos. Te responderemos en menos de 24 horas.",

    // Footer
    footerDescription: "Somos la agencia de marketing digital que transforma tu visión en resultados extraordinarios. Especializados en hacer crecer negocios en el mundo digital.",
    footerServices: "Servicios",
    footerContact: "Contacto",
    footerRights: "© 2024 7Pixels. Todos los derechos reservados. Transformando ideas en realidad digital.",

    // Navigation
    navHome: "Inicio",
    navStats: "Logros", 
    navServices: "Servicios",
    navTestimonials: "Testimonios",
    navContact: "Contacto",

    // Common
    learnMore: "Saber Más",
    exploreService: "Explorar Servicio",
    
    // Team Page
    teamTitle: "Nuestro Equipo",
    teamSubtitle: "Conoce a los visionarios y expertos que hacen posible la magia de 7Pixels",
    teamJoinTitle: "¿Quieres unirte al equipo?",
    teamJoinDescription: "Siempre estamos buscando talento excepcional para expandir nuestro equipo de innovadores.",
    teamJoinButton: "Ver Oportunidades",
    teamContactButton: "Contactar",
    teamOpenPosition: "Open Position",
    teamSpecialties: "Especialidades",
    teamReadyToCollaborate: "¿Listo para colaborar?",
    teamCollaborateDescription: "Conecta con {name} y comencemos a crear algo increíble juntos",
    teamSendMessage: "Enviar mensaje",
    
    // Portfolio Page
    portfolioBadge: "PORTFOLIO",
    portfolioTitle: "Proyectos que",
    portfolioHighlight: "Transforman",
    portfolioDescription: "Cada línea de código, cada pixel diseñado, cada estrategia implementada. Descubre cómo hemos revolucionado la presencia digital de marcas líderes en sus industrias.",
    portfolioViewProject: "Ver Proyecto",
    portfolioAllCategories: "Todos",
    portfolioStatsProjects: "Proyectos Completados",
    portfolioStatsROI: "Promedio ROI",
    portfolioStatsSupport: "Soporte Continuo",
    portfolioStatsSatisfaction: "Clientes Satisfechos",
    portfolioReadyTitle: "¿Listo para ser el",
    portfolioReadyHighlight: "Siguiente Éxito?",
    portfolioReadyDescription: "Cada proyecto que creamos está diseñado para superar expectativas y generar resultados extraordinarios. Tu marca merece destacar en el mundo digital.",
    portfolioStartProject: "Iniciar Mi Proyecto",
    portfolioViewMoreCases: "Ver Más Casos",
    
    // Team Member Roles
    teamRoleCEO: "CEO & Founder",
    teamRoleCTO: "CTO - Chief Technology Officer",
    teamRoleFuture: "Future Team Member",
    
    // Team Member Descriptions
    teamMemberPiero: "Visionario emprendedor y operations manager con una pasión incansable por la innovación tecnológica. Experto en SEO y estrategias de posicionamiento digital. Lidera 7Pixels con enfoque en la excelencia operacional y el crecimiento estratégico.",
    teamMemberJose: "BS in Software Engineering con 8 años de experiencia en la industria. Cofundador de Claxo y arquitecto de soluciones tecnológicas escalables que impulsan el futuro digital.",
    teamMemberFuture: "Este espacio está reservado para alguien extraordinario que se una a nuestra misión. ¿Tienes lo necesario para completar nuestro dream team y llevar 7Pixels al siguiente nivel?",
    
    // Team Member Skills
    teamSkillOperations: "Operations Management",
    teamSkillStrategic: "Strategic Planning",
    teamSkillBusiness: "Business Development",
    teamSkillLeadership: "Team Leadership",
    teamSkillProcess: "Process Optimization",
    teamSkillInnovation: "Digital Innovation",
    teamSkillSoftware: "Software Engineering",
    teamSkillArchitecture: "System Architecture",
    teamSkillFullStack: "Full-Stack Development",
    teamSkillTechnical: "Technical Leadership",
    teamSkillStartup: "Startup Experience",
    teamSkillProduct: "Product Development",
    teamSkillMentoring: "Team Mentoring",
    teamSkillYourSkills: "Your Skills",
    teamSkillYourPassion: "Your Passion",
    teamSkillYourVision: "Your Vision",
    teamSkillCollaboration: "Collaboration",
    teamSkillExcellence: "Excellence",
  },
  en: {
    // Hero Section
    heroTag: "🚀 #1 Digital Marketing Agency",
    heroTitle: "7Pixels",
    heroSubtitle: "Experts in",
    heroTypewriter: [
      "Digital Marketing",
      "SEO Strategies",
      "Social Media", 
      "Online Advertising",
      "Digital Branding"
    ],
    heroDescription: "We transform your digital presence into",
    heroHighlight: "extraordinary results",
    heroFullDescription: "We are a digital marketing agency specialized in growing your business. We combine strategy, creativity and technology to propel your brand to success.",
    heroCta1: "🚀 Start Project",
    heroCta2: "✨ View Portfolio",

    // Stats Section
    statsTitle: "Results That Speak for Themselves",
    statsDescription: "Our numbers reflect our commitment to excellence",
    statsProjects: "Completed Projects",
    statsSatisfaction: "Satisfied Clients",
    statsROI: "Average ROI",
    statsSupport: "Available Support",

    // Services Section
    servicesTag: "🎯 Our Services",
    servicesTitle: "Solutions that",
    servicesHighlight: "Transform",
    servicesDescription: "Each service is designed to propel your business to the next level",
    servicesCta: "💡 Free Consultation",
    
    // Service Items
    serviceSocial: "Social Media Marketing",
    serviceSocialDesc: "Strategies that connect your brand with millions of active users across all platforms.",
    serviceSEO: "SEO & Google Ads",
    serviceSEODesc: "We master algorithms to position your brand in top search results.",
    serviceDesign: "Creative Design",
    serviceDesignDesc: "Designs that capture your brand essence and transform it into memorable experiences.",
    serviceAutomation: "Marketing Automation",
    serviceAutomationDesc: "Intelligent systems that nurture leads and convert prospects into loyal customers.",
    serviceWeb: "Web Development",
    serviceWebDesc: "Websites that not only look amazing but convert visitors into sales.",
    serviceAnalytics: "Data Analytics",
    serviceAnalyticsDesc: "Deep insights that reveal hidden opportunities and optimize every investment.",
    
    // Service Features
    serviceFeatureContent: "Content Strategy",
    serviceFeatureCommunity: "Community Management",
    serviceFeatureInfluencer: "Influencer Marketing",
    serviceFeaturePaid: "Paid Advertising",
    serviceFeatureTechnical: "Technical SEO",
    serviceFeatureKeyword: "Keyword Research",
    serviceFeaturePPC: "PPC Campaigns",
    serviceFeatureAnalytics: "Analytics & Reporting",
    serviceFeatureBrand: "Brand Identity",
    serviceFeatureUI: "UI/UX Design",
    serviceFeatureMotion: "Motion Graphics",
    serviceFeaturePrint: "Print & Digital",
    serviceFeatureEmail: "Email Workflows",
    serviceFeatureLead: "Lead Scoring",
    serviceFeatureCRM: "CRM Integration",
    serviceFeatureBehavioral: "Behavioral Triggers",
    serviceFeatureReact: "React/Next.js",
    serviceFeatureEcommerce: "E-commerce",
    serviceFeaturePWA: "PWA",
    serviceFeaturePerformance: "Performance Optimization",
    serviceFeatureAdvanced: "Advanced Analytics",
    serviceFeatureDashboards: "Custom Dashboards",
    serviceFeatureConversion: "Conversion Optimization",
    serviceFeatureROI: "ROI Tracking",

    // Testimonials
    testimonialsTag: "💬 Testimonials",
    testimonialsTitle: "Results that",
    testimonialsHighlight: "Speak",
    testimonialsDescription: "Our clients are our best letter of introduction",

    // Contact Section
    contactTitle: "Ready to Grow Your Business?",
    contactDescription: "Let's talk about how we can take your brand to the next level. Your digital success starts with a simple conversation!",
    contactFormTitle: "Request Your Free Consultation",
    contactCta: "🚀 Start My Project",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactOffice: "Office", 
    contactSchedule: "Mon - Fri: 9AM - 6PM",
    contactSocial: "Follow us on social media",
    
    // Contact Details
    emailAddress: "contacto@7pixels.es",
    phoneNumber: "610 154 191",
    officeLocation: "Barcelona, Spain",
    
    // Contact Page Text
    contactReadyTitle: "Ready to grow your business?",
    contactReadyDescription: "Tell us about your project and we'll respond within 24 hours",
    
    // Contact Page
    contactBadge: "Contact",
    contactHighlight: "Digital",
    contactFormDescription: "Complete the form and we'll get back to you within 24 hours",
    contactInfoTitle: "Contact Information",
    contactInfoDescription: "We're here to help. Choose your preferred way to reach us",
    contactEmailDescription: "Response within 24 hours",
    contactPhoneDescription: "Direct call with our team",
    contactOfficeDescription: "Visit us at our office",
    contactScheduleTitle: "Business Hours",
    contactScheduleDescription: "We're available Monday to Friday to assist you",
    contactCtaTitle: "Ready to Start?",
    contactCtaDescription: "Don't wait any longer to transform your digital business",
    
    // Footer
    footerCompanyName: "7Pixels",
    footerCompanyDescription: "We are the digital marketing agency that transforms your vision into extraordinary results. Specialized in growing businesses in the digital world.",
    footerServicesTitle: "Services",
    footerContactTitle: "Contact",
    footerServiceSocial: "Social Media Marketing",
    footerServiceAds: "Google Ads & SEO",
    footerServiceDesign: "Design & Branding",
    footerServiceWeb: "Web Development",
    footerContactEmail: "📧 contacto@7pixels.es",
    footerContactPhone: "📱 +34 610 154 191",
    footerContactLocation: "📍 Barcelona, Spain",
    footerContactSchedule: "⏰ Mon - Fri: 9AM - 6PM",
    footerCopyright: "© 2024 7Pixels. All rights reserved. Transforming ideas into digital reality.",

    // Form Fields
    formName: "Your name",
    formEmail: "Your email",
    formCompany: "Your company",
    formMessage: "Tell us about your project...",
    
    // Form Steps
    formStepContact: "Personal Information",
    formStepServices: "Services of Interest",
    formStepMessage: "Tell Us About Your Project",
    
    // Form Labels
    formLabelName: "Full Name *",
    formLabelEmail: "Email *",
    formLabelCompany: "Company (Optional)",
    formLabelMessage: "Tell us about your project *",
    
    // Form Placeholders
    formPlaceholderName: "Your full name",
    formPlaceholderEmail: "your@email.com",
    formPlaceholderCompany: "Your company name",
    formPlaceholderMessage: "Describe your project, objectives, timeline, or any detail you consider important...",
    
    // Form Messages
    formServicesQuestion: "What services interest you? (Select all that apply)",
    formSummaryTitle: "Summary of your request:",
    formSummaryContact: "Contact:",
    formSummaryCompany: "Company:",
    formSummaryServices: "Services:",
    
    // Form Buttons
    formButtonPrevious: "← Previous",
    formButtonNext: "Next →",
    formButtonSubmit: "🚀 Send Project",
    formButtonSending: "Sending...",
    formButtonSendAnother: "Send Another Message",
    
    // Success Message
    formSuccessTitle: "Message Sent!",
    formSuccessMessage: "Thank you for contacting us. We will respond within 24 hours.",

    // Footer
    footerDescription: "We are the digital marketing agency that transforms your vision into extraordinary results. Specialized in growing businesses in the digital world.",
    footerServices: "Services",
    footerContact: "Contact",
    footerRights: "© 2024 7Pixels. All rights reserved. Transforming ideas into digital reality.",

    // Navigation
    navHome: "Home",
    navStats: "Results",
    navServices: "Services", 
    navTestimonials: "Testimonials",
    navContact: "Contact",

    // Common
    learnMore: "Learn More",
    exploreService: "Explore Service",
    
    // Team Page
    teamTitle: "Our Team",
    teamSubtitle: "Meet the visionaries and experts who make 7Pixels magic possible",
    teamJoinTitle: "Want to join the team?",
    teamJoinDescription: "We are always looking for exceptional talent to expand our team of innovators.",
    teamJoinButton: "View Opportunities",
    teamContactButton: "Contact",
    teamOpenPosition: "Open Position",
    teamSpecialties: "Specialties",
    teamReadyToCollaborate: "Ready to collaborate?",
    teamCollaborateDescription: "Connect with {name} and let's start creating something incredible together",
    teamSendMessage: "Send Message",
    
    // Portfolio Page
    portfolioBadge: "PORTFOLIO",
    portfolioTitle: "Projects that",
    portfolioHighlight: "Transform",
    portfolioDescription: "Every line of code, every pixel designed, every strategy implemented. Discover how we have revolutionized the digital presence of leading brands in their industries.",
    portfolioViewProject: "View Project",
    portfolioAllCategories: "All",
    portfolioStatsProjects: "Completed Projects",
    portfolioStatsROI: "Average ROI",
    portfolioStatsSupport: "Continuous Support",
    portfolioStatsSatisfaction: "Satisfied Clients",
    portfolioReadyTitle: "Ready to be the",
    portfolioReadyHighlight: "Next Success?",
    portfolioReadyDescription: "Every project we create is designed to exceed expectations and generate extraordinary results. Your brand deserves to stand out in the digital world.",
    portfolioStartProject: "Start My Project",
    portfolioViewMoreCases: "View More Cases",
    
    // Team Member Roles
    teamRoleCEO: "CEO & Founder",
    teamRoleCTO: "CTO - Chief Technology Officer",
    teamRoleFuture: "Future Team Member",
    
    // Team Member Descriptions
    teamMemberPiero: "Visionary entrepreneur and operations manager with an unwavering passion for technological innovation. Expert in SEO and digital positioning strategies. Leads 7Pixels with focus on operational excellence and strategic growth.",
    teamMemberJose: "BS in Software Engineering with 8 years of industry experience. Co-founder of Claxo and architect of scalable technological solutions that drive the digital future.",
    teamMemberFuture: "This space is reserved for someone extraordinary who joins our mission. Do you have what it takes to complete our dream team and take 7Pixels to the next level?",
    
    // Team Member Skills
    teamSkillOperations: "Operations Management",
    teamSkillStrategic: "Strategic Planning",
    teamSkillBusiness: "Business Development",
    teamSkillLeadership: "Team Leadership",
    teamSkillProcess: "Process Optimization",
    teamSkillInnovation: "Digital Innovation",
    teamSkillSoftware: "Software Engineering",
    teamSkillArchitecture: "System Architecture",
    teamSkillFullStack: "Full-Stack Development",
    teamSkillTechnical: "Technical Leadership",
    teamSkillStartup: "Startup Experience",
    teamSkillProduct: "Product Development",
    teamSkillMentoring: "Team Mentoring",
    teamSkillYourSkills: "Your Skills",
    teamSkillYourPassion: "Your Passion",
    teamSkillYourVision: "Your Vision",
    teamSkillCollaboration: "Collaboration",
    teamSkillExcellence: "Excellence",
  }
};

export function useTranslations() {
  const { language } = useTheme();
  return translations[language];
}
