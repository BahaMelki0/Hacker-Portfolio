import React, { createContext, useContext, useEffect, useState } from "react";
import supabase from "../lib/supabase";
import FALLBACK from "../data/portfolio";

const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [data, setData] = useState(FALLBACK);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAll() {
      if (!supabase) { setLoading(false); return; }
      try {
        const [
          { data: profile, error: e1 },
          { data: taglines, error: e2 },
          { data: terminalDemo, error: e3 },
          { data: profileKv, error: e4 },
          { data: skills, error: e5 },
          { data: projects, error: e6 },
          { data: experience, error: e7 },
        ] = await Promise.all([
          supabase.from("profile").select("*").single(),
          supabase.from("taglines").select("*").order("ord"),
          supabase.from("terminal_demo").select("*").order("ord"),
          supabase.from("profile_kv").select("*").order("ord"),
          supabase.from("skills").select("*").order("ord"),
          supabase.from("projects").select("*").order("ord"),
          supabase.from("experience").select("*").order("ord"),
        ]);

        if (e1 || e2 || e3 || e4 || e5 || e6 || e7) throw new Error("fetch failed");

        const skillsByCategory = {};
        skills.forEach(({ category, name }) => {
          if (!skillsByCategory[category]) skillsByCategory[category] = [];
          skillsByCategory[category].push(name);
        });

        setData({
          name: profile.name,
          handle: profile.handle,
          locale: profile.locale,
          bio: profile.bio,
          taglines: taglines.map((t) => t.text),
          terminalDemo: terminalDemo.map((t) => ({ cmd: t.cmd, out: t.out })),
          profile: profileKv.map((kv) => ({ key: kv.key, val: kv.val })),
          skills: skillsByCategory,
          projects: projects.map((p) => ({
            id: p.id,
            name: p.name,
            cat: p.cat,
            year: p.year,
            nda: p.nda,
            summary: p.summary,
            stack: p.stack,
            status: p.status,
            ghLink: p.gh_link,
          })),
          experience: experience.map((e) => ({
            role: e.role,
            org: e.org,
            date: e.date,
            bullets: e.bullets,
          })),
          contact: {
            email: profile.email,
            github: profile.github,
            linkedin: profile.linkedin,
            pgp: profile.pgp,
          },
        });
      } catch {
        // silently use fallback data
      } finally {
        setLoading(false);
      }
    }

    fetchAll();
  }, []);

  return (
    <PortfolioContext.Provider value={{ data, loading }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  return useContext(PortfolioContext);
}
