"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Token not provided' });
    }
    jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET, (err) => {
        if (err) {
            console.error('Token verification error:', err);
            return res.status(403).json({ error: 'Token is invalid', details: err.message });
        }
        next();
    });
};
exports.authenticateToken = authenticateToken;
