# angular-oboe

This repo is for distribution on `bower`. 

WARNING: This is in a very early stage. NOT SUITABLE FOR PRODUCTION

Many thanks to Jim Higson for the oboe.js library.
See http://www.oboejs.com

## Install

### Try the example

Make sure you have the following installed:

* node with npm (for building the example and running the local server)
* bower (for dependancy management)
* grunt (for running the node tasks)

```shell
git clone https://github.com/RonB/angular-oboe.git
cd angular-oboe
npm install
bower install
grunt
```
Now go to a browser and visit http://localhost:9000 


### Add module to your project using `bower`

Go to your project folder and run

```shell
bower install angular-oboe --save
```

Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/angular-oboe/src/angular-oboe.js"></script>
```

And add `ngOboe` module to your app:

```javascript
angular.module('myApp', ['ngOboe']);
```

## Usage

In your controller you add data to your scope by assingng the response of the Oboe service.
The servcie is called with an object that contains the parameters for the Oboe service. 
They  are the same as the oboe.js API [http://oboejs.com/api].
The pattern is added to the parameters to select JSON objects returned from the server.

```javascript
angular.module('MyApp')
    .controller(['$scope', 'Oboe', function($scope, Oboe) {
        $scope.myData = Oboe({url: '/api/myData', pattern: '{id}');
    }]);
```

## TODO:

This factory is in a very early stage.
Still to do:

* error handling
* test code
* documentation
* ability to add params to the xhr request
* create more examples
* talk to Jim Higson about some issues

Contributers to the project are very welcome!

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
