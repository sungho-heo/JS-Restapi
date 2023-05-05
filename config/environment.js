const environments = {
    development: {
        mysql: {
            username: "root",
            password: "153123gj@#",
            database: "node_api_rest_dev",
        }
    },

    test: {
        mysql: {
            username: "root",
            password: "153123gj@#",
            database: "node_api_rest_test",
        }
    },
}

const nodeEnv = process.env.NODE_ENV || "development";

export default environments[nodeEnv];
