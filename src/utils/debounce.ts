export default function debounce<F extends (...params: any[]) => void>(
  fn: F,
  delay: number
) {
  if (!Number.isInteger(delay)) {
    console.warn("Called debounce without a valid delay number");
    delay = 300;
  }

  let timeoutID: number;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutID);
    timeoutID = window.setTimeout(() => fn.apply(this, args), delay);
  } as F;
}

