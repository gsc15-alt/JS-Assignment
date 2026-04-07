# JS-Assignment

## 📌 Course

Fundamentals of Web Design (CSE 106)

---

## 📖 Description

This repository contains solutions to all 6 problems from Assignment 4.
All solutions are implemented using **plain JavaScript** with:

* `prompt()` for input
* `alert()` for output


---

## 📂 File Structure

* `Q1.js` → Digit Gatekeeper
* `Q2.js` → Roll-Seed Lock
* `Q3.js` → Mirror Corridor
* `Q4.js` → Fare Calculator
* `Q5.js` → Skipping Numbers
* `Q6.js` → Contest Score Judge

---

## 🧠 Approach & Complexity

### 🔹 Question 1 – Digit Gatekeeper

**Approach:**

* Loop through all numbers from L to R
* Check divisibility by K
* Extract digits using loop
* Check:

  * No digit is 0
  * Sum of digits is prime

**Time Complexity:** O(N × d)
(N = range size, d = number of digits)

---

### 🔹 Question 2 – Roll-Seed Lock

**Approach:**

* Repeat transformation 3 times
* Apply condition:

  * Even → divide by 2 + seed
  * Odd → multiply by 3 - seed
* Check:

  * Number is 3-digit
  * Middle digit equals seed

**Time Complexity:** O(1)

---

### 🔹 Question 3 – Mirror Corridor

**Approach:**

* Try values of X from 0 to 100000
* For each:

  * Check palindrome
  * Check divisibility by K
* Stop at the first valid X

**Time Complexity:** O(N × d)

---

### 🔹 Question 4 – Fare Calculator

**Approach:**

* Apply rules step-by-step:

  * Base + distance cost
  * Late fee
  * Distance surcharge
  * Seed adjustment
  * Round up to the nearest multiple of 5

**Time Complexity:** O(1)

---

### 🔹 Question 5 – Skipping Numbers

**Approach:**

* Start from m = 1
* Add numbers not divisible by (seed + 2)
* Stop when sum ≥ N

**Time Complexity:** O(m)

---

### 🔹 Question 6 – Contest Score Judge

**Approach:**

* Compute score using formula
* Apply conditions:

  * Negative → 0
  * Total submissions > 50 → subtract 10
* Decide PASS / FAIL

**Time Complexity:** O(1)

---

## ⚙️ How to Run

1. Open browser
2. Open Developer Tools (F12) → Console
3. Paste code OR link JS file to HTML
4. Use `prompt()` for input

---

## ✅ Notes

* All inputs are dynamic (no hardcoding)
* Only basic JavaScript concepts are used
* Code follows assignment instructions strictly

---
