import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/d39e0bba-eb4e-4307-9df1-e6f1f304b0da-uxui2z.webp",
  "https://utfs.io/f/c063c438-a226-48d2-a21e-a52dd8e6de67-2ebjy4.webp",
  "https://utfs.io/f/c38f1f6f-c82a-4647-9846-fcea670b615d-hnnlbr.webp",
  "https://utfs.io/f/02d97d28-008f-447c-a3fe-9e6173313df8-x4q2y6.webp",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt={image.id.toString()} />
          </div>
        ))}
      </div>
    </main>
  );
}
