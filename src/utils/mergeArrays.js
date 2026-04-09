export function mergeArrays(prevArr, newArr) {
    const merged = [...prevArr, ...newArr];

    return [...new Map(merged.map(u => u.id ? [u.id, u] : [u.sha, u])).values()];
}