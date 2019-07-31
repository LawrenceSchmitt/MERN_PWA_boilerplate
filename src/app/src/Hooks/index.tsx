import * as React from "react";

export const LoadImages = (images: string[]) => {
  const [loaded, setLoaded] = React.useState(false);
  let loadedImages = [];
  for (let image in images) {
    const img = new Image();
    img.src = images[image];
    img.onload = () => {
      loadedImages.push(img);
      if (loadedImages.length === Object.keys(images).length) {
        setLoaded(true);
      }
    };
  }
  return loaded;
};

export const useTimer = (duration: number) => {
  const [done, setDone] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, duration);
  }, []);
  return done;
};
