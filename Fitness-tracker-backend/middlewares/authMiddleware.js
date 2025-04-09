const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Access Denied: No Token Provided" });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Set only what you need
        req.user = {
            id: decoded.id,
            role: decoded.role
        };

        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid Token" });
    }
};
