"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <html lang="en">
            <body className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 text-center">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                        Something went wrong!
                    </h1>
                    <p className="text-gray-500">
                        A critical error occurred. Please try refreshing the page.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button onClick={() => reset()} variant="default">
                            Try again
                        </Button>
                        <Button
                            onClick={() => (window.location.href = "/")}
                            variant="outline"
                        >
                            Go home
                        </Button>
                    </div>
                </div>
            </body>
        </html>
    );
}
