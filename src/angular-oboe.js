'use strict';
angular.module('ngOboe', [])
        .service('Oboe', ['OboeStream', function (OboeStream) {
            // the passed parameters object need to have a Url and a pattern.
            // all parameters consumed by the oboe module can be passed
            // the url needs to return a json stream. see the oboe documentation
            // the pattern contains a path which selects json objects from the stream
            return function (params) {
                return OboeStream.get(params);
            };
        }])
        .factory('OboeStream', ['$q', function ($q) {
                return {
                    // the get function calls the oboe module to get the JSON data in a stream
                    get: function (params) {
                        var defer = $q.defer();
                        oboe(params)
                            // once the stream starts we can resolve the defer.
                            .start(function () {
                                // maybe notify the start of a stream?...
                            })
                            // for every node containing the specified pattern or if not specified any node
                            .node(params.pattern || '.', function (node) {
                                defer.notify(node);
                                oboe.drop;
                            })
                            .done(function () {
                                // when the stream is done make sure the last page of nodes is returned
                                defer.resolve();
                                oboe.drop;
                            });
                        return defer.promise;
                    }
                };
            }]);