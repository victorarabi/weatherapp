import { useEffect } from 'react';

/**
 * Hook that appends scripts to the head tag of index.html. Script is removed when document unmounts.
 * @param url url to be appended to head tag.
 * @dependency url parameter
 */
export default function useScript(url) {
  useEffect(() => {
    //creates  a new script element on the document.
    const script = document.createElement('script');
    //link the src attribute to url parameter and sets async to true.
    script.src = url;
    script.async = true;
    //append script to the body.
    document.body.appendChild(script);
    //clean up function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
}
