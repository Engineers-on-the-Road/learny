const validator = require("../util/courseValidator");

module.exports = (req, res, next) => {
    const valid = validator(req.body);
    if (valid) {
        next();
    } else {
        console.log(req.body);
        res.status(403).json({ message: "forbidden command" });
    }
};
