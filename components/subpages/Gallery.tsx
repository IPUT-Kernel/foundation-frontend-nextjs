import Image from "next/image";
import OptionsVertical from "../shared/OptionsVertical";
const images = [
  "/images/gallery-1.png",
  "/images/gallery-2.png",
  "/images/gallery-3.png",
  "/images/gallery-4.png",
  "/images/gallery-5.png",
  "/images/gallery-6.png",
  "/images/gallery-7.png",
  "/images/gallery-8.png",
  "/images/gallery-3.png",
  "/images/gallery-4.png",
  "/images/gallery-5.png",
  "/images/gallery-6.png",
];
const Gallery = () => {
  return (
    <div className="box p-3">
      <div className="box bg-primary/5 dark:bg-bg3">
        <div className="flex justify-between items-center bb-dashed pb-6 mb-6">
          <p className="font-medium">Gallery</p>
          <OptionsVertical />
        </div>
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <div key={i} className="col-span-1">
              <Image
                src={img}
                width={96}
                height={96}
                className="rounded-lg"
                alt="gallery img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
