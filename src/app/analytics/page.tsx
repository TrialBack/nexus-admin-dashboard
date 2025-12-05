import { BarChart3 } from "lucide-react";

export default function AnalyticsPage() {
    return(
        <div className="flex h-[80vh] w-full flex-col items-center justify-center rounded-xl border bg-white shadow-sm">
            <div className="rounded-full bg-blue-50 p-6">
                <BarChart3 size={48} className="text-blue-500" />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-gray-800">Analytics Coming Soon</h2>
            <p className="mt-2 text-gray-500">We are working hard to bring you advanced data insights.</p>
        </div>
    );
}