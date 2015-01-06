FileUploads.on('stored', Meteor.bindEnvironment(function (file, name) {
    console.log('file stored to ' + name + '(' + file.isUploaded() + ')');
}));