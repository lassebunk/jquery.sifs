# jQuery Simple Infinite Scrolling (jquery.sifs)

jQuery.SIFS is the simplest infinite scrolling library you will ever find.
The initial release was just 60 lines of code in total.

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
  loadingHtml:        'Loading...',
  show:               function(elems) {
                        elems.fadeIn(700);
                      }
});
```

It's that simple.

## Wishlist

1. I want to be able to add infinite scrolling to more than one element.

## Contributing

Contributions are appreciated and very welcome. You can contribute by
submitting a pull request to this repository.