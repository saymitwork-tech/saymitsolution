import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, Briefcase, Users, LayoutDashboard } from "lucide-react";
import logo from "@/assets/logo.png";
import AdminWorks from "@/components/admin/AdminWorks";
import AdminLeads from "@/components/admin/AdminLeads";

const AdminDashboard = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState<"works" | "leads">("works");

  if (loading) {
    return (
      <div className="min-h-screen bg-muted flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  const tabs = [
    { id: "works" as const, label: "Works", icon: Briefcase },
    { id: "leads" as const, label: "Leads", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-muted">
      {/* Topbar */}
      <header className="bg-primary shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-8 w-8" />
            <div>
              <span className="font-heading text-sm font-bold text-primary-foreground">
                Admin Dashboard
              </span>
              <p className="text-primary-foreground/50 text-xs">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" className="text-primary-foreground/60 text-xs hover:text-secondary transition-colors">
              View Site
            </a>
            <Button variant="ghost" size="sm" onClick={signOut} className="text-primary-foreground/60 hover:text-destructive hover:bg-destructive/10">
              <LogOut className="w-4 h-4 mr-1" /> Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-heading text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-secondary text-secondary-foreground shadow-md"
                  : "bg-background text-muted-foreground hover:bg-background/80"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "works" && <AdminWorks />}
        {activeTab === "leads" && <AdminLeads />}
      </div>
    </div>
  );
};

export default AdminDashboard;
