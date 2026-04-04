export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqCategories = {
  product: [
    {
      id: 'product-1',
      question: 'What is TalepNET?',
      answer:
        'TalepNET is procurement software that helps organizations manage requests, approvals, sourcing, suppliers, purchase orders, receiving, budgets, and spend visibility in one connected workflow.',
    },
    {
      id: 'product-2',
      question: 'Is TalepNET an online marketplace or procurement software?',
      answer:
        'TalepNET is primarily procurement software. It is designed to help organizations control purchasing workflows, while also supporting supplier-facing collaboration through portal and marketplace-style interactions where relevant.',
    },
    {
      id: 'product-3',
      question: 'What processes can I manage with TalepNET?',
      answer:
        'Teams can manage purchase requests, approval workflows, supplier coordination, quotation comparison, purchase orders, receiving, budget-aware controls, and procurement reporting from a single system.',
    },
    {
      id: 'product-4',
      question: 'How does the onboarding process work?',
      answer:
        'Onboarding is designed to help teams get operational quickly. Depending on scope, this can include workspace setup, process configuration, initial data preparation, and rollout guidance for the relevant stakeholders.',
    },
    {
      id: 'product-5',
      question: 'Does TalepNET support system integrations?',
      answer:
        'Yes. TalepNET can support integration needs across finance, ERP, and related systems depending on the rollout scope and technical requirements.',
    },
  ],
  pricing: [
    {
      id: 'pricing-1',
      question: 'What pricing plans are available?',
      answer:
        'TalepNET currently supports a free starting point for 1 user, followed by Team, Business, and Enterprise options depending on workflow depth, operational scale, reporting, security, and rollout requirements.',
    },
    {
      id: 'pricing-2',
      question: 'Are there any setup fees?',
      answer:
        'Setup depends on the scope of the rollout. Smaller teams can start more simply, while broader implementations, configuration work, or integration needs may involve additional setup planning.',
    },
    {
      id: 'pricing-3',
      question: 'Can I try TalepNET for free?',
      answer:
        'Yes. TalepNET supports a free starting point for 1 user so teams can begin exploring the platform before expanding access.',
    },
    {
      id: 'pricing-4',
      question: 'Can I get a custom plan for a large number of users?',
      answer:
        'Yes. Larger teams, multi-entity organizations, and more complex procurement environments can be supported through a tailored Enterprise setup.',
    },
    {
      id: 'pricing-5',
      question: 'Can I change my plan later?',
      answer:
        'Yes. Teams can move into a higher plan as usage, workflow complexity, reporting needs, or security requirements grow.',
    },
  ],
  security: [
    {
      id: 'security-1',
      question: 'How does TalepNET ensure data security?',
      answer:
        'TalepNET is designed with controlled access, workflow traceability, and role-aware procurement records in mind. Security capabilities can expand further depending on the plan and rollout scope.',
    },
    {
      id: 'security-2',
      question: 'Where is my data stored?',
      answer:
        'Data storage and environment details depend on the deployment and service setup. If your team has specific hosting, compliance, or security requirements, TalepNET can discuss those during evaluation.',
    },
    {
      id: 'security-3',
      question: 'Can I export or delete my data?',
      answer:
        'Data access, export, and deletion requests can be handled based on the account setup and applicable policies. If your organization has specific requirements, the right process can be discussed directly.',
    },
    {
      id: 'security-4',
      question: 'What data does TalepNET collect?',
      answer:
        'Depending on the account and workflow usage, TalepNET may process account information, operational usage data, procurement records, and support-related information needed to provide the service effectively.',
    },
    {
      id: 'security-5',
      question: 'Can I request that my data be deleted?',
      answer:
        'Yes. If your organization needs data deletion or account-level cleanup, the request can be handled through the appropriate support and compliance process.',
    },
    {
      id: 'security-6',
      question: 'How does TalepNET handle cookies?',
      answer:
        'TalepNET uses cookies and similar technologies to support session continuity, platform functionality, and selected analytics needs. Cookie usage can be reviewed through the site policy and managed through browser settings where applicable.',
    },
  ],
  marketplace: [
    {
      id: 'marketplace-1',
      question: 'How qualified are the leads I receive through TalepNET?',
      answer:
        'Lead quality depends on the buyer demand entering the workflow. TalepNET is designed to create more structured supplier interaction so incoming opportunities are clearer and easier to evaluate.',
    },
    {
      id: 'marketplace-2',
      question: 'Do I need to respond to customers through TalepNET?',
      answer:
        'TalepNET is designed to make supplier response easier inside the platform, especially for RFQs, order follow-up, and related commercial interactions. Using the structured workflow helps both sides keep better visibility.',
    },
    {
      id: 'marketplace-3',
      question: 'Does TalepNET charge a commission on sales?',
      answer:
        'Commercial terms depend on the specific model and partnership structure involved. If your team is evaluating supplier-side participation, the right setup can be discussed directly.',
    },
    {
      id: 'marketplace-4',
      question: 'Is my quotation data confidential?',
      answer:
        'TalepNET is designed to keep procurement records and supplier interactions structured inside the platform rather than scattered across disconnected channels. Quotation visibility follows the workflow and access model defined in the system.',
    },
    {
      id: 'marketplace-5',
      question: 'Does TalepNET guarantee payment from buyers?',
      answer:
        'No. TalepNET supports procurement and supplier collaboration workflows, but it does not act as a payment guarantor between buyers and suppliers.',
    },
    {
      id: 'marketplace-6',
      question: 'We already work with major enterprises. How can TalepNET help us further?',
      answer:
        'TalepNET can help extend those relationships through more structured RFQ handling, supplier portal workflows, order visibility, agreement alignment, and cleaner buyer-supplier collaboration over time.',
    },
  ],
} satisfies Record<string, FaqItem[]>;
