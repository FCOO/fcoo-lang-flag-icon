# lang-flag-icon
[Modernizr]: https://modernizr.com/

>SCSS to create css for icons with flags for countries and/or languages and Modernizr-style "show-for-..." and "hide-for-..." classes


## Description

This package contains of a JavaScript object `LangFlag`, and a scss-file `_lang-flag-icon.scss` with classes for icons with to flags and Modernizr-style "show-for-..." and "hide-for-..." classes.

[Modernizr] must be included.

### Icons
Creates css for for elements to display flags representing a countrify and/or a language

Add (`flag-icon` | `flag-icon-background`) and (`flag-icon-XX` | `lang-icon-YY`) and [`flag-icon-squared`] where

- `flag-icon` is for inline elements (eq. `<span>`)
- `flag-icon-background` is block elements
- `flag-icon-XX` for the flag for country-code *XX* where *XX* is the 2-charts country-code given by [ISO 3166-1-alpha-2 2-char codes for countries](https://www.iso.org/obp/ui/#search)
- `lang-icon-YY` for the flag associated with language-code *YY* where *YY* is the 2-charts language-code given by [ISO 639-2 codes for languages](https://www.loc.gov/standards/iso639-2/php/code_list.php)
- `flag-icon-squared` (optional) will give a square flag instead of the default 4/3-size

**Example**

	<button><i class="flag-icon flag-icon-dk"></i>This is Denmark</button>
	<button><i class="flag-icon lang-icon-da"></i>This is Danish</button>
	<button><i class="flag-icon flag-icon-de"></i>This is Germany</button>
	<button><i class="flag-icon lang-icon-de"></i>This is German</button>

### Modernizr
Create (optional) [Modernizr]-classes to display or hide elements when a country and/or language is 'selected' 

**Example**:
The element `<h1 class="show-for-lang-da">Dette vises kun for dansk</h1>` will be visible or hidden depending on `<html>` has the class `lang-da` or `no-lang-da`

## Installation
### bower
`bower install https://github.com/FCOO/lang-flag-icon.git --save`

## Demo
http://FCOO.github.io/lang-flag-icon/demo/ 

## Usage

### LangFlag-object (lang-flag.js)
 

```var myLangFlag = new LangFlag( options );```


#### options
| Id | Type | Default | Description |
| :--: | :--: | :-----: | --- |
| defaultFlag | string | 'dk' | The default value for 'current' flag (XX) to set [Modernizr] classes <code>flag-XX</code>. Change with <code>setFlag( ..)</code> |
| defaultLang | string | 'da' | The default value for 'current' lang (YY) to set [Modernizr] classes <code>lang-YY</code>. Change with <code>setLang( ..)</code> |

			

#### Methods

    .setFlag( flag ): Updates the 'current' flag and update <html> with classes 'flag-XX' and 'no-flag-XX'
    .setLang( lang ): Updates the 'current' lang and update <html> with classes 'lang-YY' and 'no-lang-YY'


### _lang-flag.scss

The scss-file `src/lang-flag-icon.scss` contains four lists (`$flag-list`, `$flag-modernizr-list`, `$lang-list`, `$lang-modernizr-list`) that defines witch country-codes and language-codes are included and witch of them [Modernizr]-classes are created for

To include the css in your project you can optional alter the default contents of the lists and include `_lang-flag-icon.scss` in your scss-file

#### `$flag-list`
	//$flag-list = list of country-codes (XX) where there will be classes flag-icon-XX
	$flag-list: dk, fo, gl; 

#### `$flag-modernizr-list`
	//$flag-modernizr-list = list of country-codes (XX) where modernizr-classes are created (show-for-flag-XX, hide-for-flag-XX) 
	//If the second parameter is true then the classes show-for-no-flag-XX and hide-for-no-flag-XX are also created
	$flag-modernizr-list: (
		dk: false,
		fo: false, 
		gl: false
	); 

#### `$lang-list`
	//$lang-list = list of language-code (YY) and the selected flag/country-codes (XX)
	$lang-list: (
	  da: dk,	//Danish -> Denmark
	  en: gb,	//English -> UK
	  de: de,	//German -> Germany
	  sv: se,	//Swedish -> Sweden
	  no: no,	//Norwegian -> Norway
	  fo: fo,	//Faroese -> Faroe Islands
	  kl: gl	//Kalaallisut/Greenlandic -> Greenland
	);
	
#### `$lang-modernizr-list`
	//$lang-modernizr-list = list of language-codes (YY) where modernizr-classes are created (show-for-lang-YY, hide-for-lang-YY) 
	//If the second parameter is true then the classes show-for-no-lang-YY and hide-for-no-lang-YY are also created
	$lang-modernizr-list: (
		da: false,
		en: false,
		fo: false,
		kl: false
	); 	

#### `@import`
And then include the scss-file
 
	@import "../src/lang-flag-icon";




## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/lang-flag-icon/LICENSE).

Copyright (c) 2015 [FCOO](https://github.com/FCOO)

## Contact information

Niels Holt nho@fcoo.dk


## Credits and acknowledgements

[flag-icon-css](https://github.com/lipis/flag-icon-css) by [Lipsi](https://github.com/lipis)



