import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';

// Components
import Filters from '@/app/challenges/Filters';
import Challenges from '@/app/challenges/Challenges';
import DisplayToggle from '@/app/challenges/DisplayToggle';

// Utils
import {AUTH_COOKIE_NAME} from '@/util/config';
import {getAdminChallenges} from '@/util/admin';


export default async function AdminChallengesPreview() {
    const token = cookies().get(AUTH_COOKIE_NAME)?.value;
    if (!token) return redirect('/');

    const challenges = await getAdminChallenges(token);
    if (challenges.kind !== 'goodChallenges')
        return redirect('/');

    // Map admin challenges to other challenge format
    const parsed = challenges.data.map(c => ({...c, points: c.points.max}));

    return (
        <div className="container relative pt-32 pb-14 flex flex-col md:flex-row gap-6">
            <Filters
                challenges={parsed}
                solves={[]}
            />
            <Challenges
                challenges={parsed}
                solves={[]}
            />

            <DisplayToggle />
        </div>
    )
}
