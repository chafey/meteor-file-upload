Template.fileDrop.events({
    // Catch the dropped event
    'dropped #dropzone': function(event, temp) {
        console.log('files dropped');

        FS.Utility.eachFile(event, function(file) {
            var fsFile = new FS.File(file);
            FileUploads.insert(fsFile, function (err, fileObj) {
                if(err) {
                    console.log('Error inserting file: ' + err);
                }
                else {
                    console.log("Inserted file " + fileObj._id);

                }
            });
        });
    }
});
FileUploads.on('stored', function() {
    console.log('file stored');
});