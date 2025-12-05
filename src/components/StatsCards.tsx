import { DollarSign, Users, CreditCard, Activity } from "lucide-react";


const stats = [
    {
        title: "Total Revenue",
        value: "$45,231.89",
        change: "+20.1% from last month",
        icon: DollarSign,
    },
    {
        title: "Subscriptions",
        value: "+2350",
        change: "+180.1% from last month",
        icon: Users,
    },
    {
        title: "Sales",
        value: "+12,234",
        change: "+19% from last month",
        icon: CreditCard,
    },
    {
        title: "Active Now",
        value: "+573",
        change: "+201 since last hour",
        icon: Activity,
    },
];

export default function StatsCards(){
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => (
                <div key={index} className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h3 className="text-sm font-medium text-gray-500">{item.title}</h3>
                        <item.icon className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="mt-2">
                        <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                        <p className="text-xs text-gray-500 mt-1">{item.change}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}