// Challenge 1: Sum of Positives
const sumOfPositives = (arr: number[]) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  console.log(sum);
  return sum;
};
sumOfPositives([1,2,3,4,-3]);
sumOfPositives([-1,-2]);

// Challenge 2: Find Maximum Value
const findMax = (arr: number[]) => {
  let maxNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  console.log(maxNum)
  return maxNum;
};
findMax([1,20,3,4])
findMax([-10,-12,-0.2])

// Challenge 3: Election Winner
const findWinner = (candidates: { name: string; votes: number }[]) => {
  let winner = candidates[0];
  for (let i = 1; i < candidates.length; i++) {
    if (candidates[i].votes > winner.votes) {
      winner = candidates[i];
    }
  }
  console.log(winner)
  return winner;
};
findWinner([{name:"Alex",votes:2300},{name:"pluto",votes:39999}]);

// Challenge 4: Longest Word
const findLongestWord = (words: string[]) => {
  let longest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  console.log(longest)
  return longest;
};
findLongestWord(["MaryAnn","venomomous","tripplemakons"]);
findLongestWord(["sugar",'tea'])

// Challenge 5: Count Properties
const countProperties = (obj: object) => {
    console.log(obj);
  return Object.keys(obj).length;
};
countProperties({ a: 1, b: 2, c: 3 });

// Challenge 6: Filter by Length
const filterByLength = (arr: string[], minLength: number) => {
  const result: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= minLength) {
      result.push(arr[i]);
    }
  }
  console.log(result)
  return result;
};
filterByLength(["frog", "hippopotamus", "hi", "x"], 4);

// Challenge 7: Sum of Even Numbers
const sumEvenNumbers = (arr: number[]) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  console.log(sum)
  return sum;
};
sumEvenNumbers([2, 3, 6, 9, 10]);

// Challenge 8: Difference Between Sum of Even and Odd Numbers
const differenceEvenOdd = (arr: number[]) => {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }
  console.log(evenSum-oddSum)
  return evenSum - oddSum;
};
differenceEvenOdd([1,2,3,4]);

// Challenge 9: Count Truthy
const countTruthy = (obj: { [key: string]: string|boolean|number|null }) => {
  let count = 0;
  for (const key in obj) {
    if (obj[key]) {
      count++;
    }
  }
  console.log(count)
  return count;
};
countTruthy({ a: true, b: 0, c: "yo", d: null });
// Challenge 10: Average of Numbers
const average = (arr: number[]) => {
  if (arr.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum/arr.length)
  return sum / arr.length;
};
average([10,20,30,40]);

// Challenge 11: Linear Search
const linearSearch = (arr: number[], value: number) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
        console.log(i);
      return i;
    }
  }
  return -1;
};
linearSearch([1,2,3,4,3],3)
// Challenge 12: Reverse Linear Search
const reverseLinearSearch = (arr: number[], value: number) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === value) {
        console.log(i)
      return i;
    }
  }
  return -1;
};
reverseLinearSearch([1,2,3,4,3],3)

// Challenge 13: Linear Search All Indices
const linearSearchAll = (arr: number[], value: number) => {
  const result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      result.push(i);
    }
  }
  console.log(result)
  return result;
};
linearSearchAll([1,2,2,3,2],2);

// Challenge 14: Count Occurrences
const countOccurrences = (arr: string[]) => {
  const result: { [key: string]: number } = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (result[item]) {
      result[item]++;
    } else {
      result[item] = 1;
    }
  }
  console.log(result)
  return result;
};
countOccurrences(["big","small","big"]);

// Challenge 15: Remove Duplicates
const removeDuplicates = (arr: unknown[]) => {
  const dup:unknown[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (!dup.includes(arr[i])) {
      dup.push(arr[i]);
    }
  }
  console.log(dup)
  return dup;
};
removeDuplicates([1,1,2,3,"was","were","was"])

// Challenge 16: Most Frequent
const mostFrequent = (arr: unknown[]) => {
  const count: { [key: string]: number } = {};
  let max = 0;
  let result: unknown = undefined;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const key = String(item);
    if (count[key]) {
      count[key]++;
    } else {
      count[key] = 1;
    }

    if (count[key] > max) {
      max = count[key];
      result = item;
    }
  }
console.log(result);
  return result;
};
mostFrequent(["hello","hello","me",1,1]);
