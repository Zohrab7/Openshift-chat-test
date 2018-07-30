const url = "mongodb://localhost:27017/mydb";

export class Connection {
    static selectOne(MongoClient, dbname, schemaname, query) {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, (err, db) => {
                if (err) {
                    reject(err);
                } else {
                    db.db(dbname).collection(schemaname).findOne(query, (err, result) => {
                        if (err) throw err;
                        resolve(JSON.parse(result.preloadedState));
                        // console.log(JSON.parse(result.preloadedState));
                    });
                    db.close();
                }
            });
        });
    }
    static selectAll(MongoClient, dbname, schemaname) {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, (err, db) => {
                if (err) {
                    reject(err);
                } else {
                    db.db(dbname).collection(schemaname).find((err, result) => {
                        if (err) throw err;
                        resolve(result);
                        // console.log(JSON.parse(result.preloadedState));
                    });
                    db.close();
                }
            });
        });
    }
    static save(MongoClient, dbname, schemaname, query){
        MongoClient.connect(url, (err, db) => {
            if (err) {
                reject(err);
            } else {
                db.db(dbname).collection(schemaname).save(query, (err, result) => {
                    if (err) throw err;
                    console.log("Admin panel data : ",result);
                });
                db.close();
            }
        });
    }
}

