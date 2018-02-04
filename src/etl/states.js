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
const stateCollection = mongoose.connection.collection('state');
const parseCypher = require('../general').parseCypher;


/**
 * Inject Attributes
 * - It creates [State] nodes
 */
async function attributes(){
    try {
        console.log("[ETL] - Loading states...");
        let statements = [];

        //-- Query each state
        let statesCursor = stateCollection.aggregate([
            {
                $project: {
                    _id: 1,
                    name: "$name"
                }
            }
        ]);
        let state = null;
        await Neo4j.runStatement(`CREATE INDEX ON :State(_id)`);
        await Neo4j.runStatement(`CREATE INDEX ON :State(name)`);
        for(let i=1; (state = await statesCursor.next()) != null; i++ ){
            console.log("[ETL] - [%d] saving state [%s - %d]", i, state.name, state._id);
            statements.push(`(state_${state._id}:State ${parseCypher(state)})`);
            await Neo4j.runStatement(`CREATE (:State ${parseCypher(state)})`);
        }
        
        console.log("[ETL] - States loaded successfully!");
        return statements;
    } catch (reason) {
        console.log("An error ocurred on {states-etl} - attributes");
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
        console.log("[ETL] - Loading state relations...");
        let statements = [];

        //-- next_to relation
        let statesCursor = stateCollection.aggregate([
            {
                $unwind: "$next_to"
            },
            {
                $project: {
                    _id: 1,
                    state_id: "$next_to.state_id",
                    data: {
                        distance: "$next_to.distance"
                    }
                }
            }
        ]);
        let state = null;
        for(let i=1; (state = await statesCursor.next()) != null; i++ ){
            console.log("[ETL] - [%d] saving state(next_to) [%d - %d]", i, state._id, state.state_id);
            statements.push(`(state_${state._id})-[:NEXT_TO ${parseCypher(state.data)}]->(state_${state.state_id})`);
            await Neo4j.runStatement(`
                MATCH (stateA:State {_id: '${state._id}'}), (stateB:State {_id: '${state.state_id}'})
                CREATE (stateA)-[:NEXT_TO ${parseCypher(state.data)}]->(stateB)`);
        }


        //-- has_studio relation
        statesCursor = stateCollection.aggregate([
            {
                $match: { has_studio: { $ne: null } }
            },
            {
                $project: {
                    _id: 1,
                    studio_id: "$has_studio"
                }
            }
        ]);
        state = null;
        for(let i=1; (state = await statesCursor.next()) != null; i++ ){
            console.log("[ETL] - [%d] saving state(has_studio) [%d - %d]", i, state._id, state.studio_id);
            statements.push(`(state_${state._id})-[:HAS_STUDIO]->(studio_${state.studio_id})`);
            await Neo4j.runStatement(`
                MATCH (state:State {_id: '${state._id}'}), (studio:Studio {_id: '${state.studio_id}'})
                CREATE (state)-[:HAS_STUDIO]->(studio)`);
        }

        
        console.log("[ETL] - State relations loaded successfully!");
        return statements;
    } catch (reason) {
        console.log("An error ocurred on {states-etl} relations");
        console.log("Details :: ", reason);
        return [];
    }
}


module.exports = {
    attributesLoader: attributes,
    relationsLoader: relations
};