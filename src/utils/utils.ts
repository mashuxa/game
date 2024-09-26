export const sortStringByAscending = (a: string, b: string): number => a.length - b.length;

export const mapLettersInWord = (word: string): Map<string, number> =>
  word.split("").reduce<Map<string, number>>((acc, letter) => {
    const prevValue = acc.get(letter) || 0;

    acc.set(letter, prevValue + 1);

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
