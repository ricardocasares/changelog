import Issue from "@/ui/issue";
import Labels from "@/ui/labels";
import * as gh from "@/lib/github";

type IssueProps = {
  params: {
    slug: string[];
  };
};

export default async function IssuePage(props: IssueProps) {
  const [id] = props.params.slug;

  return (
    <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 gap-2">
      <div className="grow">
        <Issue id={id} />
      </div>
      <Labels />
    </div>
  );
}

export async function generateStaticParams() {
  const issues = await gh.issues();

  return issues.map(({ number, slug }) => ({
    slug: [number.toString(), slug],
  }));
}
