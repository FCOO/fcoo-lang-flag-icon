/****************************************************************************
	lang-flag-icon.js,

	(c) 2016, FCOO

	https://github.com/FCOO/lang-flag-icon
	https://github.com/FCOO

****************************************************************************/

;(function ($, window, document, undefined) {
	"use strict";

	var ns = window;

	function LangFlag( options ) {
		this.VERSION = "0.1.3";
		this.options = $.extend({
			//Default options
			defaultFlag: 'dk',
			defaultLang: 'da'
		}, options || {} );

		this.modernizr = window.Modernizr;

		function readListFromFontFamily( className ){
			var meta	= $('<meta class="' + className + '">').appendTo(document.head),
					str = meta.css('font-family'),
					i, result = [];
			meta.remove();
			for (i=0; i<str.length; i=i+2 )
				result.push( str.slice(i, i+2) );
			return result;
		}

		//Reads the list of flags from the css-file using the 'dummy' class "lang-flag-icon-flag"
		this.flagList = readListFromFontFamily( 'lang-flag-icon-flag' );

		//Reads the list of flags with modernizr-classes from the css-file using the 'dummy' class "lang-flag-icon-flag-modernizr"
		this.flagModernizrList = readListFromFontFamily( 'lang-flag-icon-flag-modernizr' );

		if (this.flagModernizrList.length)
			this.setFlag( this.options.defaultFlag);

		//Reads the list of langs from the css-file using the 'dummy' class "lang-flag-icon-lang"
		this.langList = readListFromFontFamily( 'lang-flag-icon-lang' );

		//Reads the list of langs with modernizr-classes from the css-file using the 'dummy' class "lang-flag-icon-lang-modernizr"
		this.langModernizrList = readListFromFontFamily( 'lang-flag-icon-lang-modernizr' );

		if (this.langModernizrList.length)
			this.setLang( this.options.defaultLang);



	}

  // expose access to the constructor
  ns.LangFlag = LangFlag;

	//Extend the prototype
	ns.LangFlag.prototype = {

		//setFlag
		setFlag: function( flag ){	this._set( 'flag', this.flagModernizrList, flag );	},

		//setLang
		setLang: function( lang ){	this._set( 'lang', this.langModernizrList, lang );	},

		//_set
		_set: function( prefix, list, id ){
			var i, nextId, isOn, onClassName, offClassName;
			for (i=0; i<list.length; i++ ){
				nextId = list[i];
				isOn = (nextId == id);
				onClassName  = prefix + '-' + nextId;
				offClassName = 'no-' + onClassName;
				$('html').toggleClass( onClassName, isOn );
				$('html').toggleClass( offClassName, !isOn );
			}


		},



	};


	/******************************************
	Initialize/ready
	*******************************************/
	$(function() { //"$( function() { ... });" is short for "$(document).ready( function(){...});"

	}); //End of initialize/ready
	//******************************************



}(jQuery, this, document));