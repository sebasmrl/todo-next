// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12
import { Sidebar, TopMenu } from '@/components';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />    
      {/* Main Layout content - Contenido principal del Layout */}
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] "> {/* min-h-screen */}
        <TopMenu />
        <div className="px-6 pt-6 bg-gray-100 bg-opacity-50 min-h-screen rounded  overflow-y-auto">
            {children}
        </div>
        
      </div>
    </>
  );
}