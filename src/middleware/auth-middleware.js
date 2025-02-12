exports.isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }

    return res.status(401).json({
        message: "Author not Authenticated"
    })
}

exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    next();
}