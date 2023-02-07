import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#fafafa] mx-auto flex flex-col justify-center items-center mt-10 pt-10 pb-10">
            <p className="text-center">
                <span className="font-semibold text-[#5A5961]">Build with 💖 By Team Fueler</span>
                <br />
                <strong className="text-primary-blue hover:text-[#fb25ff] "><Link href="/makers">Meet the {" "} Creators</Link></strong>
            </p>
        </footer>
    );
}
