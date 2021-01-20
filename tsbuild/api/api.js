import fs from 'fs';
import python from './../parse/python';
function check(file) {
    var hasfaile = false;
    try {
        fs.statSync(file);
        hasfaile = true;
    }
    catch (err) {
        hasfaile = false;
    }
    return hasfaile;
}
function read(file) {
    if (check(file)) {
        return fs.readFileSync(file, 'utf8');
    }
    return "";
}
export { check, read, python };
//# sourceMappingURL=api.js.map