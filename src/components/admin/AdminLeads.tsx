import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { toast } from "sonner";
import { Mail, Phone, Briefcase, Clock, CheckCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const statusColors: Record<string, string> = {
  new: "bg-secondary/15 text-secondary",
  contacted: "bg-blue-100 text-blue-700",
  converted: "bg-green-100 text-green-700",
  closed: "bg-muted text-muted-foreground",
};

const AdminLeads = () => {
  const [leads, setLeads] = useState<Tables<"leads">[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    const { data } = await supabase.from("leads").select("*").order("created_at", { ascending: false });
    setLeads(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchLeads(); }, []);

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("leads").update({ status }).eq("id", id);
    if (!error) {
      toast.success(`Status updated to ${status}`);
      fetchLeads();
    }
  };

  const deleteLead = async (id: string) => {
    const { error } = await supabase.from("leads").delete().eq("id", id);
    if (!error) {
      toast.success("Lead deleted");
      fetchLeads();
    }
  };

  if (loading) return <p className="text-muted-foreground">Loading...</p>;

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-primary mb-6">
        Leads ({leads.length})
      </h2>

      {leads.length === 0 ? (
        <div className="bg-background rounded-2xl p-12 text-center border border-border">
          <p className="text-muted-foreground">No leads yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {leads.map((lead) => (
            <div key={lead.id} className="bg-background rounded-xl border border-border p-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-heading text-base font-bold text-primary">{lead.name}</h3>
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${statusColors[lead.status] || statusColors.new}`}>
                      {lead.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    {lead.email && (
                      <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {lead.email}</span>
                    )}
                    {lead.phone && (
                      <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {lead.phone}</span>
                    )}
                    {lead.service && (
                      <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {lead.service}</span>
                    )}
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {new Date(lead.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  {lead.message && (
                    <p className="text-sm text-muted-foreground mt-2 bg-muted p-3 rounded-lg">{lead.message}</p>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {["new", "contacted", "converted", "closed"].map((s) => (
                    <button
                      key={s}
                      onClick={() => updateStatus(lead.id, s)}
                      className={`text-xs px-2.5 py-1 rounded-lg border transition-all ${
                        lead.status === s
                          ? "border-secondary bg-secondary/10 text-secondary font-bold"
                          : "border-border text-muted-foreground hover:border-secondary/40"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                  <Button variant="ghost" size="sm" className="text-destructive hover:bg-destructive/10" onClick={() => deleteLead(lead.id)}>
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminLeads;
