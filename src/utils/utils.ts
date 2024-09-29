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
