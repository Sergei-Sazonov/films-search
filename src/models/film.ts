import mongoose from 'mongoose';

interface FilmDoc extends mongoose.Document {
    title: string;
    genre1: string;
    genre2: string;
    year: Number;
}

const filmSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: false
        },

        genre1: {
            type: String,
            required: false
        },

        genre2: {
            type: String,
            required: false
        },

        year: {
            type: Number,
            required: false
        }
    },
    {
        collection: 'films',
        toObject: {
            virtuals: true,
        },
        toJSON: {
            virtuals: true,
        },
    },
)
.index({ year: 1, genre1: 1, genre2: 1}, { background: true })
.index({ genre1: 1, genre2: 1}, { background: true })
.index({ genre2: 1}, { background: true });

const Film = mongoose.model<FilmDoc>('Film', filmSchema);

export { Film }
