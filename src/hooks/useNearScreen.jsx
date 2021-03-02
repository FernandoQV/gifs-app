import { useState,useEffect,useRef } from 'react'

export const useNearScreen = ({distance='100px',externalRef}={}) => {
    const [isNearScreen, setIsNearScreen] = useState(false);
    const fromRef = useRef();
    useEffect(() => {
      let observer;
      const elm=externalRef?externalRef.current:fromRef.current
      console.log(elm);
      const onChange = (entries,observer) => {
        const elemt = entries[0];
        if (elemt.isIntersecting) {
          setIsNearScreen(true)
          //se podria colocar observer.unobserver(elemt) para dejar de observar elemt y poder seguir utilizando el observer,pero para este componente es mejor desconectarlo
          observer.disconnect()
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
        observer.observe(elm);
      });
      return ()=> observer && observer.disconnect()
    });
    return { isNearScreen, fromRef };
  };