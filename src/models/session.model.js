import mongoose from "mongoose";

const sessionSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"]
    },
    refreshToken: {
        type: String,
        required: [true, "Refresh token hash is required"]
    },
    ip: {
        type: String,
        required: [true, "ip is required"]
    },
    userAgent: { // browser and its version
        type: String,
        required: [true, "User agent is required"]
    },
    revoked: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true })

const sessionModel = mongoose.model("Session", sessionSchema);

export default sessionModel;