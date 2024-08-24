import Header from '@/app/(home)/Header';
import Rules from '@/app/(home)/Rules';


export default async function Home() {
    return (
        <main className="pb-14 relative">
            <Header />

            <div className="bg-black/40 py-16 mb-12 backdrop-blur-sm border-t border-tertiary">
                <div className="px-6 sm:container">
                    <Rules />
                </div>
            </div>
        </main>
    )
}
