"use client";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Logo from "@/public/images/logo.svg";

export default function NotFoundPage() {
    const router = useRouter();

    return (
        <div className={"flex flex-col items-center justify-center min-h-screen"}>
            <Image
                src={Logo}
                height={50}
                width={50}
                alt={`${APP_NAME} Logo`}
                priority={true}
            />
            <div className={"p-6 w-1/3 rounded-lg shadow-md text-center"}>
                <h1 className={"text-3xl font-bold mb-4"}>Not Found</h1>
                <p className={"text-destructive"}>Could not find request page</p>
                <Button
                    variant={"outline"}
                    className={"mt-4 ml-2 cursor-pointer"}
                    onClick={() => router.push("/")}
                >
                    Back To Home
                </Button>
            </div>
        </div>
    );
}
