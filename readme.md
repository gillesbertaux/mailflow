# What is MailFlow?

Just a simple workflow I use for building emails templates. Code you email with SASS & Jade and run a single command to build emails templates with inlined css and cross-clients hacks.

Works with Gulp.

## How to install

Download the package and run npm install to install all the gulp depedencies.

## How to use

To build a simple HTML file linked to a CSS file:
```
gulp
```

To build the final HTML file with the inlined CSS:
```
gulp build
```

## File stucture

```
Mailflow
	build
	includes
	sass 
		base
			_colors.scss
			_font.scss
			_hacks.scss
			_reset.scss
		vendors
			andy.scss
		_main.scss
		style.scss
	gulpfile.js
	package.json
	readme.md
	style.css

```

## Why Jade?

Not very huge fan of Jade but it provides two main advantages:
- no missed closing tags
- provides includes for templating
- provides mixins

## Todo

Next steps are:
- Client testing with Litmus thanks to the gulp-email-builder options
- NPM and Bower packages



