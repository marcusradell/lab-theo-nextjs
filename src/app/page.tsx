import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/86ec96a7-93ce-4b81-9d1f-d956f9fe11a4-5ffa44.png",
  "https://utfs.io/f/9e26a86e-87c5-467e-bf41-958d310b9e4a-kw9o2f.png",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main>
      {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}
      <div className="flex flex-wrap gap-4">
        {[
          ...mockImages,
          ...mockImages,
          ...mockImages,
          ...mockImages,
          ...mockImages,
          ...mockImages,
        ].map((image, index) => (
          <div key={index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
