<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Arcsine

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Arcsine distribution.

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-arcsine
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var arcsine = require( '@stdlib/stats-base-dists-arcsine' );
```

#### arcsine

[Arcsine][arcsine-distribution] distribution.

```javascript
var dist = arcsine;
// returns {...}
```

The namespace contains the following distribution functions:

<!-- <toc pattern="*+(cdf|pdf|mgf|quantile)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`cdf( x, a, b )`][@stdlib/stats/base/dists/arcsine/cdf]</span><span class="delimiter">: </span><span class="description">arcsine distribution cumulative distribution function.</span>
-   <span class="signature">[`logcdf( x, a, b )`][@stdlib/stats/base/dists/arcsine/logcdf]</span><span class="delimiter">: </span><span class="description">arcsine distribution logarithm of cumulative distribution function.</span>
-   <span class="signature">[`logpdf( x, a, b )`][@stdlib/stats/base/dists/arcsine/logpdf]</span><span class="delimiter">: </span><span class="description">arcsine distribution logarithm of probability density function (PDF).</span>
-   <span class="signature">[`pdf( x, a, b )`][@stdlib/stats/base/dists/arcsine/pdf]</span><span class="delimiter">: </span><span class="description">arcsine distribution probability density function (PDF).</span>
-   <span class="signature">[`quantile( p, a, b )`][@stdlib/stats/base/dists/arcsine/quantile]</span><span class="delimiter">: </span><span class="description">arcsine distribution quantile function.</span>

</div>

<!-- </toc> -->

The namespace contains the following functions for calculating distribution properties:

<!-- <toc pattern="*+(entropy|kurtosis|mean|median|mode|skewness|stdev|variance)*"> -->

<div class="namespace-toc">

-   <span class="signature">[`entropy( a, b )`][@stdlib/stats/base/dists/arcsine/entropy]</span><span class="delimiter">: </span><span class="description">arcsine distribution differential entropy.</span>
-   <span class="signature">[`kurtosis( a, b )`][@stdlib/stats/base/dists/arcsine/kurtosis]</span><span class="delimiter">: </span><span class="description">arcsine distribution excess kurtosis.</span>
-   <span class="signature">[`mean( a, b )`][@stdlib/stats/base/dists/arcsine/mean]</span><span class="delimiter">: </span><span class="description">arcsine distribution expected value.</span>
-   <span class="signature">[`median( a, b )`][@stdlib/stats/base/dists/arcsine/median]</span><span class="delimiter">: </span><span class="description">arcsine distribution median.</span>
-   <span class="signature">[`mode( a, b )`][@stdlib/stats/base/dists/arcsine/mode]</span><span class="delimiter">: </span><span class="description">arcsine distribution mode.</span>
-   <span class="signature">[`skewness( a, b )`][@stdlib/stats/base/dists/arcsine/skewness]</span><span class="delimiter">: </span><span class="description">arcsine distribution skewness.</span>
-   <span class="signature">[`stdev( a, b )`][@stdlib/stats/base/dists/arcsine/stdev]</span><span class="delimiter">: </span><span class="description">arcsine distribution standard deviation.</span>
-   <span class="signature">[`variance( a, b )`][@stdlib/stats/base/dists/arcsine/variance]</span><span class="delimiter">: </span><span class="description">arcsine distribution variance.</span>

</div>

<!-- </toc> -->

The namespace contains a constructor function for creating an [arcsine][arcsine-distribution] distribution object.

<!-- <toc pattern="*ctor*"> -->

<div class="namespace-toc">

-   <span class="signature">[`Arcsine( [a, b] )`][@stdlib/stats/base/dists/arcsine/ctor]</span><span class="delimiter">: </span><span class="description">arcsine distribution constructor.</span>

</div>

<!-- </toc> -->

```javascript
var Arcsine = require( '@stdlib/stats-base-dists-arcsine' ).Arcsine;
var dist = new Arcsine( 2.0, 4.0 );

var mu = dist.mean;
// returns 3.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var arcsine = require( '@stdlib/stats-base-dists-arcsine' );

console.log( objectKeys( arcsine ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-arcsine.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-arcsine

[test-image]: https://github.com/stdlib-js/stats-base-dists-arcsine/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-arcsine/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-arcsine/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-arcsine?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-arcsine.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-arcsine/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-arcsine/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-arcsine/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-arcsine/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-arcsine/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-arcsine/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-arcsine/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-arcsine/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-arcsine/main/LICENSE

[arcsine-distribution]: https://en.wikipedia.org/wiki/Arcsine_distribution

<!-- <toc-links> -->

[@stdlib/stats/base/dists/arcsine/ctor]: https://github.com/stdlib-js/stats-base-dists-arcsine-ctor

[@stdlib/stats/base/dists/arcsine/entropy]: https://github.com/stdlib-js/stats-base-dists-arcsine-entropy

[@stdlib/stats/base/dists/arcsine/kurtosis]: https://github.com/stdlib-js/stats-base-dists-arcsine-kurtosis

[@stdlib/stats/base/dists/arcsine/mean]: https://github.com/stdlib-js/stats-base-dists-arcsine-mean

[@stdlib/stats/base/dists/arcsine/median]: https://github.com/stdlib-js/stats-base-dists-arcsine-median

[@stdlib/stats/base/dists/arcsine/mode]: https://github.com/stdlib-js/stats-base-dists-arcsine-mode

[@stdlib/stats/base/dists/arcsine/skewness]: https://github.com/stdlib-js/stats-base-dists-arcsine-skewness

[@stdlib/stats/base/dists/arcsine/stdev]: https://github.com/stdlib-js/stats-base-dists-arcsine-stdev

[@stdlib/stats/base/dists/arcsine/variance]: https://github.com/stdlib-js/stats-base-dists-arcsine-variance

[@stdlib/stats/base/dists/arcsine/cdf]: https://github.com/stdlib-js/stats-base-dists-arcsine-cdf

[@stdlib/stats/base/dists/arcsine/logcdf]: https://github.com/stdlib-js/stats-base-dists-arcsine-logcdf

[@stdlib/stats/base/dists/arcsine/logpdf]: https://github.com/stdlib-js/stats-base-dists-arcsine-logpdf

[@stdlib/stats/base/dists/arcsine/pdf]: https://github.com/stdlib-js/stats-base-dists-arcsine-pdf

[@stdlib/stats/base/dists/arcsine/quantile]: https://github.com/stdlib-js/stats-base-dists-arcsine-quantile

<!-- </toc-links> -->

</section>

<!-- /.links -->
