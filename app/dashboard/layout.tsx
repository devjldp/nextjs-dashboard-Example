// Importando mi componente
import SideNav from '@/app/ui/dashboard/sidenav';

export default function DashboardLayout(
    // Recibe como argumento el componente hijo, lo que envuelve 
    // y lo segundo es el tipado
    {children,}: {children: React.ReactNode;}) {
        
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
          );
  }