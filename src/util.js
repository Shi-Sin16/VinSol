const getRandomIdx = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
 
   return Math.floor(Math.random() * (max - min + 1) + min);
  }
 
 
 export const shuffle = (a) => {
   var arr = a;
 
   for(var i=arr.length - 1; i>0; i--) {
     const j = getRandomIdx(0, i);
 
     // swap
     const t = arr[j];
     arr[j] = arr[i];
     arr[i] = t;
   }
 
   return arr;
 }
 
 export const htmlDecode = (input) => {
   var doc = new DOMParser().parseFromString(input, 'text/html');
   return doc.documentElement.textContent;
 }