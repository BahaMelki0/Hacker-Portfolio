import { mergeContent } from './content';
import fallback from '../data/portfolio';

test('a failed section preserves fallback without discarding successful remote content', () => {
  const results = [{ data: { name: 'Bahaeddine Melki', bio: 'Updated biography' } }, { error: true }, { error: true }, { error: true }, { error: true }, { data: [{ id: 'remote', name: 'Remote project', stack: null }] }, { error: true }];
  const data = mergeContent(fallback, results);
  expect(data.bio).toBe('Updated biography');
  expect(data.projects[0].name).toBe('Remote project');
  expect(data.projects[0].stack).toEqual([]);
  expect(data.skills).toEqual(fallback.skills);
  expect(data.contact.email).toBe(fallback.contact.email);
});

test('a successful empty table remains empty and null arrays are safe', () => {
  const data = mergeContent(fallback, [{ error: true }, { error: true }, { error: true }, { error: true }, { data: [] }, { data: [] }, { data: [{ role: 'Example', bullets: null }] }]);
  expect(data.projects).toEqual([]);
  expect(data.skills).toEqual({});
  expect(data.experience[0].bullets).toEqual([]);
});
