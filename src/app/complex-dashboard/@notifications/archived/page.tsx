import { Card } from "@/components/Card";
import Link from "next/link";

export default function ArchivedNotifications(){

    return (
        <>
            <Card>
                <div className="box display-flex flex-col">
                    <h1>Archived Notifications</h1>
                    <div className="default my-5 text-blue-300">
                        <Link href="/complex-dashboard">Default-Notifications</Link>
                    </div>
                </div>
            </Card>
        </>
    )
}