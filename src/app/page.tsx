import OverviewChart from "@/components/OverviewChart"
import StatsCards from "@/components/StatsCards"

export default function Home() {
  return(
    <div className="space-y-6">
      <StatsCards />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <OverviewChart />
        </div>
        <div className="col-span-3 rounded-xl border bg-white p-6 shadow-sm h-fit">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Recent Sales</h3>
            <p className="text-sm text-gray-500">You made 265 sales this month.</p>
          </div>
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                    {String.fromCharCode(64 + i)}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none text-gray-900">User {i}</p>
                    <p className="text-xs text-gray-500">user{i}@nexus.com</p>
                  </div>
                </div>
                <div className="font-medium text-sm text-gray-900">+$1,999.00</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}