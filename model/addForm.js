const db = require('../database');

const addFormSchema = new db.Schema({
    teamName: {type: String, require: true},
    teamShortName: {type: String, require: true},
    //
    kapitanName: {type: String, require: true},
    kapitanLink: {type: String, require: true},
    kapitanPozycja: {type: String, require: true},
    //
    s2ndName: {type: String, require: true},
    s2ndLink: {type: String, require: true},
    s2ndPozycja: {type: String, require: true},
    //
    s3rdName: {type: String, require: true},
    s3rdLink: {type: String, require: true},
    s3rdPozycja: {type: String, require: true},
    //
    s4thName: {type: String, require: true},
    s4thLink: {type: String, require: true},
    s4thPozycja: {type: String, require: true},
    //
    s5thName: {type: String, require: true},
    s5thLink: {type: String, require: true},
    s5thPozycja: {type: String, require: true},
    //
    rezerwaName: {type: String, require: true},
    rezerwaLink: {type: String, require: true},
    rezerwaPozycja: {type: String, require: true}
});

const addForm = db.model("addForm", addFormSchema);

module.exports = addForm;