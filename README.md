# angular-oboe

This repo is for distribution on `bower`. 

WARNING: This is in a very early stage. NOT SUITABLE FOR PRODUCTION

Many thanks to Jim Higson for the terrific oboe.js library.
See [http://www.oboejs.com]

## Install

Install using `bower`:

```shell
bower install angular-oboe --save
```

Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/angular-oboe/angular-oboe.js"></script>
```

And add `ngOboe` as a dependency for your app:

```javascript
angular.module('myApp', ['ngOboe']);
```

## Usage

In your controller:

```javascript
$scope.myData = Oboe({url: '/api/myData', pattern: '{id}');
```
The parameters for the Oboe service are the same as the oboe.js API [http://oboejs.com/api]

## TODO:

This factory is in a very early stage.
Still to do:

* error handling
* test code
* documentation
* talk to Jim Higson about several issues
* everything I didn't think of yet

## License

The MIT License

Copyright (c) 2010-2012 Google, Inc. http://angularjs.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
