import { useState } from 'react';

const useInputImage = () => {
  const [previewImage, setPreviewImage] = useState<any>();
  const [image, setImage] = useState<File>(
    new File([], 'empty_image.png', { type: 'images/png' }),
  );

  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0];
      setImage(image);

      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewImage(fileReader.result);
      };
      fileReader.readAsDataURL(image);
    }
  };

  return { image: image, previewImage: previewImage, onChangeImage };
};

export default useInputImage;
