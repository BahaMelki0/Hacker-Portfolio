import React, { createContext, useContext, useEffect, useState } from "react";
import supabase from "../lib/supabase";
import FALLBACK from "../data/portfolio";
import { mergeContent } from "../lib/content";

const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [data, setData] = useState(FALLBACK);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!supabase) { setLoading(false); return; }
    let active = true;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    async function fetchAll() {
      try {
        const results = await Promise.allSettled([
          supabase.from("profile").select("*").single().abortSignal(controller.signal),
          ...["taglines", "terminal_demo", "profile_kv", "skills", "projects", "experience"].map(table =>
            supabase.from(table).select("*").order("ord").abortSignal(controller.signal)),
        ]);
        if (active) setData(mergeContent(FALLBACK, results.map(r => r.status === "fulfilled" ? r.value : { error: true })));
      } catch {
        // Preserve curated content if the client cannot initialize its requests.
      } finally {
        clearTimeout(timeout);
        if (active) setLoading(false);
      }
    }
    fetchAll();
    return () => { active = false; clearTimeout(timeout); controller.abort(); };
  }, []);
  return <PortfolioContext.Provider value={{ data, loading }}>{children}</PortfolioContext.Provider>;
}

export function usePortfolio() { return useContext(PortfolioContext); }
