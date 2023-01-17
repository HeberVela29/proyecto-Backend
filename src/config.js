export default {
    fileSystem: {
        path: './db'
    },
    mongodb: {
        cnxStr: 'mongodb+srv://Heber29:Heber29@cluster0.8wmikpx.mongodb.net/test',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {
        "type": "service_account",
        "project_id": "proyectobackend-3957d",
        "private_key_id": "c888cd2d12360a92db382646012040de78e2b9b4",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDTdE1wuhf65NOa\nmzHaBACyNZIMCIyK4QcZmUCxuv4IPhzSd8dba+F2umAW7/hvOCv+M1ldL44mOsYM\nmkzNaXM2LdImOihhScBMIchJW0inkTbUoBq1NPX2P2JaOoMeLEifxx7WdL1k2okO\npYsOY4PqgmnGKdTkURY8ztleyktSWn9W+mo9oBeRyu6WJNw9ii8/01myqEnc46iJ\nfP/pMerxDp+RbrD6SLS93Uu8sprOXSvFG0fNdLS+25cJJ2cm8RbWwFrpAhn6BZs+\nIS/vh1efxQhlnLXa2rowTXU9YI/K2ySqVdIPY9bR5IPwF51BJyR5xUFiw/alxCt4\nLGCjWd/PAgMBAAECggEAFLzak2xMycMDVa2pbUjoizxhvw206tyNhl8spGxDBFVD\nHQkOONMTC5fVBgAxjIbPxGBjf+ttX3vIIe2dYU/ZiBNlAXFsCw6L7hYqFGJVdR7y\nvQDusvLSDyfBjOPMKXtiVqPVTGb/5BI3+thqvistrCQaHOB2tpA/7rrClV9K6nUz\n+B/xwhNpSbXQAGZUeSHcCrCT350z9AaoSdqYyRhP6rhrxTqC9qMcYD5VLpVxu5Nj\n04AEMPW/5FHerBmtDG0JTNegxusyLPj359TtQ1ZcexgLC4d/iCRQM1FAGB/JQJDg\nJfuY0vTcqh2BlkC11Z9EeaE92bKyy5uKV4e93hoSAQKBgQDx7SL7eewM9rERtvRf\nY31IWH5fotsZnnQz/YOit6hrijfuQU5q5PatkMlhtpfq6S/fszZUoPSS/tLYd+6H\nvXuW8Wkf7n86rJzdVEpBqvNTEqx/p8RNS9XGOiPDRJaaKWQC+/+tpCsHhseMGf11\nkXbCwUJMgrQToDU7PjDm8xMqTwKBgQDfwV1Ron3fHrwdXHslsuXLnI9RhUG/efGG\n9FHXMQPykz+w9Iha2vQRnFWTotmKEb3gfmWxQZza5zx71xHmXWaCBmOejt2I3WNz\nByXUeWGMGcfcG/tIoSKFCWjIWsZz522Y2CsDoUv/DOReUKI14Qi/QjphcM7/XlAC\nWKXkQMgSgQKBgBLpSZnE3xnoUtEirxmhylJUcJSDQ4NOKqFByP94QdceN98NBdc/\nTLUmo0dbIacAUXi4JqAY8OVovAyl22SLAFU9S81uNE3e3mhCxYc6mMi+pfNYpvSv\n3+cd9lu2SduFLsc48bSeJ6rv8ztVcMW2+ESjHM6kTPVXybF23BXBnJbrAoGBAJE/\n5cMrl0gynGz27t4fDrspK4QA3BhfIaG4kjP+FpDuc2b8plNMVSnlcUwAZ/UP5VGI\n25zAegFEIGhHyc/gC74WRa7VEQxaosc1+aG/FcqrpajF5U5Vg6IW5JVDEBaHQgb5\nNJsLptivVsO+1j3hkhsN8/XzE/yEDa4oO7A7OWWBAoGBANuj/ZaHsibl5k/XqyzY\ngDoo+Lk8qVYaUSya8SyInk/7GFOZ3fByjCPJdMK1pHTS7oElhE3sXygUyuvqwKQw\n45ADC7ABMyieXjJYVWHzpkq99EjY52BBgD9REK65FTxy0695IVgkxbrOuutLEOQb\n8ABaTEtdtM4TrMASFTW4s2Ax\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-xahcj@proyectobackend-3957d.iam.gserviceaccount.com",
        "client_id": "101258566830121912313",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xahcj%40proyectobackend-3957d.iam.gserviceaccount.com"
    },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: './db/ecommerce.sqlite'
        },
        useNullAsDefault: true
    },

}