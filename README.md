# angular-oboe
A service to stream JSON data to an array in your controller by using the Oboe.js library.

This repo is for distribution on `bower`. 

Many thanks to Jim Higson for the oboe.js library.
See http://www.oboejs.com

## What it does
The Oboe service collects a datastream and tries to parse the data as JSON objects.
You can pass a URL and a pattern to the service, which will return a promise.
The user will experience your application as very fast, especially on mobile.

The module takes advantage of the defer and promise implementation of Angular and the Oboe.js library.
The Oboe library parses the JSON stream and recognizes the nodes which meets the criteria in the supplied pattern.
The module then collects the JSON objects and notifys the promise of the new node.

## Install

### To try the example:

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

In your controller you add data to your scope by calling the Oboe service. this returns a promise.
The service is called with an object that contains the parameters for the Oboe service.
They  are the same as the oboe.js API [http://oboejs.com/api].
The pattern is to select JSON objects that meet that pattern.

To use the data in your controller you call the then function of the returned promise.
You can pass three functions where the first one is called when the stream of data has ended, 
the second function is called when there is an error,
the third function is called when a JSON object meeting the pattern is received.

```javascript
angular.module('MyApp')
    .controller(['$scope', 'Oboe', function($scope, Oboe) {
        $scope.myData = [];
        Oboe({
            url: '/api/myData',
            pattern: '{index}'
        }).then(function() {
            // finished loading
        }, function(error) {
            // handle errors
        }, function(node) {
            // node received
            $scope.myData.push(node);
        });
    }]);
```

The entire parameter object will be passed to the Oboe funtion [http://oboejs.com/api].
Use this to accomplish authentication with the backend:

```javascript
angular.module('MyApp')
    .controller(['$scope', 'Oboe', function($scope, Oboe) {
        $scope.myDate = [];
        Oboe({
            url: '/api/myData',
            pattern: '{index}',
            withCredentials: true,
            headers: {
                Authentication: 'Basic '  + btoa('yourusername:yourpassword')
            }
        }).then(function() {
            // finished loading
        }, function(error) {
            // handle errors
        }, function(node) {
            // node received
            $scope.myData.push(node);
        });
    }]);
```

## Caveats

Parsing the entire datastream might take longer if the JSON is served in one chunk because parsing the
data in JS is slower than the standard native parsing in the browser. It might use more CPU than desired in that case.


## TODO:
This factory is in a very early stage.
Still to do:

* error handling
* test code
* documentation

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
