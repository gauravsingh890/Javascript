# JAVASCRIPT EXECUTION CONTEXT 
### When the Javascript engine scans a script file, it makes an environment called the **EXECUTION CONTEXT** that handles the entire transformation and execution of the code.

*During the context runtime, the parser parses the source code and allocates memory for the variable and functions. The source code is generated and gets executed*

---
> There are two types of exection contexts:

- **Global context**
- **Function context**
---
## GLOBAL EXECTION CONTEXT
### The global execution context is created when a `javascript` script first starts to run, and it represents the global scope in `Javascript`.

---
1. A global object (also known as `Window` object in a browser environment or the global object in Node.js).
This object serves as the global scope, and all the global variable and functions becomes properties and 
methods of this object.

2. In the global context, the this keyword is bound to the global object. This means that when you prefer to this at the top level your code, it points to the global object.

3. The outer (or parent) environment of the global context is set to *`null`* since there is no outer context beyond the global scope.

4. Any global variable and functions declared in your code are hoisted and initialized within the global context.

5. When your javascript code is loaded by a web browser or executed by a Javascript runtime environment(like Node.js), the global execution context is initialized.

## FUNCTION EXECUTION CONTEXT
### A function execution context is created whenever a function is called, representing the function's local scope

1. When a function is called, a new execution context is initialized specifically for that function. This context include its own set of local variables, parameters, and a reference to the outer environment whereas the function is defined.

2. **Scope Chain**: The function's execution context has access to its local variables and parameters, as well as variables in its outer environment. This forms the scope chain - a hierarchical chain of variable lookup that extends from the innermost context to the outermost global context.

3. **This Binding**: The *`this`* keyword within a function's execution context is determined by how the function was called. It may refer to the global object (in non-strict mode) or be explicitly set by the caller.



== For further read, visit the link ==
[Execution context](https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/)