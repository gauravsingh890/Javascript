# Asynchronous code

---

_javascript is by default _

1. synchronous
2. single threaded

---

## _Execution context_

---

Execute one line of code at a time :-> _Each operation waits for the last line to complete before executing_

---

| Blocking code             | Non Blocking Code        |
| ------------------------- | ------------------------ |
| Block the flow of program | Does not block execution |
| Read file sync            | Read File async          |

---

## EVENT LOOP

---

## JS Engine

---

- Memory heap
- Call stack :
  contains:
  fn
  fn
  fn
  Global
  : call stack calls web api

---

## Web Api

---

- Dom api
- set timeout => Register call back (CB)
- set interval
- fetch() => Promise : high priority queue
  : and adds it to call stack directly

---

## Task Queue

---

_Adds registered callback to call stack in js engine_

---
