import { useEffect } from "react";

const Facebook = () => {
  useEffect(() => {
    const loadFBPixel = () => {
      const f = window,
        b = document,
        e = "script";
      const v = "https://connect.facebook.net/en_US/fbevents.js";
      let n =
        f.fbq ||
        (f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        });
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      let t = b.createElement(e),
        s = b.getElementsByTagName(e)[0];
      t.async = true;
      t.src = v;
      s.parentNode.insertBefore(t, s);
    };

    loadFBPixel();
    window.fbq("init", "183857468310991");
    window.fbq("track", "PageView");
  }, []);

  return null;
};

export default Facebook;
