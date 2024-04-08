import { getPage } from "@/api/pages";
import ComponentFactory from "@/components/ComponentFactory";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params: { slug } }: PageProps) {
  const response = await getPage(slug);
  const [page] = response.data;
  console.log(page);

  return (
    <div>
      <h1>Page - {slug}</h1>
      <h2>{page.attributes.Title}</h2>

      {page.attributes.Content.map((component) => (
        <ComponentFactory {...component} />
      ))}
    </div>
  );
}
