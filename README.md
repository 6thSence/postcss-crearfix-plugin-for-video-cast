# PostCSS Clearfix

[PostCSS] plugin when create clearfix from one world.

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
