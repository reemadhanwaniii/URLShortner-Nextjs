import mongoose, {Document, Model, Schema} from "mongoose";


const urlSchema = new mongoose.Schema({
    originalURL: {
        type: String,
        required: true,
        unique: true
    },
    shortURL: {
        type: String,
        required: true,
        unique: true
    }
},{
    timestamps: true
});

export interface IUrl extends Document {
    originalURL : string,
    shortURL : string
}

const Url: Model<IUrl> = mongoose.models.Url || mongoose.model<IUrl>('Url',urlSchema);

export default Url;