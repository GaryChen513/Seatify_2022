export const sliceArray = (nums, start, end) => {
  // nums: array of int
  // start, end: int
  if (!nums) return [];
  const length = nums.length;

  if (start >= length) {
    return [];
  }

  return nums.slice(start, Math.min(end, length));
};

