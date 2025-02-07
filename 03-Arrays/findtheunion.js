const union = (nums1, nums2) => {
  const map = new Map();

  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], true);
  }
  for (let i = 0; i < nums2.length; i++) {
    map.set(nums2[i], true);
  }

  return [...map.keys];
};
console.log(union([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7]));
