import { useState, useCallback } from "react";

function dataURLtoFile(dataurl: string, filename: string) {
  let arr: any = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

export default function useResizeImage() {
  const [file, setFile] = useState<any>(null);
  const onChangeResize = useCallback((file: any) => {
    if (file?.type?.match(/image.*/)) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = (event: any) => {
        const image: any = new Image();
        image.onload = (el: any) => {
          const canvas = document.createElement("canvas");
          const max_size = 1410;
          let width = image.width;
          let height = image.height;
          if (width > height) {
            if (width > max_size) {
              height *= max_size / width;
              width = max_size;
            }
          } else {
            if (height > max_size) {
              width *= max_size / height;
              height = max_size;
            }
          }
          canvas.width = width;
          canvas.height = height;
          let ctx: any = canvas.getContext("2d", { alpha: false });
          ctx.drawImage(el.target, 0, 0, width, height);
          let dataUrl = canvas.toDataURL("image/jpeg", 1);
          setFile(dataURLtoFile(dataUrl, "x-ray.png"));
          //   return dataURLtoFile(dataUrl, "x-ray.png");
        };
        image.src = event.target.result;
        return file;
      };
    }
  }, []) as any;
  return { file, onChangeResize };
}
