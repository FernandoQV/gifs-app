import { useState,useEffect,useRef } from 'react'

export const useNearScreen = ({distance='100px'}={}) => {
    const [isNearScreen, setIsNearScreen] = useState(false);
    const fromRef = useRef();
    useEffect(() => {
      let observer;
      const onChange = (entries,observer) => {
        const elemt = entries[0];
        if (elemt.isIntersecting) {
          setIsNearScreen(true)
          console.log('si esta inter');
          observer.disconnect()
        }else{
            console.log('no esta');
        }
      };
      Promise.resolve(
        typeof IntersectionObserver != "undefined"
          ? IntersectionObserver
          : import("intersection-observer")
      ).then(() => {
        observer = new IntersectionObserver(onChange, {
          rootMargin: distance,
        });
        observer.observe(fromRef.current);
      });
      return ()=> observer && observer.disconnect()
    });
    return { isNearScreen, fromRef };
  };