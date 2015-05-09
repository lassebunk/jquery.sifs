# jQuery Simple Infinite Scrolling (jquery.sifs)

jQuery.SIFS is the simplest infinite scrolling library you will ever find. The initial release was 60 lines of code in total.

## Usage

If you have this page layout:

![Page layout mockup](https://raw.githubusercontent.com/lassebunk/jquery.sifs/master/assets/mockup.png)

You can enable infinite scrolling by adding the following JavaScript:

```javascript
$.sifs.init({
  containerSelector:  '.posts',
  postSelector:       '.post',
  paginationSelector: '.pagination',
  nextSelector:       'a.next',
  loadingHtml:        'Loading...'
});
```

It's that simple.

## Contributing

Contributions are appreciated and very welcome. You can contribute by
submitting a pull request to this repository.