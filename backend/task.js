import { v4 as uuidv4 } from 'uuid';
import Crate from './models/crates.model.js';

export const createCrate = async () => {
    try {
        let randomId;
        let idExists = true;

        while (idExists) {
            randomId = uuidv4();
            idExists = await Crate.findOne({ id: randomId });
        }

        const randomContent = Math.floor(Math.random() * 1001);
        const randomPrice = Math.round(Math.random() * 200) * 10;

        const newCrate = new Crate({
            id: randomId,
            content: randomContent,
            price: randomPrice
        });

        const savedCrate = await newCrate.save();
        console.log('New crate added:', savedCrate);
    } catch (error) {
        console.error('Error creating new crate:', error.message);
    }
};
