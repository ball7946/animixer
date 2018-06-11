const APIHost = window.location.href.startsWith('http://localhost')
  ? 'http://localhost:5000/animixer-1d266/us-central1'
  : `https://us-central1-${process.env.GCLOUD_PROJECT}.cloudfunctions.net`;

var Host;
if (window.location.href.startsWith('http://localhost')) {
  Host = 'http://localhost:3000';
} else if (process.env.GCLOUD_PROJECT === 'animixer-1d266') {
  Host = 'https://safarimixer.com';
} else {
  Host = 'https://animixer-dev.firebaseapp.com/';
}

function capitalizeFirstLetter(string) {
  if (!string) {
    return;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function isIEorEDGE() {
  return (
    navigator.appName === 'Microsoft Internet Explorer' ||
    (navigator.appName === 'Netscape' &&
      navigator.appVersion.indexOf('Edge') > -1)
  );
}

function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

function isChrome() {
  return (
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
  );
}

function getAnimalUrl(animal1, animal2, animal3) {
  let animalPath = `/${animal1}/${animal2}/${animal3}`;
  return APIHost + '/api/mixipedia' + animalPath;
}

function getShareUrl(animal1, animal2, animal3) {
  let urlArgs = `?animal1=${animal1}&animal2=${animal2}&animal3=${animal3}`;
  return Host + urlArgs;
}

export default {
  APIHost,
  Host,
  capitalizeFirstLetter,
  getAnimalUrl,
  getShareUrl,
  isChrome,
  isIEorEDGE,
  isSafari
};
