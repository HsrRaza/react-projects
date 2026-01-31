import { useState } from "react";

type AccordianProps = {
    id: number;
    title: string;
    description: string
}

const Accordian = () => {


    const data: AccordianProps[] = [
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






    return (
        <div className="w-200 h-auto p-4 ">

            {
                data.map(({ title, description }) => (
                    <Accord title={title} content={description} />
                ))
            }

        </div>
    )
}

export default Accordian

interface AccordProps {
    title: string;
    content: string;
}

const Accord = ({ title, content }: AccordProps) => {
    const [isActive, setActive] = useState(false)

    return <>
        <div className="border border-zinc-400 mb-4 p-4  rounded-xl" 
        onClick={() => setActive(!isActive)}>

                <h2 className="text-xl hover:underline cursor-pointer ">{title} </h2>

            
            <div className={` mt-4 transition-all duration-300 ease-in ${isActive ? "opacity-100 max-h-40": "opacity-0 max-h-0"} overflow-hidden`}>

                <p className= "text-md text-zinc-300">{content}</p>


            </div>

        </div>
    </>
}