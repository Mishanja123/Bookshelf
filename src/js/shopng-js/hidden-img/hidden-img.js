import { refs } from '../DOM-refs/refs-DOM';
export function showImg(arr) {
  if (arr.length > 0) {
    refs.descriptionBlock.classList.add('visually-hidden');
   } //else {
  //   refs.descriptionBlock.classList.remove('visually-hidden');
  // }
}
