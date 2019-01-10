// Lets user click a button to indicate wether to attend a meetup or not
// and shows the total number of users that have indicated to attend
const attend = () => {
  const elementId = document.getElementById('attending-number');
  const allAttending = document.getElementById('attending-number').innerHTML;
  if (elementId.className === 'not-clicked') {
    elementId.className = 'clicked';
    const allAttend = parseInt(allAttending) + 1;
    document.getElementById('attending-number').innerHTML = allAttend;
  } else {
    elementId.className = 'not-clicked';
    const allAttend = parseInt(allAttending) - 1;
    document.getElementById('attending-number').innerHTML = allAttend;
  }
};

// Toggle between the hide and show view of the comment
const toggleHideAndShowComment = () => {
  const commentDiv = document.getElementById('view-comments');
  if (commentDiv.style.display === 'none') {
    commentDiv.style.display = 'block';
  } else {
    commentDiv.style.display = 'none';
  }
};

// Lets a user upvote a question
const upvote = () => {
  const upImage = document.getElementById('upvote-img');
  const allVotes = document.getElementById('upvotes-number').innerHTML;
  if (upImage.className === 'not-clicked') {
    upImage.src = './img/upvote.png';
    upImage.className = 'clicked';
    const upVote = parseInt(allVotes) + 1;
    document.getElementById('upvotes-number').innerHTML = upVote;
  } else {
    upImage.src = './img/upvote-gray.jpg';
    upImage.className = 'not-clicked';
    const upVote = parseInt(allVotes) - 1;
    document.getElementById('upvotes-number').innerHTML = upVote;
  }
}

// // Lets a user downvote a question
const downvote = () => {
  const downImage = document.getElementById('downvote-img');
  const allVotes = document.getElementById('downvotes-number').innerHTML;
  if (downImage.className === 'not-clicked') {
    downImage.src = './img/downvote.png';
    downImage.className = 'clicked';
    const downVote = parseInt(allVotes) + 1;
    document.getElementById('downvotes-number').innerHTML = downVote;
  } else {
    downImage.src = './img/downvote-gray.jpg';
    downImage.className = 'not-clicked';
    const downVote = parseInt(allVotes) - 1;
    document.getElementById('downvotes-number').innerHTML = downVote;
  }
}
