import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  images = [...images, ...images, ...images];

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => (
          <div key={index} className="w-48">
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img src={image.url} alt={image.name} />
            }
          </div>
        ))}
      </div>
    </main>
  );
}
