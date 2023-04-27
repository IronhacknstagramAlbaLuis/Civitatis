module.exports.checkRole = (role) => {
  return (req, res, next) => {
    if (req.user?.role === role) {
      next()
    } else {
      next(createError(403, 'Forbidden'))
    }
  }
}