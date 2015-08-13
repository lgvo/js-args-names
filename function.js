
var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
var FN_ARG_SPLIT = /,/;
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

export default function process(func) {
    if (!func.length) {
        return [];
    } else {
        return func.toString()
            .replace(STRIP_COMMENTS, '')
            .match(FN_ARGS)[1]
            .split(FN_ARG_SPLIT)
            .map(function(arg) {
                return arg.trim();
            });

    }
}
