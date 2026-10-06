export function mergeContent(fallback, results) {
  const [profile, taglines, terminal, kv, skills, projects, experience] = results;
  const data = { ...fallback };
  if (!profile?.error && profile?.data && typeof profile.data === 'object') {
    for (const key of ['name', 'handle', 'locale', 'bio']) {
      if (typeof profile.data[key] === 'string' && profile.data[key].trim()) data[key] = profile.data[key];
    }
    data.contact = { ...fallback.contact };
    for (const key of ['email', 'github', 'linkedin', 'pgp']) {
      if (profile.data[key] !== undefined) data.contact[key] = profile.data[key];
    }
  }
  const rows = (result) => !result?.error && Array.isArray(result?.data);
  if (rows(taglines)) data.taglines = taglines.data.map(t => t.text).filter(t => typeof t === 'string');
  if (rows(terminal)) data.terminalDemo = terminal.data.map(t => ({ cmd: t.cmd || '', out: t.out || '' }));
  if (rows(kv)) data.profile = kv.data.map(t => ({ key: t.key, val: t.val }));
  if (rows(skills)) {
    data.skills = Object.create(null);
    for (const row of skills.data) {
      if (typeof row.category !== 'string' || typeof row.name !== 'string') continue;
      (data.skills[row.category] ||= []).push(row.name);
    }
  }
  if (rows(projects)) data.projects = projects.data.filter(p => typeof p.name === 'string' && typeof p.id === 'string').map(p => ({
    id: p.id, name: p.name, cat: p.cat || 'Security', year: p.year || '', nda: Boolean(p.nda),
    summary: p.summary || '', stack: Array.isArray(p.stack) ? p.stack : [], status: p.status || 'active', ghLink: p.gh_link,
  }));
  if (rows(experience)) data.experience = experience.data.map(e => ({
    role: e.role || '', org: e.org || '', date: e.date || '', bullets: Array.isArray(e.bullets) ? e.bullets : [],
  }));
  return data;
}
