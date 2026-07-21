export const GITHUB_USERNAME = "khushaan18";

export type GithubUser = {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  created_at: string;
};

export type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  pushed_at: string;
  fork: boolean;
  topics?: string[];
};

const GITHUB_API = "https://api.github.com";

async function githubFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${GITHUB_API}${path}`, {
    headers: { Accept: "application/vnd.github+json" },
    // Client-side fetch — always pulls the current state of the profile.
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export function fetchGithubUser(username: string = GITHUB_USERNAME) {
  return githubFetch<GithubUser>(`/users/${username}`);
}

export function fetchGithubRepos(username: string = GITHUB_USERNAME) {
  return githubFetch<GithubRepo[]>(
    `/users/${username}/repos?sort=updated&direction=desc&per_page=100`
  );
}

/** Aggregates repo languages into a sorted list of { language, count, percent }. */
export function summarizeLanguages(repos: GithubRepo[]) {
  const counts = new Map<string, number>();
  repos
    .filter((r) => !r.fork && r.language)
    .forEach((r) => {
      counts.set(r.language as string, (counts.get(r.language as string) ?? 0) + 1);
    });
  const total = Array.from(counts.values()).reduce((a, b) => a + b, 0) || 1;
  return Array.from(counts.entries())
    .map(([language, count]) => ({ language, count, percent: Math.round((count / total) * 100) }))
    .sort((a, b) => b.count - a.count);
}
