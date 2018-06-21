import _debug from 'debug';
const namespaces = {
    INFO: 'app:info',
    DEBUG: 'app:debug',
    ERROR: 'app:error'
};
const error = _debug(namespaces.ERROR);
error.log = console.error.bind(console);
const info = _debug(namespaces.INFO);
info.log = console.log.bind(console);
const debug = _debug(namespaces.DEBUG);
debug.log = console.info.bind(console);

const enable = (key: String) =>
    ({
        [namespaces.DEBUG]: () =>
            _debug.enable([
                namespaces.INFO,
                namespaces.DEBUG,
                namespaces.ERROR
            ].join(',')),
        default: () => _debug.enable([namespaces.INFO, namespaces.ERROR].join(','))
    }[key]());
enable(process.env.DEBUG || 'default');
export default {
    info,
    debug,
    error
};
