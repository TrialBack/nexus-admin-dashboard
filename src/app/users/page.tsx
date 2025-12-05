"use client";

import { MoreHorizontal, Plus, Search } from "lucide-react";

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: "Active" | "Inactive";
    lastLogin: string;
}

const users: User[] = [
  { id: 1, name: "Ahmet Yılmaz", email: "ahmet@nexus.com", role: "Admin", status: "Active", lastLogin: "2 mins ago" },
  { id: 2, name: "Ayşe Demir", email: "ayse@company.com", role: "Editor", status: "Active", lastLogin: "1 hour ago" },
  { id: 3, name: "Mehmet Kaya", email: "mehmet@demo.com", role: "Viewer", status: "Inactive", lastLogin: "2 days ago" },
  { id: 4, name: "Zeynep Çelik", email: "zeynep@test.com", role: "Editor", status: "Active", lastLogin: "5 hours ago" },
  { id: 5, name: "Can Yücel", email: "can@nexus.com", role: "Admin", status: "Active", lastLogin: "1 day ago" },
  { id: 6, name: "Elif Şahin", email: "elif@client.com", role: "Viewer", status: "Inactive", lastLogin: "1 week ago" },
];

export default function UsersPage() {
    return (
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">Users</h1>
                <p className="text-sm text-gray-500">Manage your team members and their account permissions here.</p>
            </div>
            <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors">
                <Plus size={16} />
                Add New User
            </button>
        </div>
        
        <div className="rounded-xl border bg-white p-4 shadow-sm">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                type="text"
                placeholder="Search users..."
                className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
            </div>
        </div>

        <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-500">
                    <thead className="bg-gray-50 text-xs uppercase text-gray-700">
                        <tr>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Role</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Last Login</th>
                            <th className="px-6 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900">{user.name}</div>
                                            <div className="text-gray-500 text-xs">{user.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                    {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                        user.status === "Active"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-gray-100 text-gray-800"
                                    }`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    {user.lastLogin}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gray-400 hover:text-gray-600">
                                        <MoreHorizontal size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
     </div>    
    );
}