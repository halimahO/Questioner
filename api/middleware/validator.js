
const validateMeetupInput = (req, res, next) => {
  const { topic, location, happeningOn } = req.body;
  if (!topic || !location || !happeningOn) {
    return res.status(400).json({
      status: res.statusCode,
      message: 'topic, location and happeningOn fields are required',
    });
  }

  if (!String(location)) {
    return res.status(400).json({
      success: false,
      message: 'Location must be a string',
    });
  }
  if (!String(topic)) {
    return res.status(400).json({
      success: false,
      message: 'Topic must be a string',
    });
  }
  return next();
};


const validateRsvp = (req, res, next) => {
  const { status } = req.body;
  if (!String(status)) {
    return res.status(400).json({
      message: 'Rsvp status must be a string',
    });
  }
  return next();
};

const validateQuestionInput = (req, res, next) => {
  const { title, username, question } = req.body;
  if (!String(username)) {
    return res.status(400).json({
      message: 'Username must be a string',
    });
  }
  if (!String(title)) {
    return res.status(400).json({
      message: 'Question title must be a string',
    });
  }
  if (!String(question)) {
    return res.status(400).json({
      success: false,
      message: 'Your question body must be a string',
    });
  }
  if (!title) {
    return res.status(400).json({
      success: false,
      message: ' Title is required',
    });
  }
  if (!username) {
    return res.status(400).json({
      success: false,
      message: ' Username is required',
    });
  }
  if (!question) {
    return res.status(400).json({
      success: false,
      message: ' Question is required',
    });
  }
  return next();
};

const validateUpvote = (req, res, next) => {
  const reqId = Number(req.params.id);
  if (String(reqId)) {
    return res.status(400).json({
      success: false,
      message: 'The upvote id must be a number',
    });
  }
  return next();
};

const validatedownvote = (req, res, next) => {
  const reqId = Number(req.params.id);
  if (String(reqId)) {
    return res.status(400).json({
      success: false,
      message: 'The downvote id must be a number',
    });
  }
  return next();
};

const validate = {
  validateMeetupInput,
  validateRsvp,
  validateQuestionInput,
  validateUpvote,
  validatedownvote,
};

export default validate;
