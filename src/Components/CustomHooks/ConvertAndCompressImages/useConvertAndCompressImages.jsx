import { useState, useEffect } from "react";

// Utility function to convert an image to AVIF format
const convertImageToAvif = async (imageUrl) => {
  const img = new Image();
  img.src = imageUrl;

  return new Promise((resolve, reject) => {
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => {
          const avifUrl = URL.createObjectURL(blob);
          resolve(avifUrl);
        },
        "image/webp",
        0.5 
      );
    };

    img.onerror = (error) => reject(error);
  });
};

// Custom hook to convert and compress images
const useConvertAndCompressImages = (imageUrls) => {
  const [convertedImages, setConvertedImages] = useState([]);

  useEffect(() => {
    const processImages = async () => {
      const avifImages = await Promise.all(
        imageUrls.map((imageUrl) => convertImageToAvif(imageUrl))
      );
      setConvertedImages(avifImages);
    };

    processImages();
  }, [imageUrls]);

  return convertedImages;
};

export default useConvertAndCompressImages;
