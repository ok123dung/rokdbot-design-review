import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Gamepad2, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError("Invalid credentials");
      setLoading(false);
      return;
    }

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setError("Authentication failed");
      setLoading(false);
      return;
    }

    const { data: roleData } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .eq("role", "admin")
      .maybeSingle();

    if (!roleData) {
      setError("Access denied — admin only");
      await supabase.auth.signOut();
      setLoading(false);
      return;
    }

    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Gamepad2 className="w-10 h-10 text-sky-400 mx-auto mb-3" />
          <h1 className="text-2xl font-bold text-sky-400">Admin Login</h1>
          <p className="text-[#94a3b8] text-sm mt-1">RokdBot Management</p>
        </div>

        <form onSubmit={handleLogin} className="bg-[#1e293b]/70 border border-white/10 rounded-xl p-6 space-y-4">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-2 text-red-400 text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm text-[#f1f5f9] mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#0f172a]/50 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-[#64748b] focus:border-sky-400 focus:outline-none"
              placeholder="admin@rokdbot.com"
            />
          </div>

          <div>
            <label className="block text-sm text-[#f1f5f9] mb-1.5">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-[#0f172a]/50 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-[#64748b] focus:border-sky-400 focus:outline-none"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-lg py-2.5 hover:shadow-lg hover:shadow-sky-500/30 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          <a href="/" className="text-[#94a3b8] hover:text-sky-400 text-sm transition">&larr; Back to shop</a>
        </p>
      </div>
    </div>
  );
}
