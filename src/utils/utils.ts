export const sortStringByAscending = (a: string, b: string): number => a.length - b.length;

export const mapLettersInWord = (word: string): Map<string, number> =>
  word.split("").reduce<Map<string, number>>((acc, letter) => {
    const prevValue = acc.get(letter) || 0;

    acc.set(letter.toLowerCase(), prevValue + 1);

    return acc;
  }, new Map());

export const joinLettersMaps = (acc: Map<string, number>, word: string): Map<string, number> => {
  const lettersMap = mapLettersInWord(word);

  lettersMap.forEach((currentValue, key) => {
    const prevValue = acc.get(key) || 0;

    acc.set(key, Math.max(prevValue, currentValue));

    return acc;
  });

  return acc;
};

export const collectLetters = (words: string[]): string[] => {
  const lettersMap = words.reduce<Map<string, number>>(joinLettersMaps, new Map());

  return [...lettersMap.entries()].reduce<string[]>((acc, [letter, count]) => {
    return [...acc, ...new Array(count).fill(letter)];
  }, []);
};

export const getRandomValue = (start: number, end: number): number => {
  return Math.floor(Math.random() * (end + 1 - start) + start);
};

export const shuffleArray = <T>(array: T[]): T[] => {
  return array.reduce(
    (acc, _, currentIndex) => {
      const randomIndex = getRandomValue(0, array.length - 1);

      [acc[currentIndex], acc[randomIndex]] = [acc[randomIndex], acc[currentIndex]];

      return acc;
    },
    [...array],
  );
};

export const calculateCirclePercentCoordinates = (fractionPosition: number): { x: number; y: number } => {
  const angle = fractionPosition * 2 * Math.PI - Math.PI / 2;
  const radiusPercent = 50;
  const x = Math.cos(angle) * radiusPercent + radiusPercent;
  const y = Math.sin(angle) * radiusPercent + radiusPercent;

  return { x, y };
};

export const getCenterCoordinates = (node: HTMLElement): { x: number; y: number } => {
  const rect = node.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  return { x, y };
};

export const updatePathCoordinates = (
  centerCoordinates: number[],
  prevPath: number[][],
  lastCoordinates: number[],
): number[][] => {
  if (!prevPath.length) return [...prevPath, lastCoordinates];

  const [cx, cy] = centerCoordinates;
  const [lastX, lastY] = lastCoordinates;
  const prev = prevPath[prevPath.length - 1];
  const [prevX, prevY] = prev.length === 4 ? [prev[2], prev[3]] : prev;

  const midX = (prevX + lastX) / 2;
  const midY = (prevY + lastY) / 2;

  const toCenterX = cx - midX;
  const toCenterY = cy - midY;

  const lengthToCenter = Math.sqrt(toCenterX ** 2 + toCenterY ** 2);

  const normToCenterX = lengthToCenter && toCenterX / lengthToCenter;
  const normToCenterY = lengthToCenter && toCenterY / lengthToCenter;

  const deltaX = lastX - prevX;
  const deltaY = lastY - prevY;
  const segmentLength = Math.sqrt(deltaX ** 2 + deltaY ** 2);
  const controlDistance = segmentLength / 3;
  const controlX = midX - normToCenterX * controlDistance;
  const controlY = midY - normToCenterY * controlDistance;

  return [...prevPath, [controlX, controlY, lastX, lastY]];
};
