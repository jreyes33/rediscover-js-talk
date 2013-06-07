# JavaScript Talk
## Brief history
### Origin
- Created in 1995 by Brendan Eich
- for Netscape Navigator 2
- in just 10 days

### Names
- Mocha (1995)
- LiveScript (1995, early rename)
- JavaScript (1995, marketing)
- JScript (1996, trademark issues)
- ECMAScript (1997, standard)

## Today
### Versions
- JavaScript 1.8.* ([ECMAScript 5.1][es5.1])
- JavaScript 2.0 ([ES6 Harmony][es6]) in development

### Everywhere
- Every modern browser
- Server side (most notably [Node.js][node])
- Desktop ([GNOME Shell][gnome-shell], [Windows 8][win8])
- Mobile ([Phonegap][phonegap], [Firefox OS][firefox-os])

## Coding Style Guide
Based on [idiomatic.js][idiomatic] but with less whitespace inside parenthesis.

- **Always** use **2 spaces** for indentation (no tabs).
- Never leave trailing whitespace.
- Leave one blank line at the end of the file.

## IIFEs
[Immediately-invoked function expressions][iife] are a common pattern used to control variable scope and avoid polluting the global namespace.

## Strict mode
[Strict mode][strict] enables a stricter variant of JavaScript that prevents unsafe statements and common mistakes from being made.

## Prototypal Inheritance
JavaScript is an object-oriented language that uses [prototypal][inheritance1] [inheritance][inheritance2]. It does support a form of "classical" inheritance through [constructor functions][constructors].

## The Module Pattern
- Modules provide a nice way to separate large applications into significant and coherent pieces.
- They allow us to encapsulate functionalities (like private and public properties and methods in "classical" object-oriented language).
- You can read more about it [here][module-pattern].

## Some Libraries & Tools
- DOM + Ajax ([jQuery][jquery])
- Utilities ([Lo-Dash][lodash])
- Module loading ([RequireJS][require])
- Minifiers ([UglifyJS][uglify])
- Transpilers ([CoffeeScript][coffeescript])
- Testing ([Mocha][mocha] + [Chai.js][chai])
- Linting ([JSHint][jshint])
- Code analysis ([plato][plato])
- Development workflow ([Yeoman][yeoman] + [Grunt][grunt] + [Bower][bower])

# Thanks
This presentation was made with [Deck.js][deck] with the [Codemirror plugin] [deck-codemirror] for code samples.


[es5.1]: http://es5.github.io/
[es6]: http://wiki.ecmascript.org/doku.php?id=harmony:harmony
[node]: http://nodejs.org/
[gnome-shell]: https://live.gnome.org/GnomeShell/Development
[win8]: http://msdn.microsoft.com/en-us/library/windows/apps/br211385.aspx
[phonegap]: http://phonegap.com/
[firefox-os]: https://developer.mozilla.org/en-US/docs/Mozilla/Firefox_OS
[idiomatic]: https://github.com/rwldrn/idiomatic.js/#readme
[iife]: http://benalman.com/news/2010/11/immediately-invoked-function-expression/
[strict]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
[inheritance1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain
[inheritance2]: http://h30499.www3.hp.com/t5/HP-Software-Developers-Blog/JavaScript-Inheritance-Revisited/ba-p/6082285
[constructors]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Using_a_constructor_function
[module-pattern]: http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript
[jquery]: http://jquery.com/
[lodash]: http://lodash.com/
[require]: http://requirejs.org/
[uglify]: https://github.com/mishoo/UglifyJS
[coffeescript]: http://coffeescript.org/
[mocha]: http://visionmedia.github.io/mocha/
[chai]: http://chaijs.com/
[jshint]: http://www.jshint.com/
[plato]: https://github.com/jsoverson/plato
[yeoman]: http://yeoman.io/
[grunt]: http://gruntjs.com/
[bower]: http://bower.io/
[deck]: http://imakewebthings.com/deck.js/
[deck-codemirror]: https://github.com/iros/deck.js-codemirror
