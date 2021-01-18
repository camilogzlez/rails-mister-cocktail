import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Take it easy,", "Have a drink!"],
    typeSpeed: 70,
    loop: true
  });
}

export { loadDynamicBannerText };