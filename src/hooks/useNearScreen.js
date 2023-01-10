import { useEffect, useState, useRef } from "react";

export default function useNearScreen() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setShow(true);
        console.log("i'm in");
        observer.disconnect();
      } else {
        console.log("i'm not");
      }
    });

    observer.observe(ref.current);

    return () => {};
  }, [ref]);
  return [show, ref];
}
