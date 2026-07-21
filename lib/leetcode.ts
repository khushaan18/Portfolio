export const LEETCODE_USERNAME = "khushaan_1808";

export type LeetcodeStats = {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  ranking: number | null;
  acceptanceRate: number | null;
};

// LeetCode has no official public API, so this uses community-maintained
// wrappers. Two are tried in order in case one is temporarily down.
async function tryPrimary(username: string): Promise<LeetcodeStats> {
  const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("primary leetcode api failed");
  const data = await res.json();
  if (data.status !== "success") throw new Error("primary leetcode api returned error");
  return {
    totalSolved: data.totalSolved,
    totalQuestions: data.totalQuestions,
    easySolved: data.easySolved,
    totalEasy: data.totalEasy,
    mediumSolved: data.mediumSolved,
    totalMedium: data.totalMedium,
    hardSolved: data.hardSolved,
    totalHard: data.totalHard,
    ranking: data.ranking ?? null,
    acceptanceRate: data.acceptanceRate ?? null,
  };
}

async function tryFallback(username: string): Promise<LeetcodeStats> {
  const res = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("fallback leetcode api failed");
  const data = await res.json();
  return {
    totalSolved: data.solvedProblem,
    totalQuestions: data.totalQuestions ?? 3600,
    easySolved: data.easySolved,
    totalEasy: data.totalEasy ?? 850,
    mediumSolved: data.mediumSolved,
    totalMedium: data.totalMedium ?? 1800,
    hardSolved: data.hardSolved,
    totalHard: data.totalHard ?? 800,
    ranking: null,
    acceptanceRate: null,
  };
}

export async function fetchLeetcodeStats(username: string = LEETCODE_USERNAME): Promise<LeetcodeStats> {
  try {
    return await tryPrimary(username);
  } catch {
    return await tryFallback(username);
  }
}
