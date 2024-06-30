document.getElementById('writePostButton').addEventListener('click', function() {
    document.getElementById('postOverlay').classList.add('show');
});

document.getElementById('closePostOverlay').addEventListener('click', function() {
    document.getElementById('postOverlay').classList.remove('show');
});

document.getElementById('postSubmit').addEventListener('click', function() {
    const postContent = document.getElementById('postContent').value;
    const postImage = document.getElementById('postImage').files[0];
    const postCategory = document.getElementById('postCategory').value;
    
    if (postContent) {
        // Display a summary of the post content, image name, and selected category
        const postSummary = `Post content: ${postContent}\n` +
                            `Image: ${postImage ? postImage.name : 'No image uploaded'}\n` +
                            `Category: ${postCategory}`;
                            
        alert('Post submitted:\n' + postSummary);
        
        // Close the modal and clear the inputs
        document.getElementById('postOverlay').classList.remove('show');
        document.getElementById('postContent').value = '';
        document.getElementById('postImage').value = '';
        document.getElementById('postCategory').value = 'general'; // Default to the first option
    } else {
        alert('Please enter some content for your post.');
    }
});
