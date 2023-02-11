"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const audio_service_1 = require("./audio.service");
const TOPRATE = "PLUadgMpPaifXLKV26KIqpFp6mpZiyF2l9";
const POPULAR = "PLUadgMpPaifVmhXn4xz-jRO934EAORUnX";
class AudioController {
}
exports.default = AudioController;
_a = AudioController;
AudioController.stream = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { mediaId } = req.query;
        if (!mediaId)
            return res.status(400).json('media id is required');
        let streamUrl = yield (0, audio_service_1.getStreamUrl)(mediaId);
        res.status(200).json(streamUrl);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Internal server error' });
    }
});
AudioController.trending = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json('comming soon');
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Internal server error' });
    }
});
AudioController.info = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { mediaId } = req.query;
        if (!mediaId)
            return res.status(400).json('media id is required');
        let { related, details } = yield (0, audio_service_1.getAudioInfo)(mediaId);
        res.status(200).json({ related, details });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Internal server error' });
    }
});
