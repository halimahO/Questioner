
const validateMeetupInput = (req, res, next) => {
  const { topic, location, happeningOn } = req.body;
  if (!String(topic)) {
    return res.status(400).json({
      message: 'topic must be a string',
    });
  }
  if (!String(location)) {
    return res.status(400).json({
      message: 'location must be a string',
    });
  }
  if (!happeningOn) {
    return res.status(400).json({
      success: false,
      message: 'happening_on is required',
    });
  }
  if (!topic) {
    return res.status(400).json({
      success: false,
      message: ' Topic is required',
    });
  }
  if (!location) {
    return res.status(400).json({
      success: false,
      message: ' location is required',
    });
  }
  return next();
};

const validateParamId = (req, res, next) => {
  const reqId = Number(req.params.id);
  if (typeof reqId === 'string') {
    return res.status(403).json({
      status: 403,
      message: 'Id must be a number',
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
  validateParamId,
  validateRsvp,
  validateQuestionInput,
  validateUpvote,
  validatedownvote,
};

export default validate;
