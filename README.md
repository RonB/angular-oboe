# angular-oboe

This repo is for distribution on `bower`. 

Many thanks to Jim Higson for the oboe.js library.
See http://www.oboejs.com

## Install

### Try the example

Make sure you have the following installed:

* node with npm (for building the example and running the local server)
* bower (for dependency management)
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
<script src="/bower_components/angular-oboe/dist/angular-oboe.min.js"></script>
```

And add `ngOboe` module to your app:

```javascript
angular.module('myApp', ['ngOboe']);
```

## Usage

In your controller you add data to your scope by assingng the response of the Oboe service.
The service is called with an object that contains the parameters for the Oboe service. 
They  are the same as the oboe.js API [http://oboejs.com/api].
The pattern is added to the parameters to select JSON objects that meet that pattern.

```javascript
angular.module('MyApp')
    .controller(['$scope', 'Oboe', function($scope, Oboe) {
        $scope.myDate = [];
        $scope.myData = Oboe({
            url: '/api/myData',
            pattern: '{index}',
            pagesize: 100
        });
    }]);
```
## Caveats

Parsing the entire datastream might take longer if the JSON is served in one chunk because parsing the
data in JS is slower than the standard native parsing in the browser. It might use more CPU than desired in that case.

If you are sorting the data clientside the entire array is sorted with every page.
Especially with many objects make sure the server sorts the data.

## Solution

The module takes advantage of the defer and promise implementation of Angular and the Oboe.js library.
The Oboe library parses the JSON stream and recognizes the nodes which meets the criteria in the supplied pattern.
The module then collects a pagesize of nodes and adds them to the array in the scope.
After the data is parsed and added to the array the parsed nodes are dropped to free up memory.

## TODO:

This factory is in a very early stage.
Still to do:

* error handling
* test code
* documentation
* ability to add params to the xhr request

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
