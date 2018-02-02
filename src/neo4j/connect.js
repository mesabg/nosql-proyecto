/**
 * Global dependencies
 */
const neo4j = require('neo4j-driver').v1;

/**
 * Handle Connection
 */
class Neo4j {
    static instance = null;
    session = null;

    constructor(){
        this.auth = neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD);
        this.driver = neo4j.driver(`bolt://${process.env.NEO4J_HOST}:${process.env.NEO4J_PORT}`, this.auth);
    }

    static getInstance(){
        if (Neo4j.instance === null) Neo4j.instance = new Neo4j();
        return Neo4j.instance;
    }

    closeDriver(){ this.driver.close(); }
    createSession(){
        if (this.session === null) this.session = this.driver.session();
        return this.session;
    }
    closeSession(){
        if (this.session === null) return;
        this.session.close();
    }

    static async runStatement(statement = '', params = {}){
        try {
            return await Neo4j.getInstance().createSession().run(statement, params);
        } catch (reason) {
            console.log("An error ocurred trying to run this statement");
            console.log("Statement [- %s -]\nParams [- %s -]", statement, JSON.stringify(params));
            console.log("Details :: ", reason);
        }
    }
};

module.exports = Neo4j;