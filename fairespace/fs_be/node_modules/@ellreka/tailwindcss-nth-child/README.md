# @ellreka/tailwindcss-nth-child

Tailwind CSS plugin to generate [nth-child](https://developer.mozilla.org/docs/Web/CSS/:nth-child) variants

## Install

```bash
yarn add -D @ellreka/tailwindcss-nth-child
```

tailwind.config.js

```javascript
plugins: [require('tailwindcss-nth-child')(['3n', '-n+3'])]
```

## Usage

```javascript
variants: {
  textColor: ({ after }) => after(['nth-child-3n', 'nth-child--n+3'])
}
```

## Example

### **:nth-child(3n)**

```jsx
<ul>
  {[1, 2, 3, 4, 5, 6].map((v) => (
    <li key={v} className="nth-child-3n:text-red-500">
      foo_{v}
    </li>
  ))}
</ul>
```

↓

```js
・foo_1
・foo_2
・foo_3 // textColor is red
・foo_4
・foo_5
・foo_6 // textColor is red
```

### **:nth-child(-n+3)**

```jsx
<ul>
  {[1, 2, 3, 4, 5, 6].map((v) => (
    <li key={v} className="nth-child--n+3:text-red-500">
      bar_{v}
    </li>
  ))}
</ul>
```

↓

```js
・bar_1 // textColor is red
・bar_2 // textColor is red
・bar_3 // textColor is red
・bar_4
・bar_5
・bar_6
```
