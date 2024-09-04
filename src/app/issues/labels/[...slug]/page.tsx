import Labels from "@/ui/labels";
import Issues from "@/ui/issues";
import * as gh from "@/lib/github";

type IssuesByLabelProps = {
  params: {
    slug: string[];
  };
};

export default async function IssuesByLabelPage(props: IssuesByLabelProps) {
  const [id] = props.params.slug;
  const labels = await gh.labels();
  const label = labels.find((label) => label.id.toString() === id);
  const issues = await gh.issues_by_label(label!.name);

  return (
    <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 gap-2">
      <div className="grow">
        <Issues issues={issues} />
      </div>
      <Labels />
    </div>
  );
}

export async function generateStaticParams() {
  const labels = await gh.labels();

  return labels.map(({ id, slug }) => ({
    slug: [id.toString(), slug],
  }));
}
