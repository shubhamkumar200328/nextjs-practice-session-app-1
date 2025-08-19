import { Card } from "@/components/Card";
import Link from "next/link";

export default function Notifications(){

    return (
        <>
            <Card>
                <div className="defnoti display-flex flex-col">
                    <h1>Default-Notifications</h1>
                    <div className="archivedN my-5 text-blue-500">
                        <Link href="/complex-dashboard/archived">Archived Notifications</Link>
                    </div>
                </div>
            </Card>
        </>
    )
}