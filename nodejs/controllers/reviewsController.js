const Review = require('../models/review.js')

async function getReviews(req, res) {
    try {
        let book = req.query.bookId;
        const reviews = await Review.find({bookId: book},{populate: 'userId bookId' });
        res.send(reviews);
    } catch (err) {
        res.send("something went wrong" + err);
    }
}

const getReview = (async (req, res) => {
    try {
        const reviewID = req.params.id
        const review = await Review.findOne({
            _id: reviewID
        });
        if (!review) {
            return res.status(400).json({
                message: 'Review not found'
            })
        }
        res.status(200).json(review)
    } catch (err) {
        res.status(400).send('something went wrong : ' + err)
    }
})

const createReview = (async function (req, res) {
    try {
        if (!req.body.review || !req.body.rating || !req.body.bookId || !req.body.userId) {
            return res.status(400).json({
                message: 'Missing required fields'
            });
        }
        const ifExist = await Review.findOne({
            userId: req.body.userId,
            bookId: req.body.bookId
        }) ;
        if (ifExist)
            res.status(400).json({
                message: 'Please edit your review'
            });
        else{
        let reviewInfo = {
            ...req.body
        };
        await Review.create(reviewInfo);
        res.status(200).send("Review saved successfully")
    }
    } catch (err) {
        if (err.name === "ParallelSaveError") {
            res.status(400).send("Parallel Save Error" + err);
        } else {
            res.status(400).send("Something went wrong" + err);
        }
    }
})

const updateReview = (async (req, res) => {
    try {
        const reviewId = req.params.id;
        if (!req.body.review || !req.body.rating || !req.body.bookId || !req.body.userId) {
            return res.status(400).json({
                message: 'Missing required fields'
            });
        }
        const reviewInfo = req.body;

        const updatedReview = await Review.findByIdAndUpdate(
            reviewId, {
                ...reviewInfo
            }, {
                new: true
            }
        );
        if (!updatedReview) {
            return res.status(404).json({
                message: 'Review not found'
            });
        }
        return res.status(200).json("Review updated");
    } catch (err) {
        res.status(400).send(err);
    }

})
const deleteReview = (async (req, res) => {
    try {
        const reviewId = req.params.id
        const result = await Review.deleteOne({
            _id: reviewId
        })
        if (result.Count === 0) {
            return res.status(400).json({
                message: 'Review not found'
            })
        }
        res.status(200).json(result)
    } catch (err) {
        res.status(200).send(err);
    }

})
module.exports = {
    getReviews,
    getReview,
    createReview,
    updateReview,
    deleteReview
}