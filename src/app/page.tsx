const mockUrls = [
  "https://utfs.io/f/27f932f1-e5b2-473c-a6e2-362d90de9c58-1d.png",
  "https://utfs.io/f/7d8db255-2df5-4a27-91df-5f283faecb28-guob9h.jpg",
  "https://utfs.io/f/86ec96a7-93ce-4b81-9d1f-d956f9fe11a4-5ffa44.png",
  "https://utfs.io/f/9e26a86e-87c5-467e-bf41-958d310b9e4a-kw9o2f.png",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default function HomePage() {
  return (
    <main>
      {" "}
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
