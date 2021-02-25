export const sortArray = (numbers: number[], start?: number, end?: number): number[] => {

  if (numbers.length <= 1) return numbers;

  let top = end ?? numbers.length - 1;
  let bottom = start ?? 0;
  let base = 0;

  while (top > bottom) {
    while (numbers[top] >= numbers[base] && top > bottom) { top -= 1 }
    swap(numbers, base, top);
    base = top;
    while (numbers[bottom] <= numbers[base] && top > bottom) { bottom += 1 }
    swap(numbers, base, bottom);
    base = bottom;
  }

  return [
    ...sortArray(numbers, 0, base),
    numbers[base],
    ...sortArray(numbers, base + 1, top),
  ];
}

const swap = (numbers: number[], a: number, b: number) => {
  const t = numbers[a];
  numbers[a] = numbers[b];
  numbers[b] = t;
}