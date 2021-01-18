const mongoose = require('mongoose');
const schema = mongoose.Schema({value: String});
const Values = mongoose.model('values', schema);
// const {MongoClient} = require('mongodb');
// MongoClient.connect('mongodb://localhost:27017/', (err, db) => {
// 	if (err) throw err
//
// 	db.collection('sections')
// 		.find()
// 		.toArray((err, result) => {
// 			if (err) throw err
// 			console.log(result);
// 		});
// });

class DataBase {
	static connectDB() {
		mongoose.connect(process.env.MONGODB_ADDON_URI, { useNewUrlParser: true });
	}

	static getVal(res) {
		Values.find((err, result) => {
			if (err) throw err

			const title = process.env.TITLE || 'NodeJS MongoDB demo'
			// @ts-ignore
			const values = result.reduce((acc, {value, _id}) => ({...acc, [_id]: value}), {})

			res.render('index', {title, values});
		});
	}

	static sendVal(val, res) {
		const request = new Values({value: val});
		request.save((err, result) => {
			if (err) {
				console.log(err);
				res.send(JSON.stringify({status: "error", value: "Error, db request failed"}));
				return
			}
			res.status(201).send(JSON.stringify({status: "ok", value: result["value"], id: result["_id"]}));
		});
	}
}

module.exports = DataBase
