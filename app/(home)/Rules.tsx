import SectionHeader from '@/components/SectionHeader';


export default function Rules() {
    return (
        <>
            <SectionHeader id="rules">
                Rules
            </SectionHeader>
            <ol className="list-decimal list-outside pl-6 space-y-2">
                <li>
                    Teams are limited to one person per account.
                </li>
                <li>
                    You are welcome to ask for/give help with challenges, but don't share flags or submit flags from online.
                </li>
                <li>
                    Teams in the "Purdue (human)" division are not permitted to use AI to solve challenges.
                    Reading the automatic AI summary from a search or asking an LLM for generic advice is fine;
                     providing an LLM with exact challenge details is not.
                </li>
                <li>
                    Teams in the "Purdue (unrestricted)" division can use AI to solve challenges; however,
                    please try to at least understand the solution before submitting the flag.
                </li>
                <li>
                    Flags are of the format{' '}
                    <code className="bg-black/40 px-2 py-1 text-primary rounded">{'bctf{[ -~]+}'}</code>{' '}
                    unless otherwise noted on the challenge description. No brute-force guessing flags.
                </li>
                <li>
                    Do not attempt to attack or interfere with other teams or any servers used in this competition that
                    are not explicitly designated for being hacked in a problem.
                </li>
                <li>
                    Do not perform any sort of online bruteforce against any of our systems.
                </li>
                <li>Learn as much as you can, and have a good time!</li>
                <li>Pay it forward.</li>
            </ol>
        </>
    )
}
