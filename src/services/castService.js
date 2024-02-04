const Cast = require('../models/cast');


exports.create = (castData) => Cast.create(castData);

exports.getAll = () => Cast.find();

exports.getByIds = (castIds) => {
    const casts =  Cast.find({_id: { $in: castIds } });
    return casts;
}