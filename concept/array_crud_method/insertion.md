\1. Insertion (নতুন উপাদান যোগ করা)
Insertion হলো array-তে নতুন উপাদান যোগ করা। JavaScript-এ সাধারণত push, unshift বা নির্দিষ্ট স্থানে splice ব্যবহার করে নতুন উপাদান যোগ করা হয়।

শেষে উপাদান যোগ করা (Push Method):

# push মেথড ব্যবহার করে array-এর শেষে নতুন উপাদান যোগ করা যায়।
javascript
Copy code
let arr = [1, 2, 3];
arr.push(4); // শেষে 4 যোগ করা
console.log(arr); // Output: [1, 2, 3, 4]
শুরুর দিকে উপাদান যোগ করা (Unshift Method):

# unshift মেথড array-এর শুরুতে নতুন উপাদান যোগ করে।
javascript
Copy code
let arr = [1, 2, 3];
arr.unshift(0); // শুরুতে 0 যোগ করা
console.log(arr); // Output: [0, 1, 2, 3]
মাঝে উপাদান যোগ করা (Splice Method):

# splice মেথড ব্যবহার করে নির্দিষ্ট অবস্থানে উপাদান যোগ করা যায়।
javascript
Copy code
let arr = [1, 2, 4, 5];
arr.splice(2, 0, 3); // 2 নম্বর ইনডেক্সে 3 যোগ করা
console.log(arr); // Output: [1, 2, 3, 4, 5]