export type Challenge = {
    name: string,
    id: string,
    files: FileData[]
    category: string,
    author: string,
    description: string, // TODO?
    sortWeight: number,
    solves: number,
    points: number,
}

type FileData = {
    url: string,
    name: string
}

type ChallengesResponse = {
    kind: 'goodChallenges',
    message: string,
    data: Challenge[]
}

export async function getChallenges(token: string): Promise<ChallengesResponse> {
    const res = await fetch(`${process.env.API_BASE}/challs`, {
        headers: {'Authorization': `Bearer ${token}`}
    });
    return await res.json();
}
