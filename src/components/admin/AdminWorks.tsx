import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2, Upload, X } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";
import { toast } from "sonner";

const AdminWorks = () => {
  const [works, setWorks] = useState<Tables<"works">[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({ title: "", category: "", description: "" });
  const [imageFile, setImageFile] = useState<File | null>(null);

  const fetchWorks = async () => {
    const { data } = await supabase.from("works").select("*").order("created_at", { ascending: false });
    setWorks(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchWorks(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.category.trim()) return;
    setUploading(true);

    let image_url: string | null = null;

    if (imageFile) {
      const ext = imageFile.name.split(".").pop();
      const path = `${crypto.randomUUID()}.${ext}`;
      const { error: uploadError } = await supabase.storage.from("works").upload(path, imageFile);
      if (uploadError) {
        toast.error("Image upload failed");
        setUploading(false);
        return;
      }
      const { data: urlData } = supabase.storage.from("works").getPublicUrl(path);
      image_url = urlData.publicUrl;
    }

    const { error } = await supabase.from("works").insert({
      title: form.title.trim(),
      category: form.category.trim(),
      description: form.description.trim() || null,
      image_url,
    });

    if (error) {
      toast.error("Failed to add work");
    } else {
      toast.success("Work added!");
      setForm({ title: "", category: "", description: "" });
      setImageFile(null);
      setShowForm(false);
      fetchWorks();
    }
    setUploading(false);
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("works").delete().eq("id", id);
    if (!error) {
      toast.success("Work deleted");
      fetchWorks();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-2xl font-bold text-primary">Portfolio Works</h2>
        <Button variant="cta" onClick={() => setShowForm(!showForm)}>
          {showForm ? <X className="w-4 h-4 mr-1" /> : <Plus className="w-4 h-4 mr-1" />}
          {showForm ? "Cancel" : "Add Work"}
        </Button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-6 mb-8 border border-border space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-primary block mb-1">Title</label>
              <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required maxLength={100} />
            </div>
            <div>
              <label className="text-sm font-medium text-primary block mb-1">Category</label>
              <Input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="e.g. Logo Design" required maxLength={50} />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-primary block mb-1">Description</label>
            <Input value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} maxLength={500} />
          </div>
          <div>
            <label className="text-sm font-medium text-primary block mb-1">Image</label>
            <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} className="text-sm" />
          </div>
          <Button type="submit" variant="cta" disabled={uploading}>
            <Upload className="w-4 h-4 mr-1" />
            {uploading ? "Uploading..." : "Save Work"}
          </Button>
        </form>
      )}

      {loading ? (
        <p className="text-muted-foreground">Loading...</p>
      ) : works.length === 0 ? (
        <div className="bg-background rounded-2xl p-12 text-center border border-border">
          <p className="text-muted-foreground">No works yet. Add your first portfolio piece!</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {works.map((work) => (
            <div key={work.id} className="bg-background rounded-xl border border-border overflow-hidden">
              {work.image_url && (
                <img src={work.image_url} alt={work.title} className="w-full h-40 object-cover" />
              )}
              <div className="p-4">
                <span className="text-xs text-secondary font-bold uppercase">{work.category}</span>
                <h3 className="font-heading text-sm font-bold text-primary mt-1">{work.title}</h3>
                {work.description && <p className="text-xs text-muted-foreground mt-1">{work.description}</p>}
                <Button variant="ghost" size="sm" className="mt-2 text-destructive hover:bg-destructive/10" onClick={() => handleDelete(work.id)}>
                  <Trash2 className="w-3 h-3 mr-1" /> Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminWorks;
