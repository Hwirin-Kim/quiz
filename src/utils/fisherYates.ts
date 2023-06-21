/**
 * 배열을 랜덤으로 섞어주는 알고리즘
 * 기존 배열을 건드리지 않고 새로운 배열 생성
 * @param arr 섞고싶은 배열입력
 * @returns 섞인 새로운 배열
 */

export function fisherYates(arr: string[]) {
  const shuffledArray = [...arr];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}
