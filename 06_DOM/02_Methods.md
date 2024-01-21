# DOM METHODS

---

HTML DOM methods are actions you can perform (on HTML Elements).

## HTML DOM properties are values (of HTML Elements) that you can set or change.

## The DOM Programming Interface

---

1. The HTML DOM can be accessed with JavaScript (and with other programming languages).

2. In the DOM, all HTML elements are defined as objects.

3. The programming interface is the properties and methods of each object.

4. A property is a value that you can get or set (like changing the content of an HTML element).

5. A method is an action you can do (like add or deleting an HTML element).

---

```
# we can use the following code to understand how a dom method really works

// this code is runnable on browser console

console.log(window)
console.log(window.documents)
console.log(document)
console.dir(document)
console.log(document.baseURI)
console.log(document.links)
console.log(document.links[2])

```

---

`document.getElementById('title')`
`document.getElementByClassName('heading')`
`document.getElementById('title').innerHTML = <h1>Hello World!</h1>`
`document.getElementById('title').id`
`document.getElementById('title').className`
`document.getElementById('title').getAttribute('id')`
`document.getElementById('title').getAttribute('class')`
`document.getElementById('title').setAttribute('class','test')`
`const title = document.getElementById('title')`

```
# we can also change the styles of html with the help of dom. for e.g,
title.style.backgroundColor = 'green'
title.style.padding = '15px'
title.style.borderRadius = '15px'
title.textContent
// Hello World!
title.innerHTML
// Hello World!
title.innerText
// Hello World!
```

#### title.innerText vs. title.textContent vs. title.innerHTML

---

**innerText** :-> shows only text which is not hidden by css property
**textContent** :-> it shows all the text even if it is hidden by css property
**innerHTML** :-> it will shows not only text but also the `html` written in that id

---

```
# Jquery in DOM as jquery uses the same tag as css (id :-> #, class :-> .)

document.querySelector('#title')
document.querySelector('.heading')
document.querySelector('h2')
// will give only the first h2 tag in the file

const tempList = document.querySelectorAll('li')
// NodeList(3) [li, li, li]  :-> returns nodeList

tempList.style.color = 'green' :-> it will throw an error as tempList is not an array it is nodeList

tempList[0].style.color = 'green'
tempList.forEach(function (l) {
    l.style.backgroundColor = 'green'
})

document.getElementByClassName('list-item')
// return HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]

# TO use forEach with HTMLCollection we have to change it to array first because HTML collection does not contain any looping method

const tempClassList = document.getElementByClassName('list-item')
Array.from(tempClassList)

const convertedArray = Array.from(tempClassList)
convertedArray.forEach(function (li) {
    li.style.color = 'orange'
})
```
