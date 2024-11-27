const mongoose = require("mongoose");

// TODO: Define a new schema named `bookSchema` for the subdocument

const bookSchema = new mongoose.Schema({
	name: { type: String, required: true },
});

const librarySchema = new mongoose.Schema({
	name: { type: String, required: true },
	//
	// TODO: Add the `books` subdocument to the parent document as an array
	books: [bookSchema],
	//
	lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`

const LibraryLocations = mongoose.model("LibraryLocations", librarySchema);

// TODO: Create a new instance of the model including the subdocuments

const booksData = [
	{ name: "Great Expectations" },
	{ name: "Magpye Murders" },
	{ name: "Condition Red - New Worlds in Space" },
];

LibraryLocations.create({
	name: "Riverside Library ********** ",
	books: booksData,
})
	.then((data) => console.log(data))
	.catch((err) => console.log(err));

module.exports = LibraryLocations;
