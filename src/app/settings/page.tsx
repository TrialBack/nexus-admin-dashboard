import { Settings } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="flex h-[80vh] w-full flex-col items-center justify-center rounded-xl border bg-white shadow-sm">
            <div className="rounded-full bg-gray-100 p-6">
                <Settings size={48} className="text-gray-500" />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-gray-800">Settings</h2>
            <p className="mt-2 text-gray-500">System configuration options will appear here.</p>
        </div>
    );
}