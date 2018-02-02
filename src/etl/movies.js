/**
 * ETL - from mongo to neo4j
 */

/**
 * Global dependencies
 */
const mongoose = require('mongoose');
const Neo4j = require('../neo4j');

/**
 * Local dependencies
 */
const movieCollection = mongoose.connection.collection('movie');
const parseCypher = require('../general').parseCypher;


/**
 * Inject Attributes
 * - It creates [Movie] nodes
 */
async function attributes(){
    try {
        console.log("[ETL] - Loading movies...");
        let statements = [];

        //-- Query each movie
        let moviesCursor = movieCollection.aggregate([
            {
                $project: {
                    _id: 1,
                    data: {
                        name: "$name.original",
                        name_spanish: "$name.spanish",
                        clasification: "$clasification",
                        rating: "$rating",
                        studio: "$studio",
                        distributor: "$director",
                        saga: "$saga",
                        release: "$release",
                        genre: "$genre",
                        running_time: "$running_time",
                        gross: "$gross"
                    } 
                }
            }
        ]);
        let movie = null;
        for(let i=1; (movie = await moviesCursor.next()) != null; i++ ){
            console.log("[ETL] - [%d] saving movie [%s - %d]", i, movie.data.name_original, movie._id);
            statements.push(`(movie_${movie._id}:Movie ${parseCypher(movie.data)})`);
        }
        
        console.log("[ETL] - Movies loaded successfully!");
        return statements;
    } catch (reason) {
        console.log("An error ocurred on {movies-etl} - attributes");
        console.log("Details :: ", reason);
        return [];
    }
}



/**
 * Inject Relations
 * - It creates edges
 */
async function relations(){
    try {
        console.log("[ETL] - Loading movie relations...");
        let statements = [];

        //-- acted_by relation
        //-- ACTED_BY && CHRARACTER_IS
        let moviesCursor = movieCollection.aggregate([
            {
                $unwind: "$acted_by"
            },
            {
                $project: {
                    _id: 1,
                    character_id: "$acted_by.character_id",
                    actor_id: "$acted_by.actor_id",
                    data: {
                        role: "$acted_by.role"
                    }
                }
            }
        ]);
        let movie = null;
        for(let i=1; (movie = await moviesCursor.next()) != null; i++ ){
            console.log("[ETL] - [%d] saving movie(acted_by) [%d - %d]", i, movie._id, movie.actor_id);
            statements.push(`(movie_${movie._id})-[:ACTED_BY ${parseCypher(movie.data)}]->(actor_${movie.actor_id})`);
            console.log("[ETL] - [%d] saving movie(character_is) [%d - %d]", i, movie._id, movie.character_id);
            statements.push(`(movie_${movie._id})-[:CHARACTER_IS ${parseCypher(movie.data)}]->(character_${movie.character_id})`);
        }


        //-- nominated_in relation
        //-- NOMINATED_IN && CATEGORY_IS
        moviesCursor = movieCollection.aggregate([
            {
                $unwind: "$nominated_in"
            },
            {
                $project: {
                    _id: 1,
                    category_id: "$nominated_in.category_id",
                    award_id: "$nominated_in.award_id",
                    data: {
                        won: "$nominated_in.won"
                    }
                }
            }
        ]);
        movie = null;
        for(let i=1; (movie = await moviesCursor.next()) != null; i++ ){
            console.log("[ETL] - [%d] saving movie(nominated_in) [%d - %d]", i, movie._id, movie.award_id);
            statements.push(`(movie_${movie._id})-[:NOMINATED_IN ${parseCypher(movie.data)}]->(award_${movie.award_id})`);
            console.log("[ETL] - [%d] saving movie(category_is) [%d - %d]", i, movie._id, movie.category_id);
            statements.push(`(movie_${movie._id})-[:CATEGORY_IS ${parseCypher(movie.data)}]->(category_${movie.category_id})`);
        }


        //-- directed_by relation
        moviesCursor = movieCollection.aggregate([
            {
                $unwind: "$directed_by"
            },
            {
                $project: {
                    _id: 1,
                    director_id: "$directed_by"
                }
            }
        ]);
        movie = null;
        for(let i=1; (movie = await moviesCursor.next()) != null; i++ ){
            console.log("[ETL] - [%d] saving movie(directed_by) [%d - %d]", i, movie._id, movie.director_id);
            statements.push(`(movie_${movie._id})-[:DIRECTED_BY]->(director_${movie.director_id})`);
        }


        //-- preceded_by relation
        moviesCursor = movieCollection.aggregate([
            {
                $match: { preceded_by: { $ne: null } }
            },
            {
                $project: {
                    _id: 1,
                    movie_id: "$preceded_by"
                }
            }
        ]);
        movie = null;
        for(let i=1; (movie = await moviesCursor.next()) != null; i++ ){
            console.log("[ETL] - [%d] saving movie(preceded_by) [%d - %d]", i, movie._id, movie.movie_id);
            statements.push(`(movie_${movie._id})-[:PRECEDED_BY]->(movie_${movie.movie_id})`);
        }
        
        console.log("[ETL] - Movie relations loaded successfully!");
        return statements;
    } catch (reason) {
        console.log("An error ocurred on {movies-etl} relations");
        console.log("Details :: ", reason);
        return [];
    }
}


module.exports = {
    attributesLoader: attributes,
    relationsLoader: relations
};