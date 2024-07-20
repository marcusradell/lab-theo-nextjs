const mockUrls = [
  "https://utfs.io/f/86ec96a7-93ce-4b81-9d1f-d956f9fe11a4-5ffa44.png",
  "https://utfs.io/f/9e26a86e-87c5-467e-bf41-958d310b9e4a-kw9o2f.png",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default function HomePage() {
  return (
    <main>
      {" "}
      <div className="flex flex-wrap gap-4">
        {[
          ...mockImages,
          ...mockImages,
          ...mockImages,
          ...mockImages,
          ...mockImages,
          ...mockImages,
        ].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
