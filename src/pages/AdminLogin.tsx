import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import logo from "@/assets/logo.jpg";
import { Lock } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user, isAdmin, loading: authLoading } = useAuth();

  useEffect(() => {
    if (!authLoading && user && isAdmin) {
      navigate("/admin");
    }
  }, [user, isAdmin, authLoading, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }

    // Wait briefly for auth state to update and role check
    setTimeout(async () => {
      const { data: { user: currentUser } } = await supabase.auth.getUser();
      if (currentUser) {
        const { data: roleData } = await supabase.rpc("has_role", {
          _user_id: currentUser.id,
          _role: "admin" as const,
        });
        if (roleData) {
          navigate("/admin");
        } else {
          setError("Access denied. Admin privileges required.");
          await supabase.auth.signOut();
        }
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src={logo} alt="Saym IT Solution" className="h-16 w-16 mx-auto mb-4" />
          <h1 className="font-heading text-2xl font-bold text-primary-foreground">
            Admin Dashboard
          </h1>
          <p className="text-primary-foreground/60 text-sm mt-1">Restricted Access</p>
        </div>

        <form
          onSubmit={handleLogin}
          className="bg-primary-foreground/5 backdrop-blur-xl border border-primary-foreground/10 rounded-2xl p-8 space-y-5"
        >
          <div className="flex items-center gap-2 text-secondary text-xs font-bold tracking-widest uppercase mb-2">
            <Lock className="w-4 h-4" />
            Sign In
          </div>

          {error && (
            <div className="bg-destructive/20 text-destructive border border-destructive/30 rounded-lg p-3 text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="text-primary-foreground/70 text-xs font-medium block mb-1.5">
              Email
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@email.com"
              required
              maxLength={255}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30"
            />
          </div>

          <div>
            <label className="text-primary-foreground/70 text-xs font-medium block mb-1.5">
              Password
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30"
            />
          </div>

          <Button
            type="submit"
            variant="cta"
            className="w-full"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>

          <a
            href="/"
            className="block text-center text-primary-foreground/50 text-xs hover:text-secondary transition-colors"
          >
            ← Back to website
          </a>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
