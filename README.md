# PostCSS Clearfix

[PostCSS] plugin when create clearfix from one word.

![wow](https://github.com/6thSence/assets-for-any-occasion/raw/master/200 (8).gif)

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/6thSence/postcss-clearfix.svg
[ci]:      https://travis-ci.org/6thSence/postcss-clearfix

```css
.foo {
   .selector {
	   clearfix: true;
	   }
}
```

```css
.foo {
	.selector {
		}

	.selector:after {
		clear: both;
		display: block;
		content: "";
	}
}
```

## Usage

```js
postcss([ require('postcss-clearfix') ])
```

See [PostCSS] docs for examples for your environment.
