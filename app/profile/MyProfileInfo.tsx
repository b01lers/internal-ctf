import type {MyProfileData} from '@/util/profile';
import TeamInvite from '@/app/profile/TeamInvite';
import UpdateInformation from '@/app/profile/UpdateInformation';


/**
 * The sidebar of "my team" specific actions on the profile page.
 */
export default function MyProfileInfo(props: MyProfileData) {
    return (
        <aside className="flex flex-col gap-4 sticky top-32 w-96 h-max flex-none">
            <TeamInvite token={props.teamToken} />
            <UpdateInformation {...props} />
        </aside>
    )
}
