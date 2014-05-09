# ScrollingList

jQuery ScrollingList is a lightweight plugin that enables you to scroll a list of html elements (text, image, etc...) like traditional marquee with better functionality.

## Features

* Simple and lightweight
* Horizontal scroll
* Auto play
* Multiple instances on one page
* Pause on hover over
* Useful options to customize your list scrolling


## Basic Usage

### 1. Include the latest jQuery library and jQuery Scrollbox Plugin on the page
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="jquery.scrollinglist.js"></script>
```

### 2. Create a list of text you want to scroll
```html
<div id="scrollinglist">
  <ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
  </ul>
</div>
```

### 3. Initialization
```js
$('#scrollinglist').scrollinglist();
```

## License

jQuery Scrollbox is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
