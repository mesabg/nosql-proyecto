/**
 * Dependencies
 */
const Movie = require('./movie.model');


class MovieManagement{

    /**
     * Create new Movie
     */
    async create (movieModel){
        return new Promise((resolve, reject) => {
            //-- Create new Movie
            var movie = new Movie(movieModel);
        
            //-- Save Movie
            movie.save(function(error){
                if (error) reject(error);
                else resolve(movie);
            });
        });
    };


    /**
     * Retrieve Movie
     */
    async aggregate( aggregateArray ){
        return Movie.collection.aggregate( aggregateArray );
    };



    /**
     * Update Movie
     */
    async update(id, set){
        try {
            return await Movie.findOneAndUpdate({ id:id }, { "$set": set }, {new: true});
        } catch (reason) {
            console.log("An error ocurred while updating user ", reason);
        }
    };



    /**
     * Delete Movie
     */
    async delete(_id){
        try {
            return await Movie.findOneAndRemove({_id: _id});
        } catch (error) {
            console.log("An error ocurred while deleting a movie");
            console.log("Details :: ", error);
        }
    };


    /**
     * Clear Movie Schema
     * DANGER ZONE
     */
    async clear(){
        try {
            await Movie.remove({});
            return "Movie schema is deleted";
        } catch (error) {
            console.log("An error ocurred while clearing the data");
            console.log("Details :: ", error);
        }
    }
};


module.exports = new MovieManagement();