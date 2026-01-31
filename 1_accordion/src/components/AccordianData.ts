
type AccordianProps = {
    id: number;
    title: string;
    description: string
}
export const AccordianData: AccordianProps[] = [
        {
            id: 1,
            title: "How does  billing work ",
            description: "We offer monthly and annual subscription plans. Billing is charged at the beginning of each cycle, and you can cancel anytime. All plans include automatic backups, 24/7 support, and unlimited team members. There are no hidden fees or setup costs.",
        },
        {
            id: 2,
            title: "Is my data secure?",
            description: "Yes. We use end-to-end encryption, SOC 2 Type II compliance, and regular third-party security audits. All data is encrypted at rest and in transit using industry-standard protocols. We also offer optional two-factor authentication and single sign-on for enterprise customers.",
        },
        {
            id: 3,
            title: "What integration do you support?",
            description: `We integrate with 500+ popular tools including Slack, Zapier, Salesforce, HubSpot, and more. You can also build custom integrations using our REST API and webhooks.`,
        },
    ]