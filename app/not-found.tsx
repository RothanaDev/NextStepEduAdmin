import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="text-center space-y-4">
                <Image
                    src="/images/404.png"
                    alt="Not Found"
                    width={500}
                    height={400}
                    className="mx-auto"
                />
                <Link href="/">
                    <Button size="lg" className="px-8">Go Home</Button>
                </Link>
            </div>
        </div>
    );
}