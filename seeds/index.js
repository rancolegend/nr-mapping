const mongoose = require('mongoose');
const indcities = require('./indcities');
const India = require('../models/india');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/indiancities');
    console.log("database connected!!")
};
const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await India.deleteMany({});
    for (let i = 0; i < 498; i++) {
        const ind = new India({
            city: `${indcities[i].name_of_city}`,
            state: `${indcities[i].state_name}`,
            population: `${indcities[i].population_total}`,
            stateCode: `${indcities[i].state_code}`,
            location: `${indcities[i].lat_long}`
        })
        await ind.save();
    }

}


seedDB().then(() => {
    mongoose.connection.close();
})