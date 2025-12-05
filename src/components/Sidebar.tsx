"use client";

import { LayoutDashboard, Users, Settings, BarChart3, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Users", icon: Users, path: "/users" },
    { name: "Analytics", icon: BarChart3, path: "/analytics" },
    { name: "Settings", icon: Settings, path: "/settings" },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex h-screen w-64 flex-col justify-between border-r bg-gray-900 text-white">
            <div className="p-6">
                {/* Düzeltme: Span içine Admin eklendi */}
                <h1 className="text-2xl font-bold text-blue-500">Nexus<span className="text-white">Admin</span></h1>
            </div>
            
            <nav className="flex-1 space-y-2 px-4 py-4">
                {menuItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                                isActive
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                            }`}
                        >
                            <item.icon size={20} />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="border-t border-gray-800 p-4">
                {/* Düzeltme: transtion -> transition */}
                <button className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
                    <LogOut size={20} />
                    Logout
                </button>
            </div>
        </div>
    );
}