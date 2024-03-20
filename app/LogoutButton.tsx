'use client'

import {useState} from 'react';
import {useRouter} from 'next/navigation';

// Components
import CenteredModal from '@/components/CenteredModal';

// Utils
import {AUTH_COOKIE_NAME} from '@/util/config';


export default function LogoutButton() {
    const [open, setOpen] = useState(false);
    const {push, refresh} = useRouter();

    function logout() {
        setOpen(false);

        // Clear auth cookie, then redirect to home.
        document.cookie = `${AUTH_COOKIE_NAME}=; Max-Age=0; path=/`;
        push('/');
        refresh();
    }

    return (
        <>
            <button
                className="px-4 py-2 border-b-2 transition duration-200 border-primary text-primary hover:border-white hover:text-white"
                onClick={() => setOpen(true)}
            >
                Log out
            </button>

            <CenteredModal
                className="relative bg-background rounded-lg px-12 py-8 text-white shadow-lg w-full max-w-xl max-h-[90%]"
                isOpen={open}
                setIsOpen={setOpen}
            >
                <h1 className="text-2xl font-bold mb-4">
                    Log out
                </h1>
                <p className="text-primary mb-4">
                    This will log you out on your current device.
                </p>

                <div className="flex gap-2 justify-end">
                    <button
                        className="border border-primary text-primary px-4 py-2 rounded hover:bg-primary hover:text-background transition duration-100"
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </button>

                    <button
                        className="border border-theme-bright text-theme-bright px-4 py-2 rounded hover:bg-theme-bright hover:text-background transition duration-100"
                        onClick={logout}
                    >
                        Log out
                    </button>
                </div>
            </CenteredModal>
        </>
    )
}
