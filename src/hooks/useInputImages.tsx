import { useState } from 'react';

const useInputImages = () => {
  const [previewImages, setPreviewImages] = useState<any[]>([]);
  const [images, setImages] = useState<File[]>([]);

  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      const images = Array.from(event.target.files);
      setImages((prev) => [...prev, ...images]);

      images.forEach((image) => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          setPreviewImages((prev) => [...prev, fileReader.result]);
        };
        fileReader.readAsDataURL(image);
      });
    }
  };

  return { images, previewImages, onChangeImage };
};

export default useInputImages;
