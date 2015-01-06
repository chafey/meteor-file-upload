Template.fileUploads.helpers({
   fileUploads: function() {
       return FileUploads.find();
   }

});

FileUploads.on('stored', function() {
   console.log('file stored');
});