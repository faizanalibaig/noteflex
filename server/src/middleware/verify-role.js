async function verifyRole(req, res, next) {
  try {
    const { role } = req.user;
    if (role === 'User') {
      return res.status(401).send({
        status: 'failed',
        message: 'You are not authorized to view this page.',
      });
    }

    next();
  } catch (error) {
    return res.status(401).send({
      success: false,
      message: 'Invalid or expired token',
      error: error.message,
    });
  }
}
