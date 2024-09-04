import Link from "next/link";
import type { Issue } from "@/lib/github";

type IssuesProps = {
  issues: Issue[];
};

export default function Issues(props: IssuesProps) {
  return (
    <div className="space-y-12">
      {props.issues.map((issue) => (
        <div key={issue.number}>
          <h2 className="text-2xl font-semibold mb-6">
            <Link href={issue.link}>{issue.title}</Link>
          </h2>
          <div className="prose">{issue.body.substring(0, 300)}...</div>
        </div>
      ))}
    </div>
  );
}
