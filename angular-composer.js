function modules(folder)
{
    console.log('Folder: ' + folder);
}


function AngularComposer(options) {
    if (!(this instanceof AngularComposer)) throw new Error('Call AngularComposer using new');

    if (options) {
        console.log(options);
    }
    
    return {
        modules: modules
    };

}

module.exports = AngularComposer;