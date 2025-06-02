export const TICKET_DATA = {
  breadcrumb: ["Project", "UrapidLoan Project", "[Ticket name]"],
  description: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ],
  properties: [
    { label: "Status", value: "In-Progress", type: "badge" },
    { label: "Priority", value: "Critical", type: "badge" },
    { label: "Assignee", value: "Trangnt", type: "text" },
    { label: "Type", value: "Bug", type: "text" },
    { label: "Started date", value: "2025-04-04", type: "text" },
    { label: "Target date", value: "2025-04-04", type: "text" },
  ],
};

export const INITIAL_ACTIVITIES = [
  {
    user: "RFX David Nguyen",
    action: "Submitted to underwriting",
    timestamp: "2025-04-04 13:00:38",
    type: "success",
  },
  {
    user: "ABC Lisa Rose",
    action: "approval",
    timestamp: "2025-04-04 11:10:38",
    type: "info",
  },
  {
    user: "RFX David Nguyen",
    action: "Submitted to underwriting",
    timestamp: "2025-04-04 08:00:00",
    type: "success",
  },
  {
    user: "ABC Lisa Rose",
    action: "create an issue",
    timestamp: "2025-04-03 17:10:38",
    type: "info",
  },
];

export const users = [
  {
    id: "LO00001",
    name: "Mr. David Nguyen",
    phone: "(322) 243-3452",
    email: "david.nguyen@gmail.com",
    type: "Loan Officer",
    experience: "5 years",
    status: "ACTIVE",
    avatar: "/06aaf3833d66c0acb1f363158adc317a8e4cb56e.png",
  },
  {
    id: "UW00001",
    name: "Ms. Jennie Pink",
    phone: "(322) 243-3452",
    email: "jenniepink@gmail.com",
    type: "Underwriter",
    experience: "5 years",
    status: "ACTIVE",
    avatar: "/71258f51fed05c4811762f266347c1c80be6818b.png",
  },
  {
    id: "LP00001",
    name: "Mr. Pep Guardiola",
    phone: "(322) 243-3452",
    email: "pepguardiola@gmail.com",
    type: "Loan Processor",
    experience: "5 years",
    status: "ACTIVE",
    avatar: "/ba67dce78ad10c9956dec1231cbb6ca51f187032.png",
  },
  {
    id: "AD00001",
    name: "Mr. Bruno Mar",
    phone: "(322) 243-3452",
    email: "brunomar@gmail.com",
    type: "Admin",
    experience: "5 years",
    status: "ACTIVE",
    avatar: "/3041e26e09af87bee8c9307b00e0a0061d502ae9.png",
  },
  {
    id: "MR00001",
    name: "Mr. David Beckham",
    phone: "(322) 243-3452",
    email: "davidbeckham@gmail.com",
    type: "Member",
    experience: "5 years",
    status: "ACTIVE",
    avatar: "/3de2986024566de6b6aa71734caa4f2a3f7260c8.png",
  },
];

// User Management Constants
export const USER_TABLE_HEADERS = [
  { key: "checkbox", label: "checkbox" },
  { key: "user", label: "User Name\nUser ID" },
  { key: "contact", label: "Contact Info" },
  { key: "type", label: "Type" },
  { key: "experience", label: "Experience" },
  { key: "status", label: "Status" },
];

export const LOAN_TABLE_HEADERS = [
  { key: "index", label: "Index" },
  { key: "borrower", label: "Borrower Name\nLoan ID" },
  { key: "lender", label: "Lender\nInterest Rate" },
  { key: "process", label: "Process" },
  { key: "status", label: "Status" },
  { key: "action", label: "Action" },
];

export const GENERAL_INFO_FIELDS = [
  { key: "firstName", label: "First Name", value: "David" },
  { key: "lastName", label: "Last Name", value: "Nguyen" },
  { key: "experience", label: "Experience", value: "5 years" },
  {
    key: "website",
    label: "Personal Website",
    value: "david.com",
    isLink: true,
  },
];

export const TODO_ITEMS = [
  {
    id: "review",
    label: "Review Loan Applications",
    checked: false,
    hasLink: true,
  },
  {
    id: "contact",
    label: "Contact to Borrower",
    checked: false,
    hasLink: true,
  },
  {
    id: "add",
    label: "Click to add new to-do",
    checked: false,
    disabled: true,
    strikethrough: true,
  },
];

export const CARD_SECTIONS = [
  {
    id: "general",
    title: "GENERAL INFORMATION",
    icon: "/Books.png",
    type: "info",
  },
  {
    id: "commission",
    title: "% COMMISSION STRUCTURES",
    type: "restricted",
    message: "You don't have permission to open this link",
  },
  {
    id: "recruitment",
    title: "RECRUITMENT DOCUMENTS",
    type: "external",
    hasExternalLink: true,
  },
  { id: "documents", title: "RELATED CLIENTS & LOAN DOCUMENTS", type: "table" },
  { id: "performance", title: "PERFORMANCE", type: "empty" },
  { id: "todo", title: "TO-DO", type: "checklist" },
];

export const LOAN_DOCUMENTS = [
  {
    index: "01",
    borrowerName: "Ms. Hang Nguyen",
    loanId: "#LA00001",
    lender: "AD Mortgage",
    interestRate: "6% (6.168% APR)",
    process: 68,
    status: "IN PROGRESS",
  },
  {
    index: "02",
    borrowerName: "Ms. Hang Nguyen",
    loanId: "#LA00001",
    lender: "AD Mortgage",
    interestRate: "6% (6.168% APR)",
    process: 68,
    status: "IN PROGRESS",
  },
];

export const USER_TYPES = [
  "Loan Officer",
  "Underwriter",
  "Loan Processor",
  "Admin",
  "Member",
];

export const STATUS_OPTIONS = ["All", "Active", "Inactive"];

// Estimator Constants
export const WORK_PACKAGES = [
  {
    id: 1,
    title: "Work package 1",
    description:
      "Define system structure, technology stack, and integration flow. Includes do...",
  },
  {
    id: 2,
    title: "Work package 2",
    description:
      "Build a modern single-page application (SPA) using SvelteKit, integrated with ...",
  },
  {
    id: 3,
    title: "Work package 3",
    description:
      "Set up continuous integration and deployment pipeline using GitHub acti...",
  },
  {
    id: 4,
    title: "Work package 4",
    description:
      "Identify and document business processes, user roles, and key feature...",
  },
  {
    id: 5,
    title: "Work package 5",
    description:
      "Define overall architecture, services layout, tech stack, and database strate ...",
  },
  {
    id: 6,
    title: "Work package 6",
    description:
      "Design complex data relationships, event flows (CQRS/Event Sourcing), and ...",
  },
  {
    id: 7,
    title: "Work package 7",
    description:
      "Deliver wireframes and high-fidelity designs for key screens using Figma ...",
  },
  {
    id: 8,
    title: "Work package 8",
    description:
      "Develop frontend using SvelteKit integrated with a CMS like Directus or ...",
  },
  {
    id: 9,
    title: "Work package 9",
    description:
      "Implement domain-driven backend API with authentication, user roles, and ...",
  },
];

export const WP_CATEGORIES = [
  "All Work Packages",
  "Electrical",
  "Plumbing",
  "HVAC",
  "General",
  "Controls",
  "Data",
  "Testing",
  "Commissioning",
  "Architectural",
];
