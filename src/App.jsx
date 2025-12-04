import React, { useState, useEffect, useRef } from 'react';
import { 
  Zap, 
  Layers, 
  CreditCard, 
  MessageSquare, 
  Cpu, 
  Moon, 
  Sun, 
  ArrowRight, 
  Check, 
  Star, 
  Box, 
  Workflow, 
  Globe, 
  Command,
  X,
  Search,
  CheckCircle,
  Loader,
  Plus,
  Play,
  Sparkles,
  Bot,
  HelpCircle,
  Server,
  Menu,
  ArrowUp,
  Rocket
} from 'lucide-react';

/* --- BRAND ICONS --- */
const BrandIcons = {
  "Google Sheets": { viewBox: "0 0 24 24", paths: [{ d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z", fill: "#0F9D58" }, { d: "M14 2v6h6", fill: "#87CEFA", opacity: "0.5" }] },
  "Telegram": { viewBox: "0 0 24 24", paths: [{ d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z", fill: "#26A5E4" }] },
  "Slack": { viewBox: "0 0 24 24", paths: [{ d: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.52v-6.315zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z", fill: "currentColor" }] },
  "Notion": { viewBox: "0 0 24 24", paths: [{ d: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28.047-.326L19.31 1.63c-.093-.42-.513-.42-.887-.373L3.899 2.19c-.42.046-.513.56-.093.933l.653 1.085zm.653 1.773c-.606 0-1.12.513-1.12 1.12v15.21c0 .513.514 1.12 1.12 1.12h14.79c.607 0 1.12-.513 1.12-1.12V5.048c0-.606-.513-1.12-1.12-1.12H5.112zm2.053 13.903c-.233 0-.466-.233-.466-.467v-9.66c0-.326.326-.466.56-.233L16.49 15.69c.233.233.513.233.513 0V6.448c0-.233.233-.467.467-.467h1.026c.233 0 .467.233.467.467v10.126c0 .326-.327.466-.56.233L9.27 6.495c-.233-.233-.513-.233-.513 0v8.911c0 .233-.233.467-.467.467H7.165z", fill: "currentColor" }] },
  "Shopify": { viewBox: "0 0 24 24", paths: [{ d: "M12 0L2 4v16l10 4l10-4V4L12 0zm7.5 18.5L12 21.5L4.5 18.5V5.5L12 2.5l7.5 3v13z M15 13.5l-3 1.5l-3-1.5v-3l3-1.5l3 1.5v3z", fill: "#95BF47" }] },
  "OpenAI": { viewBox: "0 0 24 24", paths: [{ d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9723V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1195 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2298V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4533l-.142.0805L8.704 5.4596a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l3.8556-2.2088 3.8556 2.2088v4.4176L13.2597 17.124l-3.8556-2.2088z", fill: "currentColor" }] },
  "Gmail": { viewBox: "0 0 24 24", paths: [{ d: "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.55l6.545-4.91 1.528-1.145C21.69 2.28 24 3.43 24 5.46z", fill: "#EA4335" }] },
  "HubSpot": { viewBox: "0 0 24 24", paths: [{ d: "M11.5 24c-1.38 0-2.5-1.12-2.5-2.5S10.12 19 11.5 19c1.07 0 1.98.68 2.33 1.62l3.4-1.96c-.1-.31-.17-.65-.17-1a4 4 0 0 1 4-4c.35 0 .69.07 1 .17V2.5C21.64 1.12 20.52 0 19.14 0H4.86C3.48 0 2.36 1.12 2.36 2.5v16.14l2.5-2.5l2.5 2.5l1.64 1.64c-.94.35-1.62 1.26-1.62 2.33a2.5 2.5 0 0 0 5 0c0-.11 0-.21-.03-.31l-3.35 1.94c0 .08.01.16.01.24c0 1.38-1.12 2.5-2.5 2.5z", fill: "#FF7A59" }] },
  "PostgreSQL": { viewBox: "0 0 24 24", paths: [{ d: "M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,18.5C9.5,18.5 7.5,16.5 7.5,14C7.5,11.5 9.5,9.5 12,9.5C14.5,9.5 16.5,11.5 16.5,14C16.5,16.5 14.5,18.5 12,18.5M12,5.5C13.5,5.5 14.8,6.1 15.8,7.1L13.7,9.2C13.2,8.8 12.6,8.5 12,8.5C9.8,8.5 8,10.3 8,12.5C8,14.7 9.8,16.5 12,16.5C14.2,16.5 16,14.7 16,12.5V11.5H12V8.5H19V12.5C19,16.3 15.9,19.5 12,19.5C8.1,19.5 5,16.3 5,12.5C5,8.6 8.1,5.5 12,5.5Z", fill: "#336791" }] },
  "AWS S3": { viewBox: "0 0 24 24", paths: [{ d: "M12,2L2,7L12,12L22,7L12,2M2,17L12,22L22,17V12L12,17L2,12V17Z", fill: "#FF9900" }] },
  "Google Drive": { viewBox: "0 0 24 24", paths: [{ d: "M7.8 15.8L4.6 10.3C3.6 12 3.6 14.1 4.6 15.8L7.8 21.3C8.8 23 10.9 24.2 12.9 24.2H19.3L16.1 18.7L7.8 15.8Z", fill: "#1FA463" }, { d: "M12 2C10.1 2 8.3 3.2 7.4 5L4.2 10.5H17.2L20.4 5C21.4 6.8 21.4 8.9 20.4 10.7L12 2Z", fill: "#FFC107" }, { d: "M17.2 10.5H10.8L7.6 16L10.8 21.5H17.2C19.1 21.5 20.9 20.3 21.8 18.5L25 13L21.8 7.5C20.9 5.8 19.1 4.6 17.2 4.6V10.5Z", fill: "#4285F4" }] },
  "Typeform": { viewBox: "0 0 24 24", paths: [{ d: "M4 6h16v4h-6v8h-4v-8H4V6z", fill: "#262627" }] },
  "Trello": { viewBox: "0 0 24 24", paths: [{ d: "M19.06 2H4.94C3.32 2 2 3.32 2 4.94v14.12C2 20.68 3.32 22 4.94 22h14.12C20.68 22 22 20.68 22 19.06V4.94C22 3.32 20.68 2 19.06 2zM10.6 16.2H5.9V5.8h4.7v10.4zm7.5-4.4h-4.7V5.8h4.7v6z", fill: "#0079BF" }] },
  "WooCommerce": { viewBox: "0 0 24 24", paths: [{ d: "M21.5 13.5c0 1.25-1.12 2.37-3.37 3.37c-.37 1.37-1.62 2.37-3 2.37c-.62 0-1.12-.12-1.62-.37c-.62.87-1.62 1.37-2.62 1.37c-1.37 0-2.5-1-2.87-2.25c-1.87-.87-3-2.12-3-3.25c0-1.87 2.37-3.37 5.25-3.37s5.25 1.5 5.25 3.37c0 .12 0 .25-.12.37c.5.5 1 .62 1.37.62c.62 0 1.12-.5 1.12-1.12c0-.5-.37-1-1.12-1.5c-2.37-1.62-2.12-5.37.5-5.37c1.75 0 3.25 1.75 4.12 3.75c.12.62.12 1.25.12 2z", fill: "#96588A" }] },
  "MongoDB": { viewBox: "0 0 24 24", paths: [{ d: "M12 22C11.5 22 11 21.5 11 21C11 17.5 7 13 7 9C7 5 9.5 2 12 2C14.5 2 17 5 17 9C17 13 13 17.5 13 21C13 21.5 12.5 22 12 22Z", fill: "#47A248" }] },
  "Discord": { viewBox: "0 0 24 24", paths: [{ d: "M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.772-.6083 1.1588a18.2915 18.2915 0 0 0-5.4868 0 12.64 12.64 0 0 0-.6173-1.1632.077.077 0 0 0-.079-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.2986 12.2986 0 0 1-1.873.8914.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z", fill: "#5865F2" }] },
  "Airtable": { viewBox: "0 0 24 24", paths: [{ d: "M12 0l-9.33 6.06L2.67 17.94 12 24l9.33-6.06L21.33 6.06zM12 18.6L6 14.7v-5.4l6 3.9v5.4zm0-6.9L6 7.8l6-3.9 6 3.9-6 3.9zm0 6.9v-5.4l6-3.9v5.4l-6 3.9z", fill: "#FCB400" }] },
  "Stripe": { viewBox: "0 0 24 24", paths: [{ d: "M14 11.5c0-1.5-1-2.5-3.5-2.5S6 10 6 10l-.5-3s1.5-1 4.5-1C14 6 16 8 16 11.5c0 4.5-9 4.5-9 6.5c0 .5.5 1 2.5 1c2.5 0 4-1 4-1l.5 3s-1.5 1-4.5 1c-4.5 0-6.5-2.5-6.5-5.5c0-5 9-5 9-7z", fill: "#635BFF" }] },
  "Twilio": { viewBox: "0 0 24 24", paths: [{ d: "M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-3.5-7c-1.93 0-3.5-1.57-3.5-3.5S6.57 5 8.5 5 12 6.57 12 8.5 10.43 12 8.5 12zm7 0c-1.93 0-3.5-1.57-3.5-3.5S13.57 5 15.5 5 19 6.57 19 8.5 17.43 12 15.5 12z", fill: "#F22F46" }] },
  "Zoom": { viewBox: "0 0 24 24", paths: [{ d: "M18 4.5L2 9l16 4.5V4.5z M22 5v14l-4-3v-8l4-3z M2 15l16 4.5v-9L2 15z", fill: "#2D8CFF" }] },
  "Salesforce": { viewBox: "0 0 24 24", paths: [{ d: "M16.1 11.4c1.3 0 2.4-1.1 2.4-2.4c0-1.3-1.1-2.4-2.4-2.4c-.9 0-1.7.5-2.1 1.2c-.6-.4-1.4-.7-2.1-.7c-2.1 0-3.8 1.7-3.8 3.8c0 .2 0 .4.1.6C6.1 11.6 4.5 13.5 4.5 15.8c0 2.5 2 4.5 4.5 4.5h8.6c2.5 0 4.5-2 4.5-4.5c0-2.3-1.7-4.2-3.9-4.4z", fill: "#00A1E0" }] },
  "Github": { viewBox: "0 0 24 24", paths: [{ d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.83 2.81 1.3 3.5.99.1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.46-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.52 11.52 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.21.69.82.57A12 12 0 0 0 12 .3", fill: "#181717", className: "dark:fill-white" }] },
  "Redis": { viewBox: "0 0 24 24", paths: [{ d: "M4 6h16v4h-6v8h-4v-8H4V6z", fill: "#DC382D" }] },
  "WordPress": { viewBox: "0 0 24 24", paths: [{ d: "M11.6 8.7L9.9 13.5L8.2 8.7H11.6M2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12M18.8 8.3C19.4 9.4 19.8 10.6 19.8 12C19.8 13.5 19.3 14.8 18.5 16L15.3 6.6C16.8 6.7 18 7.3 18.8 8.3M12 20.3C10.6 20.3 9.4 19.9 8.3 19.2L11 11.2L13.7 19.3C13.2 20 12.6 20.3 12 20.3M5.1 8C5.8 6.6 7 5.5 8.5 4.9L5.2 14.9C4.6 14 4.3 13 4.3 12C4.3 10.5 4.6 9.2 5.1 8M12 3.7C13.5 3.7 14.9 4.2 16.1 5L12.5 15.6L10.5 9.8L12.3 4.4C12.2 4.4 12.1 4.4 12 4.4C12 4.2 12 3.9 12 3.7Z", fill: "#21759B" }] }
};

/* --- JSON DATA SOURCE --- */
const nexozData = {
  brand: {
    name: "NEXOZ",
    tagline: "Automate the Impossible.",
    description: "Orchestrate your entire digital ecosystem with a single bold move. We build the bridges between your favorite tools.",
  },
  nav: ["Compatibility", "Automations", "Services", "Pricing", "Reviews"],
  automations: [
    {
      id: 1,
      title: "Lead Sync flows",
      icon: "Workflow",
      desc: "Instantly route leads from Facebook Ads to Slack & CRM simultaneously.",
      tags: ["Marketing", "Sales"]
    },
    {
      id: 2,
      title: "Invoice Autopilot",
      icon: "CreditCard",
      desc: "Trigger invoices in Quickbooks immediately after a Stripe payment succeeds.",
      tags: ["Finance", "Speed"]
    },
    {
      id: 3,
      title: "Content Distribution",
      icon: "Layers",
      desc: "Post once. We distribute to Twitter, LinkedIn, and Instagram automatically.",
      tags: ["Social", "Growth"]
    }
  ],
  services: [
    {
      title: "Auto Social Media Mgmt",
      price: "₹4,999 /mo",
      features: ["Schedule to All Platforms", "AI Caption Writing", "Engagement Analytics"]
    },
    {
      title: "AI Support Chatbot",
      price: "₹9,999 setup",
      features: ["24/7 Customer Service", "Trained on Your Docs", "Human Handoff"]
    },
    {
      title: "Content Generation Engine",
      price: "₹4,999 /mo",
      features: ["SEO Blog Writing", "Email Newsletters", "Social Media Visuals"]
    },
    {
      title: "Custom Automation",
      price: "Consultation",
      features: ["CRM Integrations", "ERP Syncing", "Complex Logic Flows"]
    }
  ],
  pricing: [
    {
      tier: "Starter",
      price: "₹999",
      period: "/mo",
      features: ["5 Active Flows", "15m Update Time", "Standard Support"],
      highlight: false
    },
    {
      tier: "Pro",
      price: "₹2,999",
      period: "/mo",
      features: ["Unlimited Flows", "1m Update Time", "Priority Support", "Multi-step Zaps"],
      highlight: true
    },
    {
      tier: "Business",
      price: "₹9,999",
      period: "/mo",
      features: ["Dedicated Server", "Real-time Updates", "24/7 Phone Support", "SSO"],
      highlight: false
    }
  ],
  compatibility: [
    { name: "Google Sheets", type: "Database", icon: "Google Sheets", color: "#0F9D58" },
    { name: "Telegram", type: "Communication", icon: "Telegram", color: "#26A5E4" },
    { name: "Slack", type: "Communication", icon: "Slack", color: "#E01E5A" },
    { name: "Notion", type: "Productivity", icon: "Notion", color: "#000000" },
    { name: "Shopify", type: "E-commerce", icon: "Shopify", color: "#95BF47" },
    { name: "OpenAI", type: "AI", icon: "OpenAI", color: "#10A37F" },
    { name: "Gmail", type: "Email", icon: "Gmail", color: "#EA4335" },
    { name: "HubSpot", type: "CRM", icon: "HubSpot", color: "#FF7A59" },
    { name: "PostgreSQL", type: "Database", icon: "PostgreSQL", color: "#336791" },
    { name: "AWS S3", type: "Storage", icon: "AWS S3", color: "#FF9900" },
    { name: "Google Drive", type: "Storage", color: "#1FA463", icon: "Google Drive" },
    { name: "Typeform", type: "Forms", icon: "Typeform", color: "#262627" },
    { name: "Trello", type: "Project Mgmt", icon: "Trello", color: "#0079BF" },
    { name: "WooCommerce", type: "E-commerce", icon: "WooCommerce", color: "#96588A" },
    { name: "MongoDB", type: "Database", icon: "MongoDB", color: "#47A248" },
    { name: "Discord", type: "Communication", icon: "Discord", color: "#5865F2" },
    { name: "Airtable", type: "Database", icon: "Airtable", color: "#FCB400" },
    { name: "Stripe", type: "Finance", icon: "Stripe", color: "#635BFF" },
    { name: "Twilio", type: "Communication", icon: "Twilio", color: "#F22F46" },
    { name: "Zoom", type: "Video", icon: "Zoom", color: "#2D8CFF" },
    { name: "Salesforce", type: "CRM", icon: "Salesforce", color: "#00A1E0" },
    { name: "Github", type: "Dev", icon: "Github", color: "#181717" },
    { name: "Redis", type: "Cache", icon: "Redis", color: "#DC382D" },
    { name: "WordPress", type: "CMS", icon: "WordPress", color: "#21759B" }
  ],
  reviews: [
    {
      user: "Alex V.",
      role: "CTO, FinTech Startups",
      text: "NEXOZ didn't just save us time; it replaced two full-time manual data entry jobs."
    },
    {
      user: "Sarah J.",
      role: "Agency Owner",
      text: "The boldest automation platform I've used. The UI is buttery smooth and the logic is rock solid."
    }
  ]
};

// --- HELPER COMPONENTS ---

const IconMap = ({ name, size = 24, className }) => {
  if (BrandIcons[name]) {
    const brand = BrandIcons[name];
    return (
      <svg 
        viewBox={brand.viewBox} 
        width={size} 
        height={size} 
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        {brand.paths.map((p, idx) => (
          <path key={idx} d={p.d} fill={p.fill} className={p.className} opacity={p.opacity} />
        ))}
      </svg>
    );
  }

  const icons = {
    Zap, Layers, CreditCard, MessageSquare, Cpu, Box, Workflow, Globe, Command, CheckCircle, Loader, Play, Plus, Server, Sparkles, Bot, HelpCircle, Menu
  };
  const IconComponent = icons[name] || Box;
  return <IconComponent size={size} className={className} />;
};

const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- TOAST NOTIFICATION COMPONENT ---
const ToastContainer = ({ toasts, removeToast, darkMode }) => (
  <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-3 pointer-events-none">
    {toasts.map((toast) => (
      <div 
        key={toast.id} 
        className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl border animate-[slideIn_0.3s_ease-out] ${
          darkMode 
            ? 'bg-slate-900 text-white border-slate-800' 
            : 'bg-white text-slate-900 border-gray-200'
        }`}
      >
        {toast.type === 'success' ? <CheckCircle className="text-green-500" size={20} /> : <Loader className="text-blue-500 animate-spin" size={20} />}
        <span className="text-sm font-bold">{toast.msg}</span>
      </div>
    ))}
  </div>
);

// --- MODAL COMPONENT ---
const Modal = ({ isOpen, onClose, title, children, darkMode }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className={`relative w-full max-w-lg p-6 rounded-3xl shadow-2xl transform transition-all animate-[popIn_0.3s_ease-out] ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white'}`}>
        <div className="flex justify-between items-center mb-6">
          <h3 class="text-2xl font-black flex items-center gap-2">{title}</h3>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
            <X size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

// --- NAVBAR ---
const Navbar = ({ darkMode, setDarkMode }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 backdrop-blur-lg border-b transition-all duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'} ${darkMode ? 'border-white/10 bg-black/50' : 'border-black/5 bg-white/70'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className={`p-2 rounded-lg transition-transform group-hover:rotate-180 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}><Zap size={20} fill="currentColor" /></div>
          <span className="text-2xl font-black tracking-tighter">NEXOZ</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold tracking-wide uppercase">
          {nexozData.nav.map((item) => (
            <button key={item} onClick={() => handleScrollTo(item.toLowerCase())} className="hover:text-blue-500 transition-colors">{item}</button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)} className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/5 hover:bg-black/10'}`}>{darkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`md:hidden p-3 rounded-full transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/5 hover:bg-black/10'}`}>{isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>
      <div className={`md:hidden absolute w-full transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100 border-b border-white/10 bg-black/90' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-6 text-center font-bold text-lg">
          {nexozData.nav.map((item) => (
            <button key={item} onClick={() => handleScrollTo(item.toLowerCase())} className="hover:text-blue-500 transition-colors">{item}</button>
          ))}
        </div>
      </div>
    </nav>
  );
};

// --- MAIN APP COMPONENT ---
export default function NexozApp() {
  const [darkMode, setDarkMode] = useState(true);
  const [isBuilderOpen, setBuilderOpen] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Builder State
  const [builderTrigger, setBuilderTrigger] = useState("");
  const [builderAction, setBuilderAction] = useState("");
  const [isDeploying, setDeploying] = useState(false);

  // Compatibility Search State
  const [searchTerm, setSearchTerm] = useState("");
  
  // Automation Active State
  const [activeAutomations, setActiveAutomations] = useState(new Set());

  // Pricing State
  const [currentPlan, setCurrentPlan] = useState("Starter");

  // Reviews State
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 500) setShowScrollTop(true);
        else setShowScrollTop(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToast = (msg, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, msg, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  const toggleAutomation = (id) => {
    setActiveAutomations(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const handleDeploy = () => {
    if (!builderTrigger || !builderAction) {
        addToast("Please select trigger and action", "error");
        return;
    }
    setDeploying(true);
    setTimeout(() => {
      setDeploying(false);
      setBuilderOpen(false);
      setBuilderTrigger("");
      setBuilderAction("");
      addToast("Flow Deployed Successfully!", "success");
    }, 1500);
  };

  const handlePlanSelect = (tier) => {
    setCurrentPlan(tier);
    addToast(`Switched to ${tier} Plan`, 'success');
  };

  // AI Explain Function (Placeholder, removed Gemini integration)
  const explainIntegration = (appName) => {
      addToast(`${appName} integration details coming soon!`, "success");
  };

  // Marquee Row Helper
  const MarqueeRow = ({ items, reverse }) => (
    <div className="flex overflow-hidden group/marquee select-none my-4 w-full">
      <div 
        className={`flex w-max gap-8 items-center px-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ 
          animationDuration: '80s',
          willChange: 'transform' // Optimized for smoothness
        }}
      >
         {/* Duplicate items to create seamless loop */}
         {[...items, ...items].map((app, idx) => (
           <div 
             key={`${app.name}-${idx}`}
             className={`group relative p-4 w-40 h-32 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300 cursor-pointer border hover:-translate-y-1 ${darkMode ? 'bg-black border-transparent hover:border-gray-800' : 'bg-white border-transparent hover:border-gray-200'}`}
             style={{
               '--hover-color': app.color || '#3B82F6'
             }}
           >
             <div className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
               <IconMap name={app.icon} size={32} className="drop-shadow-lg" />
             </div>
             <span className="font-bold text-xs text-center">{app.name}</span>
             <span className={`text-[10px] uppercase tracking-wide ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{app.type}</span>
           </div>
         ))}
      </div>
    </div>
  );

  return (
    <div className={`relative min-h-screen font-sans transition-colors duration-500 selection:bg-blue-500 selection:text-white overflow-x-hidden ${darkMode ? 'text-white' : 'text-slate-900'}`}>
      
      {/* --- FIXED BACKGROUND --- */}
      <div className={`fixed inset-0 z-[-1] transition-colors duration-700 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
        {/* Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

        <div className={`absolute inset-0 transition-opacity duration-700 ${darkMode ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]"></div>
        </div>
        <div className={`absolute inset-0 transition-opacity duration-700 ${darkMode ? 'opacity-0' : 'opacity-100'}`}>
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-400/5 rounded-full blur-[120px]"></div>
        </div>
      </div>

      {/* Styles for Animations */}
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-marquee { animation: marquee 80s linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse 80s linear infinite; }
      `}</style>

      <ToastContainer toasts={toasts} darkMode={darkMode} />

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* --- SCROLL TO TOP BUTTON --- */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${darkMode ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-white text-slate-900 hover:bg-slate-100 border border-slate-200'}`}
      >
        <ArrowUp size={20} />
      </button>

      {/* --- BUILDER MODAL --- */}
      <Modal isOpen={isBuilderOpen} onClose={() => setBuilderOpen(false)} title="Create New Flow" darkMode={darkMode}>
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-wider opacity-60">When this happens (Trigger)</label>
            <select value={builderTrigger} onChange={(e) => setBuilderTrigger(e.target.value)} className={`w-full p-4 rounded-xl font-medium outline-none border-2 focus:border-blue-500 transition-colors ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}`}>
              <option value="">Select an App...</option>
              {nexozData.compatibility.map(app => <option key={app.name} value={app.name}>{app.name}</option>)}
            </select>
          </div>
          <div className="flex justify-center"><div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full"><ArrowRight size={20} className="text-gray-500" /></div></div>
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-wider opacity-60">Do this (Action)</label>
            <select value={builderAction} onChange={(e) => setBuilderAction(e.target.value)} className={`w-full p-4 rounded-xl font-medium outline-none border-2 focus:border-blue-500 transition-colors ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}`}>
              <option value="">Select an App...</option>
              {nexozData.compatibility.map(app => <option key={app.name} value={app.name}>{app.name}</option>)}
            </select>
          </div>
          <button onClick={handleDeploy} disabled={isDeploying || !builderTrigger || !builderAction} className={`w-full py-4 mt-4 rounded-xl font-bold flex justify-center items-center gap-2 transition-all active:scale-95 ${!builderTrigger || !builderAction ? 'bg-gray-300 dark:bg-gray-800 cursor-not-allowed text-gray-500' : 'bg-blue-600 hover:bg-blue-500 text-white'}`}>
            {isDeploying ? <Loader className="animate-spin" /> : <><Zap size={20} fill="currentColor" /> Deploy Flow</>}
          </button>
        </div>
      </Modal>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative pt-32 pb-20 px-6 min-h-[85vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <FadeInSection>
          <div className="inline-block px-4 py-2 mb-6 rounded-full text-xs font-bold tracking-widest uppercase border border-blue-500/30 text-blue-500 bg-blue-500/10 backdrop-blur-sm">
            Next Gen Automation
          </div>
          <h1 className={`text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-tight mb-8 max-w-6xl mx-auto drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-b ${darkMode ? 'from-white to-white/60' : 'from-slate-900 to-slate-600'}`}>
             {/* Fix: Applied dynamic base and hover colors */}
             {nexozData.brand.tagline.split(" ").map((word, i) => (
               <span 
                 key={i} 
                 className={`inline-block transition-colors cursor-default mr-4 
                            ${darkMode ? 'text-white/90 hover:text-blue-400' : 'text-slate-900 hover:text-blue-600'}
                           `}
               >
                 {word}
               </span>
             ))}
          </h1>
          <p className={`text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {nexozData.brand.description}
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full max-w-md mx-auto">
            <button 
              onClick={() => setBuilderOpen(true)}
              className={`w-full md:w-auto px-8 py-4 text-lg font-bold rounded-full flex justify-center items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] active:scale-95 hover:-translate-y-1 ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
            >
              Start Building <Plus size={20} />
            </button>
            <button 
              onClick={() => document.getElementById('compatibility').scrollIntoView({ behavior: 'smooth' })}
              className={`w-full md:w-auto px-8 py-4 text-lg font-bold rounded-full border transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:border-blue-500 hover:text-white hover:shadow-lg ${darkMode ? 'border-white/20 text-white hover:bg-white/10' : 'border-black/20 text-black hover:bg-black/5'}`}
            >
              Explore Integrations
            </button>
          </div>
        </FadeInSection>
      </section>

      {/* --- COMPATIBILITY (Fixed Marquee) --- */}
      <section id="compatibility" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div className="max-w-lg">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight">Integrations.</h2>
                <p className={`mt-4 text-lg font-bold text-blue-500`}>1,000+ Native Integrations</p>
              </div>
              <div className={`relative mt-6 md:mt-0 w-full md:w-96`}>
                <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400`} size={20} />
                <input 
                  type="text" 
                  placeholder="Search integrations..." 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  className={`w-full pl-12 pr-4 py-4 rounded-full outline-none border-2 focus:border-blue-500 transition-colors backdrop-blur-md ${darkMode ? 'bg-white/5 border-white/10 text-white placeholder-gray-500' : 'bg-white/60 border-black/5 text-black placeholder-gray-400'}`} 
                />
              </div>
            </div>
          </FadeInSection>
        </div>

        {searchTerm ? (
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 min-h-[300px] content-start">
            {nexozData.compatibility.filter(app => app.name.toLowerCase().includes(searchTerm.toLowerCase())).map((app, idx) => (
              <FadeInSection key={app.name} delay={idx * 50}>
                <div className={`group relative p-4 rounded-xl flex flex-col items-center justify-center gap-2 transition-all cursor-pointer border hover:-translate-y-1 backdrop-blur-md ${darkMode ? 'bg-black/40 border-white/10 hover:border-blue-500/50' : 'bg-white/60 border-black/5 hover:border-blue-500/50'}`}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform">
                    <IconMap name={app.icon} size={28} className="drop-shadow-md" />
                  </div>
                  <span className="font-bold text-sm text-center">{app.name}</span>
                  <span className={`text-[10px] uppercase tracking-widest font-medium ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{app.type}</span>
                </div>
              </FadeInSection>
            ))}
            {nexozData.compatibility.filter(app => app.name.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 && <div className="col-span-full text-center py-10 opacity-50">No apps found matching "{searchTerm}"</div>}
          </div>
        ) : (
          <div className="relative w-full">
            {/* Edge Fades for visual consistency */}
            <div className={`absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r ${darkMode ? 'from-slate-950' : 'from-slate-50'} to-transparent pointer-events-none`}></div>
            <div className={`absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l ${darkMode ? 'from-slate-950' : 'from-slate-50'} to-transparent pointer-events-none`}></div>
            
            {/* Row 1: Left */}
            <div className="flex overflow-hidden select-none my-4 w-full">
              <div 
                className={`flex w-max gap-8 items-center px-4 animate-marquee`}
                style={{ animationDuration: '60s', willChange: 'transform' }}
              >
                 {[...nexozData.compatibility.slice(0, 12), ...nexozData.compatibility.slice(0, 12)].map((app, idx) => (
                   <div key={`r1-${idx}`} className={`p-4 w-48 h-32 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300 border ${darkMode ? 'bg-black/40 border-white/10' : 'bg-white/60 border-black/5'}`}>
                     <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 backdrop-blur-sm p-1.5"><IconMap name={app.icon} size={24} className="drop-shadow-md" /></div>
                     <span className="font-bold text-sm text-center tracking-tight">{app.name}</span>
                     <span className={`text-[10px] uppercase tracking-widest font-medium ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{app.type}</span>
                   </div>
                 ))}
              </div>
            </div>

            {/* Row 2: Right */}
            <div className="flex overflow-hidden select-none my-4 w-full">
              <div 
                className={`flex w-max gap-8 items-center px-4 animate-marquee-reverse`}
                style={{ animationDuration: '60s', willChange: 'transform' }}
              >
                 {[...nexozData.compatibility.slice(12), ...nexozData.compatibility.slice(12)].map((app, idx) => (
                   <div key={`r2-${idx}`} className={`p-4 w-48 h-32 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all duration-300 border ${darkMode ? 'bg-black/40 border-white/10' : 'bg-white/60 border-black/5'}`}>
                     <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 backdrop-blur-sm p-1.5"><IconMap name={app.icon} size={24} className="drop-shadow-md" /></div>
                     <span className="font-bold text-sm text-center">{app.name}</span>
                     <span className={`text-[10px] uppercase tracking-widest font-medium ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{app.type}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* --- AUTOMATIONS --- */}
      <section id="automations" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Pre-built Flows.</h2>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nexozData.automations.map((item, idx) => {
              const isActive = activeAutomations.has(item.id);
              return (
                <FadeInSection key={item.id} delay={idx * 150}> {/* Staggered delay */}
                  <div className={`h-full p-8 rounded-3xl border transition-all duration-500 flex flex-col relative overflow-hidden group hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 backdrop-blur-md ${darkMode ? 'bg-white/5 border-white/10' : 'bg-white/60 border-black/5'}`}>
                    
                    {/* Status Indicator */}
                    {isActive && (
                      <div className="absolute top-4 right-4 text-green-500 flex items-center gap-1 text-xs font-bold uppercase tracking-wider bg-green-500/10 px-3 py-1 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Active
                      </div>
                    )}

                    <div className={`mb-6 p-4 rounded-2xl w-fit transition-colors ${isActive ? 'bg-green-500 text-white' : 'bg-blue-600/10 text-blue-500'}`}><IconMap name={item.icon} size={32} /></div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className={`mb-6 leading-relaxed flex-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                    <button onClick={() => toggleAutomation(item.id)} className={`w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${isActive ? (darkMode ? 'bg-white/10 text-white hover:bg-red-500/20 hover:text-red-500' : 'bg-black/5 text-black hover:bg-red-500/20 hover:text-red-600') : 'bg-blue-600 text-white hover:bg-blue-700'}`}>{isActive ? "Deactivate Flow" : "Activate Flow"}</button>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* --- SERVICES --- */}
      <section id="services" className={`py-24 px-6 relative`}>
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight max-w-md">Custom Services.</h2>
                <p className={`text-lg mt-4 md:mt-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Tailored solutions for complex needs.</p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {nexozData.services.map((service, idx) => (
                <FadeInSection key={idx} delay={idx * 150}>
                    <div className={`p-10 rounded-3xl border flex flex-col justify-between h-full backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${darkMode ? 'bg-white/5 border-white/10' : 'bg-white/60 border-black/5'}`}>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                            <p className={`text-3xl font-black mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{service.price}</p>
                            <ul className="space-y-4 mb-8">
                                {service.features.map(feat => (
                                    <li key={feat} className="flex items-center gap-3">
                                        <div className="p-1 rounded-full bg-blue-500/20 text-blue-500">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <span className="font-medium">{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button className={`w-full py-4 rounded-xl font-bold transition-all border group flex items-center justify-center gap-2 ${darkMode ? 'border-white/20 hover:bg-white/10' : 'border-black/20 hover:bg-black/5'}`}>
                            Contact Sales <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </FadeInSection>
             ))}
          </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section id="pricing" className={`py-24 px-6 relative`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Simple Pricing</h2>
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Transparent costs. No hidden fees.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {nexozData.pricing.map((plan, idx) => {
              const isSelected = currentPlan === plan.tier;
              return (
                <FadeInSection key={idx} delay={idx * 150}>
                  <div className={`relative p-8 rounded-3xl border flex flex-col transition-all duration-500 hover:scale-105 backdrop-blur-xl ${
                    plan.highlight 
                      ? `border-blue-500 shadow-[0_0_60px_rgba(59,130,246,0.3)] ${darkMode ? 'bg-white/10' : 'bg-white/80'} scale-105 z-10`
                      : `${darkMode ? 'border-white/10 bg-white/5' : 'border-black/5 bg-white/60'}`
                  }`}>
                    
                    {plan.highlight && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                        Most Popular
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold mb-2 flex justify-between items-center">
                      {plan.tier}
                      {isSelected && <CheckCircle className="text-green-500" size={24} />}
                    </h3>
                    
                    <div className="flex items-baseline gap-1 mb-8">
                      <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                      <span className={`text-sm font-bold text-gray-400`}>{plan.period}</span>
                    </div>
                    
                    <ul className="space-y-4 mb-8 flex-1">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-sm font-medium">
                          <div className={`p-1 rounded-full ${plan.highlight ? 'bg-blue-500 text-white' : (darkMode ? 'bg-white/10 text-gray-300' : 'bg-black/5 text-gray-600')}`}>
                            <Check size={12} strokeWidth={4} />
                          </div>
                          {feat}
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      onClick={() => handlePlanSelect(plan.tier)}
                      disabled={isSelected}
                      className={`w-full py-4 rounded-xl font-bold transition-all ${
                        isSelected
                          ? 'bg-green-500 text-white cursor-default'
                          : (plan.highlight)
                            ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg' 
                            : `${darkMode ? 'bg-white hover:bg-gray-200 text-black' : 'bg-black hover:bg-gray-800 text-white'}`
                      }`}
                    >
                      {isSelected ? "Current Plan" : `Choose ${plan.tier}`}
                    </button>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- REVIEWS --- */}
      <section id="reviews" className={`py-32 px-6 border-t backdrop-blur-sm ${darkMode ? 'border-white/10 bg-white/5' : 'border-black/5 bg-white/60'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <div className="flex justify-center gap-2 mb-10">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} size={28} className="fill-yellow-400 text-yellow-400 drop-shadow-md" />)}
            </div>
            <h2 className="text-3xl md:text-6xl font-black mb-12 italic leading-tight">
              "{nexozData.reviews[activeReview].text}"
            </h2>
            <div className="flex flex-col items-center gap-2">
              <div className="font-bold text-xl">{nexozData.reviews[activeReview].user}</div>
              <div className={`text-sm uppercase tracking-widest font-bold text-blue-500`}>
                {nexozData.reviews[activeReview].role}
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-10">
              {nexozData.reviews.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveReview(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${activeReview === idx ? 'bg-blue-500 w-12' : 'bg-gray-700 w-2'}`}
                />
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className={`absolute inset-0 ${darkMode ? 'bg-blue-900/20' : 'bg-blue-100/50'}`}></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <FadeInSection>
                <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Ready to Scale?</h2>
                <p className={`text-xl mb-10 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Join over 500+ forward-thinking companies automating their future with NEXOZ today.</p>
                <button 
                    onClick={() => setBuilderOpen(true)}
                    className={`px-10 py-5 text-xl font-bold rounded-full shadow-2xl transition-transform hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
                >
                    Get Started Now <Rocket size={24} />
                </button>
            </FadeInSection>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className={`py-12 px-6 border-t backdrop-blur-md ${darkMode ? 'border-white/10 bg-black/40' : 'border-black/5 bg-white/80'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Zap size={20} className={darkMode ? 'text-white' : 'text-black'} />
            <span className="font-black text-xl tracking-tighter">NEXOZ</span>
          </div>
          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            © {new Date().getFullYear()} NEXOZ Automation Inc. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Globe size={20} className="hover:text-blue-500 cursor-pointer transition-colors" />
            <MessageSquare size={20} className="hover:text-blue-500 cursor-pointer transition-colors" />
            <Command size={20} className="hover:text-blue-500 cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
}
