"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const services_1 = __importDefault(require("../src/services"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(services_1.default.getNonSensitiveEntries());
});
router.post('/', (req, res) => {
    try {
        const newDiaryEntry = (0, utils_1.default)(req.body);
        const addedEntry = services_1.default.addDiary(newDiaryEntry);
        res.json(addedEntry);
    }
    catch (error) {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    }
});
router.get('/:id', (req, res) => {
    const diary = services_1.default.findById(Number(req.params.id));
    if (diary) {
        res.send(diary);
    }
    else {
        res.sendStatus(404);
    }
});
router.get('/allentries', (_req, res) => {
    res.send(services_1.default.getEntries());
});
router.post('/', (_req, res) => {
    res.send('Saving a diary!');
});
exports.default = router;
